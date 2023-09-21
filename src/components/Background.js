import ReactDom from 'react-dom';
import React from 'react';
import nature from "../assets/nature.jpg";
import classes from "./Background.module.css";

const Background = () => {
    const Image = (props)=>{
        return (
            <div className={classes.main}>
                <img src={props.nature} alt="Riverimage"/>
            </div>
        );
    }
  return (
    <React.Fragment>
        {ReactDom.createPortal(<Image nature={nature}/>,document.getElementById("background-image"))}
    </React.Fragment>
  )
}

export default Background