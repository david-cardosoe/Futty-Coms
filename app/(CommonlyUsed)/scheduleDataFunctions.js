import { DateTime } from 'luxon';
import { monthsTranslation, matchStatusCodes } from './data';
import { militaryToStandard } from './funtions';

export const refineSchedule = (rawScheduleData, curSelectedLeague) => {

    // Print raw schedule data before refinement
    //console.log("Raw Data:", rawScheduleData)

    let foundNextMatchId = null

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (curSelectedLeague != 'MLS') {
        rawScheduleData = roundsScheduleRefinement(rawScheduleData)
    } else {
        rawScheduleData = rawScheduleData.fixtures
    }

    let sortedFixtures = rawScheduleData.sort((a, b) => a.starting_at_timestamp - b.starting_at_timestamp);

    let leagueFixtures = []

    let nextMatchFound = false

    try {
        for (let i = 0; i < sortedFixtures.length; i++) {
            let refinedMatchData = createMatchObject(sortedFixtures[i], userTimeZone)

            // Find next match being played id
            if (!nextMatchFound && refinedMatchData.gameStatus != 'FT') {
                foundNextMatchId = refinedMatchData.id
                nextMatchFound = true;
            }

            leagueFixtures.push(refinedMatchData)
        }
    } catch (error) {
        console.error(error.message)
    }

    console.log(leagueFixtures)
    console.log("Next Match ID:", foundNextMatchId)
    
    return { leagueFixtures, foundNextMatchId }

}

const roundsScheduleRefinement = (rawData) => {

    // Get users time zone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get league rounds (This is for leagues that work with match weeks like PL, La Liga, Liga MX)
    const leagueRounds = rawData.rounds

    // Get all fixtures into an array

    let seasonFixtures = []

    for (let i = 0; i < leagueRounds.length; i++) {
        let roundFixtures = leagueRounds[i].fixtures

        for (let j = 0; j < roundFixtures.length; j++) {
            seasonFixtures.push(roundFixtures[j])
        }
    }

    return seasonFixtures

}

const createMatchObject = (matchInfo, userTimeZone) => {

    let matchObject = {
        id: "",
        homeTeam: "",
        awayTeam: "",
        homeScore: "",
        awayScore: "",
        year: "",
        month: "",
        day: "",
        time: "",
        gameStatus: "",
    }

    // Grab and set id
    matchObject.id = matchInfo.id

    //Method to grab home and away team names
    if (matchInfo.participants[0].meta.location == 'home') {
        matchObject.homeTeam = matchInfo.participants[0].name 
        matchObject.awayTeam = matchInfo.participants[1].name 
    } else {
        matchObject.homeTeam = matchInfo.participants[1].name 
        matchObject.awayTeam = matchInfo.participants[0].name 
    }  

    // Method to grab Home and Away score
    let matchScores = matchInfo.scores

    for (let i = 0; i < matchScores.length; i++) {
        if (matchScores[i].description == "CURRENT") {
            if (matchScores[i].score.participant == 'away') {
                matchObject.awayScore = matchScores[i].score.goals
            } else if (matchScores[i].score.participant == 'home') {
                matchObject.homeScore = matchScores[i].score.goals
            }
        }
    }

    // Method to convert time based on users location
    let matchDate = matchInfo.starting_at
    let isoMatchDate = matchDate.replace(' ', 'T') + 'Z';

    let utcMatchDate = DateTime.fromISO(isoMatchDate, { zone : 'utc'});

    let userBasedMatchDate = utcMatchDate.setZone(userTimeZone);

    // Gets only the last 2 #'s of the year passed.
    matchObject.year = userBasedMatchDate.year.toString().substring(2)

    // Translate Month # to Month name abbreviation using dict
    matchObject.month = monthsTranslation[userBasedMatchDate.month]
    
    matchObject.day = userBasedMatchDate.day

    // Changed time from military time to standard
    matchObject.time = militaryToStandard(userBasedMatchDate.hour, userBasedMatchDate.minute)

    let stateId = matchInfo.state_id

    //Method to grab game status
    if (matchStatusCodes['FT'].includes(stateId)) {
        matchObject.gameStatus = 'FT'
    } else if (matchStatusCodes['LIVE'].includes(stateId)) {
        // Will need to come up with a way/condition to know if a live game
        matchObject.gameStatus = 'LIVE'
    } else if (stateId == 3) {
        matchObject.gameStatus = 'HT'
    }else if (matchStatusCodes['TBD'].includes(stateId)) {
        matchObject.gameStatus = 'TBD'
    }

    return matchObject
}