import React from "react";
import "./weather.style.css";

const Weather = props => {
    return (
        <div className="container text-light">
            <div className="Card">
                <h1 className="text-white py-3">{props.cityname}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`} />
                </h5>

                {/* Get Celsius */}
                {props.temp_celsius ? (
                    <h1 className="py-2">{props.temp_celsius}&#x2103;</h1>
                ) : null}

                {/* show max and min temp */}
                {maxminTemp(props.temp_min, props.temp_max)}

                {/* Weather description */}
                <h4 className="py-3">
                    {/*desctiption with first letter uppercaser */}
                    {props.description.charAt(0).toUpperCase() +
                        props.description.slice(1)}
                </h4>
            </div>
        </div>
    );
};

export default Weather;

function maxminTemp(min, max) {
    if (max && min) {
        return (
            <h3>
                <span className="px-4"><span className="tempTxt">Temp Min:</span>{min}&#x2103;</span>
                <span className="px-4"><span className="tempTxt">Temp Max:</span>{max}&#x2103;</span>
            </h3>
        );
    }
}
