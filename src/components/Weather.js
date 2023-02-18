import React from 'react';


const Weather = ({weatherData}) => (
     <div>
        <p>Temprature: {weatherData.main.temp}</p>
        </div>
)

export default Weather;