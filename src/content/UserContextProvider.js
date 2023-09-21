import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = (props) => {
     const [data,setWeatherData] = useState({});
     const [err,setError]  = useState();
     const defaultData = ()=>{
      fetch(`http://api.weatherapi.com/v1/current.json?key=afb9ceb4127748e59bb164446230208&q=Dubai&aqi=no`).then((response)=>{
        return response.json()
      }).then((data)=>{
        console.log(data);
        return setWeatherData({country:data.location["country"],city:data.location["name"],temp:data.current["temp_c"],
        humidity:data.current["humidity"],visibility:data.current["vis_km"],windspeed:data.current["wind_kph"],icon:data.current.condition["icon"]}
        )
      })
      
     }
     useEffect(defaultData,[]);
     const fetchData= async (city)=>{
      setError(false);
      try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=afb9ceb4127748e59bb164446230208&q=${city}&aqi=no`);
        if(!response.ok){
          throw new Error(response.error["message"]);
        }
        const data = await response.json();
        console.log(data);
        setWeatherData((prevData)=>{
          return {country:data.location["country"],city:data.location["name"],temp:data.current["temp_c"],
        humidity:data.current["humidity"],visibility:data.current["vis_km"],windspeed:data.current["wind_kph"],icon:data.current.condition["icon"]}
        })
      }
        catch(error){
          setError((prevData)=>{
            return !prevData;
          });
        }
    }
    const weatherData = {
        data:data,
        fetchWeather:fetchData,
        valid:err
    }
  return (
    <UserContext.Provider value={weatherData}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;