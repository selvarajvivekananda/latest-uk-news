//Service layer
import axios from 'axios'

const host = 'http://127.0.0.1:5000'

//Api to get the latest News
const getLatestNews = async () => await axios.get(`${host}/latest-news`)

//Api to get the news articles based on searched keyword 
const getSearchedNews = async (keyword) => await axios.get(`${host}/search-news?keyword=${keyword}`)

export default {
    getLatestNews,
    getSearchedNews
}