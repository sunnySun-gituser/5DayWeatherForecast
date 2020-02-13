import React, {useState} from 'react';
import{
    withRouter, Redirect,
} from 'react-router-dom'

const SearchForm = (props) => {
    const [weatherInput, setWeatherInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`/${weatherInput}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{marginBotton: '2rem'}}>
                <input value={weatherInput}
                        onChange={e => { setWeatherInput(e.target.value)}}
                        className="form__input"
                        type="text"
                        placeholder='Enter zip code ...' />
                <button className="btn btn-primary">Send</button>
            </form>
        </div>
    );
}

export default withRouter(SearchForm);