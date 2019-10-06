import React from 'react'

const Weather = ({temp, desc, humid}) => {
    return (
        <div className="col text-center">
            <div className="mb-1 temp">{temp}°C</div>
            <div className="mb-1 description">{desc}</div>
            <div className="mb-1 humidity">{humid}% Humidity</div>
        </div>
    )
}

export default Weather





