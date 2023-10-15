import axios from "axios";

export const BACKEND_POINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async() => {
    try {
        const res = await axios.get(`${BACKEND_POINT}/albums/top`)
        // console.log({res})
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const fetchNewAlbums = async() => {
    try {
        const res = await axios.get(`${BACKEND_POINT}/albums/new`)
        // console.log({res})
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const fetchGenres = async() => {
    try {
        const res = await axios.get(`${BACKEND_POINT}/genres`)
        return res.data.data
    } catch (error) {
        console.error(error)
    }
}

export const fetchSongs = async() => {
    try {
        const res = await axios.get(`${BACKEND_POINT}/songs`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const fetchFaqs = async() => {
    try {
        const res = await axios.get(`${BACKEND_POINT}/faq`)
        return res.data.data
    } catch (error) {
        console.error(error)   
    }
}