import axios from 'axios';

export default async function handler(req, res) {

    // Get seasonId from query parameters
    const { seasonId } = req.query;

    if (!seasonId) {
        return res.status(400).json({error: 'Season ID is required'});
    }

    // Storing API Token
    const API_TOKEN = process.env.MYSPORTMONKS_API_TOKEN

    const API_ADDRESS = `https://api.sportmonks.com/v3/football/seasons/${seasonId}?api_token=${API_TOKEN}&include=fixtures`

    try {
        const response = await axios.get(API_ADDRESS, {
            params: {
                api_token: API_TOKEN,
            }
        });

        res.status(200).json(response.data)

    } catch (error) {
        console.error('Error fetching season data:', error);
        res.status(500).json({error: 'Failed to fetch season data'})
    }

}