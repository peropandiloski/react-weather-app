import React, { useState } from 'react';
import './form-style.css'
import Converter from "node-temperature-converter";
import Weather from "../app_component/weather.component.jsx"


const Form = (props) => {
    console.log(props)

    const [kelvinToCelsius, setkelvinToCelsius] = useState(null);

    function handleTemperature(event) {
        if (event.target.value === 'c') {
            const celsius = new Converter.Kelvin(props.temp_celsius)
            let kelvinToCelsius = Math.floor(celsius.toCelsius())
            setkelvinToCelsius(kelvinToCelsius)
        }
    }
    return (
        <div className="container h-100">
            <form onSubmit={props.loadweather}>
                <div>{props.error ? error() : ""}</div>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            autoComplete="off"
                            placeholder="City" />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            name="country"
                            autoComplete="off"
                            placeholder="Country" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="c">Celsius</label>
                        <input className="temp-type" type="radio" name="temperature" id="c" value="c" onChange={handleTemperature}></input>

                        <label htmlFor="k">Kelvin</label>
                        <input className="temp-type" type="radio" name="temperature" id="k" valiue="k" onChange={handleTemperature}></input>

                        <label htmlFor="f">Fahrenheit</label>
                        <input className="temp-type" type="radio" name="temperature" id="f" value="f" onChange={handleTemperature}></input>

                    </div>

                </div>
            </form>

        </div>
    );
};

function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Plese Enter City and Country...
        </div>
    )
}



export default Form;