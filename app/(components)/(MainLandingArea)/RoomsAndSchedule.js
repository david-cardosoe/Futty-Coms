import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../(LoadingError)/Loading';
import Error from '../(LoadingError)/Error';
import Rooms from './Rooms';
import Schedule from './Schedule';
import { curSeasonIds } from '@/app/(CommonlyUsed)/data';
import { refineSchedule } from '@/app/(CommonlyUsed)/scheduleDataFunctions';

const RoomsAndSchedule = ({ curSelectedLeague }) => {

    //const [seasonId, setSeasonId] = useState(curSeasonIds.m ls);
    //const seasonId = curSeasonIds[curSelectedLeague];

    const seasonId = curSeasonIds[curSelectedLeague];

    const [data, setData] = useState([]);
    const [fixtures, setFixtures] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [trending, setTrending] = useState(false)

    const [nextMatchId, setNextMatchId] = useState(null);

    useEffect(() => {

        const fetchSchedule = async () => {
            try {

                setLoading(true)

                // Returns object with data in it about season
                const response = await axios.get(`/api/get-season-data?seasonId=${seasonId}`);
                
                // Contains data, rate_limit, subscription, and timezone
                const dataObject = response.data

                const rawData = dataObject.data[0]

                setData(rawData);

                const { leagueFixtures, foundNextMatchId } = refineSchedule(rawData, curSelectedLeague)

                //console.log(leagueFixtures)
                //console.log(foundNextMatchId)

                setFixtures(leagueFixtures)
                setNextMatchId(foundNextMatchId)

            } catch (error) {
                setError('Failed to fetch currently selected season data.')
                console.error(error)
            } finally {
                setLoading(false);
            }
        };

        // Placeholder for trending page
        if (curSelectedLeague == "Trending") {
            setTrending(true)
        } else {

            setTrending(false)
            fetchSchedule();   

        }
        
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

    if (trending) {
        return(
            <div className='text-center'><p>Work in progress...</p></div>
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