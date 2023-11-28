import React, { useContext } from 'react'
import NewsList from '../componants/NewsList'
import WeatherCard from '../componants/WeatherCard'
import Quote from '../componants/Quote'
import NewsContext from '../context/NewsContext'

const Home = () => {
  const{topic}=useContext(NewsContext);
  return (
    <div className='container p-5'>
        <Quote/>
        <h1 className='text-center display-4 my-3'>Trending news about {topic}</h1>
    <div className="row">
    <WeatherCard/>
    <NewsList/>
    
    </div>
  </div>
  )
}

export default Home
