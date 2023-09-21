import React, { useEffect,useReducer,useState } from 'react';
import classes from "./Clock.module.css";

const timeReducer = (state,action)=>{
  if(action.type === "DAY"){
    if(action.day === 0){
      return {weekDay:"Sunday",date:state.date}
    }
    else if(action.day === 1){
      return {weekDay:"Monday",date:state.date}
    }
    else if(action.day === 2){
      return {weekDay:"Tuesday",date:state.date}
    }
    else if(action.day === 3){
      return {weekDay:"Wednesday",date:state.date}
    }
    else if(action.day === 4){
      return {weekDay:"Thursday",date:state.date}
    }
    else if(action.day === 5){
      return {weekDay:"Friday",date:state.date}
    }
    else if(action.day === 6){
      return {weekDay:"Saturday",date:state.date}
    }
  }
  if(action.type=== "DATE"){
    let date = action.day.getDate().toString();
    if(date<10){
      date = "0"+`${date}`;
    }
    let month = (action.day.getMonth() + 1).toString();
    if(month<10){
      month = "0"+`${month}`
    }
    const year = action.day.getFullYear();
    return {weekDay:state.weekDay,date:`${month}/${date}/${year} `}
  }
}
const Clock = () => {
    const newDate = new Date().toLocaleTimeString();
    const [time,setTime] = useState(newDate);
    const [week,dispatchDay] = useReducer(timeReducer,{
      weekDay:'Mon',
      date:'Aug 1,2023'
    })
    useEffect(()=>{
      setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
        dispatchDay({type:"DAY",day:new Date().getDay()})
        dispatchDay({type:"DATE",day:new Date()})
      },1000)
    })
    
  return (
    <div className={classes.clock}>
      <div className={classes.middle}>
      <h1>{time}</h1>
      </div>
      <div className={classes.weekday}>
      <h4>{week.weekDay}</h4>
      <h4>{week.date}</h4>
      </div>
    </div>
  )
}

export default Clock;