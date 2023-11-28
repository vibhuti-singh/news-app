export const fetchNews = async(topic)=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-11-21&sortBy=publishedAt&apiKey=e1b440de86f94d2297b06a0ace8e70c8`)
    const data = await response.json()
    return data.articles
}