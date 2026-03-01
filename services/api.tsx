const BASE_URL = 'https://newsapi.org/v2'
const apiKey = 'fffd35a9cb0e4bd4b92552b263afe012'

const AllNews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/everything?q=apple&from=2026-02-21&to=2026-02-21&sortBy=popularity&apiKey=${apiKey}`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json()
        return json
    } catch (error) {
        throw error
    }
}

const OtomotifNews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/everything?q=tesla&from=2026-02-01&sortBy=publishedAt&apiKey=${apiKey}`)
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
    } catch (error) {
        throw error;
    }
}

const Api = {
    AllNews,
    OtomotifNews
}

export default Api;