import React, { useContext } from 'react';
import classes from "./ValidCity.module.css";
import UserContext from '../content/UserContext';
const ValidCity = () => {
const ctx = useContext(UserContext);
  return (
    <div className={classes.validCity}>{ctx.valid && <p>Enter Valid city.</p>}</div>
  )
}

export default ValidCity;