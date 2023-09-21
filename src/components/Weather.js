import React, {useRef, useContext, useState} from 'react';
import classes from "./Weather.module.css";
import UserContext from '../content/UserContext';
import WeatherItem from './WeatherItem';
import InputWeather from './InputWeather';
const Weather = (props) => {
//  const [city,setCity]=useState('Select any city?');
const ctx = useContext(UserContext);
const [city,setCity] = useState(" ");
const setCityName = (event)=>{
    setCity(event.target.value);
}
 const fetchData= (event)=>{
    ctx.fetchWeather(city);
    setCity(" ");    
 }
  return (
    <div className={classes.weather}>
            <div className={classes.city}>
                <div className={classes.wheel}><i className={`${classes.sun} fa-regular fa-sun`}></i></div>
                <InputWeather setCityName={setCityName} value={city} fetchData={fetchData}/>
                <div className={classes.cityName}>
                    <p>{ctx.data["city"]}</p>
                    <img src={ctx.data["icon"]}/>
                </div>
                
            </div>
            <div className={classes.wrapper}>
            <WeatherItem title="Temperature" data={`${ctx.data["temp"]}C`}/>
            <hr/>
            <WeatherItem title="Humidity" data={`${ctx.data["humidity"]}`}/>
            <hr/>
            <WeatherItem title="Visibility" data={`${ctx.data["visibility"]}KM`}/>
            <hr/>
            <WeatherItem title="Wind Speed" data={`${ctx.data["windspeed"]}KPH`}/>
            <hr/>
            </div>
         </div>
  )
}

export default Weather