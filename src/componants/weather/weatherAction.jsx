export const fetchWeather = async()=>{
    const res = await fetch("https://api.weatherapi.com/v1/current.json?key=ef48b3dcd7ca4027b1e134559233108&q=indore&aqi=yes")
const data= await res.json()
return data
}