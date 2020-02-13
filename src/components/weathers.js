import React, {useState, useEffect} from 'react';
import Weather from './weather'
import SearchForm from './search';


const Weathers = (props) => {
    const [weatherInput, setWeatherInput] = useState('');
    const [activeWeather, setActiveWeather] = useState(null);
    const options = { weekday: "long", 
                        year: "numeric", 
                        month: "short",
                        day: "numeric"};

    const imageClick = (item) => {
        setActiveWeather(item);
    }

    const handleOnChange = event => {
        event.preventDefault();
        setWeatherInput(event.target.value);
    }

    // get data first then re-render the page
    useEffect(() => {
        setActiveWeather(props.item.list[0])
    }, [props.item.list])

    return(
            <div className='container'>
                {/* <SearchForm value={weatherInput}
                            handleOnChange={handleOnChange}/> */}
                    {props.item && (
                        <div>
                            <div className='city-name'>
                                <br />
                                <h4>{props.item.city.name}<span>, {props.item.city.country}</span></h4><br />
                                <Weather activeWeather={activeWeather}/>
                                <hr />
                            </div>
                            <div id='weather-pad'>
                                {props.item.list.map((element) =>
                                    <div className='weather__box'
                                        onClick={() => imageClick(element)}>
                                            <img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                                                    alt=''
                                                    className='weather__box-img'/>
                                                <p className='weather__title'>
                                                    <span>Min: {element.temp.min} °С &nbsp; Max: {element.temp.max} °С</span></p>
                                                <p>{new Date(element.dt * 1000).toLocaleDateString("en-US", options)}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
            </div>
    );
}

export default Weathers;