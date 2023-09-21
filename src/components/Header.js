import React from 'react';
import ValidCity from './ValidCity';
import classes from "./Header.module.css";
import Clock from './Clock';
import ClockHeader from './ClockHeader';

const Header = () => {
  return (
   
        <div className={classes.clock}>
            <div className={classes.backdrop}>
            <ClockHeader/>
            <Clock/>
            <ValidCity/>
            </div>
        </div>

  )
}

export default Header;
