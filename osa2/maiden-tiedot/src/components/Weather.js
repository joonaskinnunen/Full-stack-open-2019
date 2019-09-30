import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = (props) => {
    const [newWeather, setNewWeather] = useState({
        current: {
            weather_code: 116,
            weather_icons: [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            ],
            weather_descriptions: [
                "Partly cloudy"
            ],
            wind_speed: 6,
            wind_dir: "ESE",
        }
    })
    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=e68efa3ed0972dcdd782f7c761575392&query=${props.city}`)
            .then(response => {
                console.log(props.city)
                console.log(response)
                setNewWeather(response.data)
            })
    }, [])
    console.log(newWeather.current)
    return (

        <div>
            <h2>Weather in {props.city}</h2>
            <p><b>Temperature:</b> {newWeather.current.temperature} Celsius</p>
            {newWeather.current.weather_icons.map((x, i) => <img src={x} key={i} alt="" />)}
            {newWeather.current.weather_descriptions.map(x => <p key={x}>{x}</p>)}
            <p><b>Wind: </b> {newWeather.current.wind_speed} kph, direction {newWeather.current.wind_dir}</p>

        </div>

    )
}

export default Weather