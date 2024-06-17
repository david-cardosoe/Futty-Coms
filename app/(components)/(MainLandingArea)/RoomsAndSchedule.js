import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Loading from '../(LoadingError)/Loading';
import Error from '../(LoadingError)/Error';
import Rooms from './Rooms';
import Schedule from './Schedule';
import { DateTime } from 'luxon';
import { curSeasonIds, monthsTranslation } from '@/app/(CommonlyUsed)/data';
import { militaryToStandard } from '@/app/(CommonlyUsed)/funtions';

const RoomsAndSchedule = () => {

    const [seasonId, setSeasonId] = useState(curSeasonIds.mls);
    const [data, setData] = useState([]);
    const [fixtures, setFixtures] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [nextMatchId, setNextMatchId] = useState(null);

    //const [timeZone, setTimeZone] = useState('')
    //const [dataTimeZone, setDataTimeZone] = useState("UTC")

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

        //Method to grab game status
        if (matchInfo.state_id == 5) {
            matchObject.gameStatus = 'FT'
        } else if (matchInfo.state_id == 2 || matchInfo.state_id == 22) {
            // Will need to come up with a way/condition to know if a live game
            matchObject.gameStatus = 'LIVE'
        } else if (matchInfo.state_id == 3) {
            matchObject.gameStatus = 'HT'
        }else {
            matchObject.gameStatus = 'TBD'
        }

        return matchObject
    }

    const refineSchedule = (rawScheduleData) => {

        // Print raw schedule data before refinement
        //console.log("Raw Data:", rawScheduleData)

        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        let sortedFixtures = rawScheduleData.sort((a, b) => a.starting_at_timestamp - b.starting_at_timestamp);

        let leagueFixtures = []

        let nextMatchFound = false

        try {
            for (let i = 0; i < sortedFixtures.length; i++) {
                let refinedMatchData = createMatchObject(sortedFixtures[i], userTimeZone)

                // Find next match being played id
                if (!nextMatchFound && refinedMatchData.gameStatus != 'FT') {
                    setNextMatchId(refinedMatchData.id)
                    nextMatchFound = true;
                }

                leagueFixtures.push(refinedMatchData)
            }
        } catch (error) {
            console.error(error.message)
        }
        
        setFixtures(leagueFixtures)
        console.log(leagueFixtures)

    }

    useEffect(() => {

        const fetchSchedule = async () => {
            try {
                // Returns object with data in it about season
                const response = await axios.get(`/api/get-season-data?seasonId=${seasonId}`);
                
                // Contains data, rate_limit, subscription, and timezone
                const dataObject = response.data

                // Grab timezone used by data and set it
                //setDataTimeZone(dataObject.timezone)
                //console.log("Data timezone:", dataObject.timezone)

                setData(dataObject.data[0]);

                const rawScheduleData = dataObject.data[0].fixtures

                refineSchedule(rawScheduleData);

            } catch (errror) {
                setError('Failed to fetch currently selected season data.')
                console.error(error)
            } finally {
                setLoading(false);
            }
        };

        fetchSchedule();
        
    }, [seasonId]);

    if (loading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <Error errorData={error} />
        )
    }

    // Add components to display schedule on the right and currently open rooms on the left.
    // DO THE RIGHT SIDE (SCHEDULE) FRIST
  return (
    <div className='grid grid-cols-2 m-2'>

        <Rooms />

        <Schedule leagueSchedule={fixtures} nextMatchId={nextMatchId} />

    </div>
  )
}

export default RoomsAndSchedule