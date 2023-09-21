import React from 'react';
const UserContext = React.createContext({
    data:{},
    fetchWeather:(city)=>{},
    valid:null
})

export default UserContext;