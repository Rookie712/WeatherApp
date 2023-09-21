import React from 'react';
import classes from "./WeatherItem.module.css";

const WeatherItem = (props) => {
  return (
    <div className={classes.content}>
        <p>{props.title}</p>
        <p>{props.data}</p>
    </div>
  )
}

export default WeatherItem;