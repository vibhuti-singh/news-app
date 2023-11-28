import { createContext, useReducer } from "react";
import WeatherReducer from "./weatherReducer";

const WeatherContext = createContext()
export const WeatherProvider =({children})=>{
    const initialState={
       weatherData:null,
    }
    const[state, weatherDispatch]=useReducer(WeatherReducer, initialState)
    return(
<WeatherContext.Provider value={{...state, weatherDispatch}}>
    {children}
</WeatherContext.Provider>
    )
}

export default WeatherContext