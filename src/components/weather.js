import React from 'react';


const Weather = (props) => {
    console.log(props.activeWeather)
    // console.log(new Date(props.activeWeather.dt*1000).toLocaleDateString())
    const options = { weekday: "long", year: "numeric", month: "short",
    day: "numeric" };

    return !props.activeWeather
        ? <div><h2>Loading...</h2></div>
        : (
            <div className='col-md-3'>
                {props.activeWeather && (
                <div className='weather__box__1'>
                    <p>{new Date(props.activeWeather.dt * 1000).toLocaleDateString("en-US", options)}</p>
                    <img src={`http://openweathermap.org/img/wn/${props.activeWeather.weather[0].icon}@2x.png`} alt=''/>
                    <p><span>{props.activeWeather.weather[0].main}: &nbsp;  {props.activeWeather.weather[0].description}</span></p>
                    <p>{props.activeWeather.temp.day} °С temperature from {props.activeWeather.temp.min} to {props.activeWeather.temp.max} °С</p>
                    <p><span> humidity: {props.activeWeather.humidity} </span></p>
                    <p><span> wind:  {props.activeWeather.speed} m/s </span></p>
                    <p><span> clouds:  {props.activeWeather.clouds}</span></p>
                </div>)}
            </div>);
}

export default Weather;