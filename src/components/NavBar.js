import React from 'react';
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.nav}>
        <div className={classes.navbar}>
            <h2>AQIWEATHER</h2>
            <div className={classes.linkmain}>
           <div className={classes.link}>
                <a href=''>Home</a>
                <a href=''>About</a>
                <a href=''>Contact</a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar;