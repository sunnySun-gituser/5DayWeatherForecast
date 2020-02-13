import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Weathers from './weathers'

const Forecast = (props) => {
    const [APIKEY, setAPIKEY] = useState('789c7a808690dc32dbf1324ad4b2e1e3');
    // const [weathers, setWeathers] = useState({weather:[{description:''}]});
    const [foreCast, setForeCast] = useState({});

    useEffect(() => {    
        const fetchData = async () => {
            const result = await axios(
                // `http://api.openweathermap.org/data/2.5/weather?zip=${props.match.params.zipcode},us&units=imperial&APPID=${APIKEY}`
                `https://api.openweathermap.org/data/2.5/forecast/daily?q=${props.match.params.zipcode},us&units=imperial&cnt=5&appid=${APIKEY}`
            );

            setForeCast(result.data);
            console.log(result.data)
        }

        fetchData();
    }, [props.match.params.zipcode]);

    return !foreCast
        ?   <div><h2>Loading...</h2></div>
        : (
            <div>
                {foreCast.list && (
                <div className='city-name'>
                    <Weathers item={foreCast}/>
                </div>)}
            </div>);
}
 
export default Forecast;