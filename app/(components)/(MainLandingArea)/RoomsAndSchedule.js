import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Loading from '../(LoadingError)/Loading';
import Error from '../(LoadingError)/Error';

const RoomsAndSchedule = () => {

    const curSeasonIds = Object.freeze({
        mls: '22974',
        premierLeague: '21646',
        laLiga: '21694',
        ligaMX: '21623',
    });

    const [seasonId, setSeasonId] = useState(curSeasonIds.mls);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await axios.get(`/api/get-season-data?seasonId=${seasonId}`);

                // Don't log when logic for display info is implemented
                console.log(response.data)

                setData(response.data.data);
            } catch (errror) {
                setError('Failed to fetch currently selected season data.')
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
    <div className='text-center'>RoomsAndSchedule</div>
  )
}

export default RoomsAndSchedule