import React, { useContext } from 'react';
import classes from "./ClockHeader.module.css";
import UserContext from '../content/UserContext';

const ClockHeader = () => {
  const ctx = useContext(UserContext);
  return (
    <div className={classes.header}>
        <h2>{ctx.data["country"]}</h2>
        <h2>{ctx.data["city"]}</h2>
    </div>
  )
}

export default ClockHeader