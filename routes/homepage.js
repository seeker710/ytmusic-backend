const express = require('express');
const axios = require('axios').default;
const router = express.Router();

const config = {
    headers: {
        'X-RapidAPI-Key': process.env.KEY,
        'X-RapidAPI-Host': process.env.HOST,
    }
}

const carousel = {
    trending: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DXbVhgADFy3im&offset=0&limit=8`,
    bolly: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX0XUfTFmNBRM&offset=0&limit=10`,
    pop: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=10`,
}

router.get('/homepage', async (req, res) => {
    try {
        const { data: { items: trendingRes } } = await axios.get(carousel.trending, config);
        const { data: { items: bollyRes } } = await axios.get(carousel.bolly, config);
        const { data: { items: popRes } } = await axios.get(carousel.pop, config);
        res.status(200).send({ trendingRes, bollyRes, popRes, });
    } catch (error) {
        console.log(`error occured: ${error}`);
        res.status(400).json({ error: 'unsuccessful' });
    }
})

module.exports = router;