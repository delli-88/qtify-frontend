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