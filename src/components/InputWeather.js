import React from 'react';
import classes from "./InputWeather.module.css";

const InputWeather = (props) => {
  return (
    <div className={classes.inputClass}>
        <input  onChange={props.setCityName} value={props.value} type='text'/>
        <button onClick={props.fetchData} ><i className="fa-solid fa-magnifying-glass-location"></i></button>
    </div>
  )
}

export default InputWeather;