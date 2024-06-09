import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Loading from '../(LoadingError)/Loading';
import Error from '../(LoadingError)/Error';
import Rooms from './Rooms';
import Schedule from './Schedule';
import { DateTime } from 'luxon';

const RoomsAndSchedule = () => {

    const curSeasonIds = Object.freeze({
        mls: '22974',
        premierLeague: '21646',
        laLiga: '21694',
        ligaMX: '21623',
    });

    const [seasonId, setSeasonId] = useState(curSeasonIds.mls);
    const [data, setData] = useState([]);
    const [fixtures, setFixtures] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [timeZone, setTimeZone] = useState('')
    const [dataTimeZone, setDataTimeZone] = useState("UTC")

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
            hour: "",
            minute: "",
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

        matchObject.year = userBasedMatchDate.year
        matchObject.month = userBasedMatchDate.month
        matchObject.day = userBasedMatchDate.day
        matchObject.hour = userBasedMatchDate.hour
        matchObject.minute = userBasedMatchDate.minute

        //Method to grab game status
        if (matchInfo.result_info != null) {
            matchObject.gameStatus = 'FT'
        } else if (1 > 2) {
            // Will need to come up with a way/condition to know if a live game
            matchObject.gameStatus = 'LIVE'
        } else {
            matchObject.gameStatus = 'TBD'
        }

        return matchObject
    }

    const refineSchedule = (rawScheduleData) => {

        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        let sortedFixtures = rawScheduleData.sort((a, b) => a.starting_at_timestamp - b.starting_at_timestamp);

        let fixtures = []

        //console.log(sortedFixtures)
        //console.log(userTimeZone)

        try {
            for (let i = 0; i < sortedFixtures.length; i++) {
                let refinedMatchData = createMatchObject(sortedFixtures[i], userTimeZone)
                fixtures.push(refinedMatchData)
            }
        } catch (error) {
            console.error(error.message)
        }

        console.log(fixtures)

        /*
        let exampleMatchObject = {
            homeTeam: "",
            awayTeam: "",
            homeScore: "",
            awayScore: "",
            year: "",
            month: "",
            day: "",
            hour: "",
            minute: "",
            gameStatus: "",
        }

        let tempMatch = sortedFixtures[0]

        //Method to grab home and away team names
        if (tempMatch.participants[0].meta.location == 'home') {
            exampleMatchObject.homeTeam = tempMatch.participants[0].name 
            exampleMatchObject.awayTeam = tempMatch.participants[1].name 
        } else {
            exampleMatchObject.homeTeam = tempMatch.participants[1].name 
            exampleMatchObject.awayTeam = tempMatch.participants[0].name 
        }  

        // Method to grab Home and Away score
        let matchScores = tempMatch.scores

        for (let i = 0; i < matchScores.length; i++) {
            if (matchScores[i].description == "CURRENT") {
                if (matchScores[i].score.participant == 'away') {
                    exampleMatchObject.awayScore = matchScores[i].score.goals
                } else if (matchScores[i].score.participant == 'home') {
                    exampleMatchObject.homeScore = matchScores[i].score.goals
                }
            }
        }

        // Method to convert time based on users location
        //const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let matchDate = tempMatch.starting_at
        let isoMatchDate = matchDate.replace(' ', 'T') + 'Z';

        let utcMatchDate = DateTime.fromISO(isoMatchDate, { zone : 'utc'});

        let userBasedMatchDate = utcMatchDate.setZone(userTimeZone);

        exampleMatchObject.year = userBasedMatchDate.year
        exampleMatchObject.month = userBasedMatchDate.month
        exampleMatchObject.day = userBasedMatchDate.day
        exampleMatchObject.hour = userBasedMatchDate.hour
        exampleMatchObject.minute = userBasedMatchDate.minute

        //Method to grab game status
        if (tempMatch.result_info != null) {
            exampleMatchObject.gameStatus = 'FT'
        } else if (1 > 2) {
            // Will need to come up with a way/condition to know if a live game
            exampleMatchObject.gameStatus = 'LIVE'
        } else {
            exampleMatchObject.gameStatus = 'TBD'
        }


        console.log(exampleMatchObject)

        console.log(sortedFixtures[0])

        for (let i = 0; i < rawScheduleData.length; i++) {
            console.log(rawScheduleData[i])
        }

        */

    }

    useEffect(() => {

        const getTimeZone = () => {
            const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            // Delete Later
            //console.log("Timezone:", userTimeZone)

            setTimeZone(userTimeZone);
        }

        const fetchSchedule = async () => {
            try {
                // Returns object with data in it about season
                const response = await axios.get(`/api/get-season-data?seasonId=${seasonId}`);
                
                // Contains data, rate_limit, subscription, and timezone
                const dataObject = response.data

                // Grab timezone used by data and set it
                setDataTimeZone(dataObject.timezone)
                console.log("Data timezone:", dataObject.timezone)

                setData(dataObject.data[0]);

                const rawScheduleData = dataObject.data[0].fixtures

                refineSchedule(rawScheduleData);

            } catch (errror) {
                setError('Failed to fetch currently selected season data.')
            } finally {
                setLoading(false);
            }
        };

        getTimeZone();
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

        <Schedule />

    </div>
  )
}

export default RoomsAndSchedule