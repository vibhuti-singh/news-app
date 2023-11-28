import React, { useContext, useEffect } from 'react'
import NewsCard from './NewsCard'
import NewsContext from '../context/NewsContext'
import { fetchNews } from '../context/NewsAction'

const NewsList = () => {
  const{allNews, newsDispatch}=useContext(NewsContext)
  const getNews = async(topic)=>{
    const data = await fetchNews(topic);
    newsDispatch({
      type : "GET_NEWS",
      payload :{ news: data, topic : topic}
    })
  }
useEffect(()=>{
getNews("indore");
},[])
  if(!allNews|| allNews.length===0){
    return(
      <h1 className="text-center display-5 col-md-8 col-sm-12">Loading...</h1>
    )
  }
  return (
    <div className='my-1 col-md-8 col-sm-12'>
    {
  allNews.map((news, index)=>
  (<NewsCard key={index} news={news}/>)
  )}
    
   
  </div>
  )
}

export default NewsList
