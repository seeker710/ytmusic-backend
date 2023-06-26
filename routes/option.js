const express = require('express');
const axios = require('axios').default;
const router = express.Router();

const config = {
    headers: {
        'X-RapidAPI-Key': process.env.KEY,
        'X-RapidAPI-Host': process.env.HOST,
    }
}

const option = {
    commute: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DWVDvBpGQbzXj&offset=0&limit=8`,
    relax: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DWZd79rJ6a7lp&offset=0&limit=8`,
    energize: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX8xfQRRX1PDm&offset=0&limit=8`,
    workout: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX76Wlfdnj7AP&offset=0&limit=8`,
    focus: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX8Uebhn9wzrS&offset=0&limit=8`,
}

router.get('/option', async (req, res) => {
    try {
        const { data: { items: commuteRes } } = await axios.get(option.commute, config);
        const { data: { items: relaxRes } } = await axios.get(option.relax, config);
        const { data: { items: energizeRes } } = await axios.get(option.energize, config);
        const { data: { items: workoutRes } } = await axios.get(option.workout, config);
        const { data: { items: focusRes } } = await axios.get(option.focus, config);
        res.status(200).send({ commuteRes, relaxRes, energizeRes, workoutRes, focusRes, });
    } catch (error) {
        console.log(`error occured: ${error}`);
        res.status(400).json({ error: 'unsuccessful' });
    }
})

module.exports = router;