const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');
//const Redis = require('redis');

dotenv.config();
//const redisClient = Redis.createClient();

const {HOST, API_KEY, PORT_NUM } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

// Api to return the latest US news
app.get('/latest-news', (req, res) => {
    axios.get(`${HOST}/top-headlines?country=us&apiKey=${API_KEY}`)
    .then((result) => {
        res.send(result.data)
    })
});

// Api to return the latest US news with redis
// app.get('/latest-news', async (req, res) => {
//     const responseData = await getOrSetCache(`${HOST}/top-headlines?country=us&apiKey=${API_KEY}`, async () => {
//         const { data }  = await axios.get(`${HOST}/top-headlines?country=us&apiKey=${API_KEY}`);
//         return data
//     })
//     res.json(responseData);
// });

//Api to search and return news based on keyword
app.get("/search-news", (req, res) => {
    const { keyword } = req.query
    axios.get(`${HOST}/everything?q=${keyword}&sortBy=publishedAt&apiKey=${API_KEY}`)
    .then((response) => {
        res.send(response.data)
    })
})

// function getOrSetCache ( key, callback) {
//     return new Promise((resolve, reject) => {
//         redisClient.get( key, async (error, data) =>{
//             if(error) return reject(error);
//             if(data && data != null) return resolve(JSON.parse(data))
//             const dataToSet = await callback();
//             redisClient.setex(key, 3600, JSON.stringify(dataToSet));
//             resolve(dataToSet);
//         })
//     })
// }

app.listen(PORT_NUM, () => {
    console.log(`Server started at ${PORT_NUM}`)
})