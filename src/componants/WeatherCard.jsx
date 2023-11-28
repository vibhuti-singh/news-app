import React, { useContext, useEffect } from 'react'
import WeatherContext from './weather/weatherContext'
import {fetchWeather} from './weather/weatherAction'
import NewsContext from '../context/NewsContext'
const WeatherCard = () => {
  const {allNews}= useContext(NewsContext)
  const {weatherData, weatherDispatch}=useContext(WeatherContext)
  const getWeather = async()=>{
    const data = await fetchWeather()
    weatherDispatch({
      type: "GET_WEATHER",
      payload : data
    })
  }

  useEffect(()=>{
    getWeather();
  },[allNews])
  if(!weatherData ){
    return
    <h1>
      no data yet
    </h1>
  }
  return (
    <div className='col-md-4 col-sm-12 h-100vh position-sicky top-40% '>
        <div className="card p-5 rounded-0 bg-primary bg-gradient shadow-sm " style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2h7tHE1iZGRinrLlgYjDlSOSOBRKz-9S9g&usqp=CAU)`}}>
            <h1 className='card-title display-2 text-light'>{weatherData.location.name}</h1>
            <h1 className='display-2 text-warning'>{weatherData.current.temp_c+"°C"}</h1>
        </div>

    </div>
  )
}

export default WeatherCard
