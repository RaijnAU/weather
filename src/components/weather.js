import React from 'react'

const Weather = ({temp, description, humidity}) => {
    return (
        <div className="col text-center">
            <div className="mb-1 temp">{temp}°C</div>
            <div className="mb-1 description">{description}</div>
            <div className="mb-1 humidity">{humidity}% Humidity</div>
        </div>
    )
}

export default Weather





