import React from 'react';
import{
    Switch,
    Route,
} from 'react-router-dom'

import SearchForm from './search';
import Forecast from './forecast';

const MainContent = () => {
    return ( 
        <div>
            <Switch>
                <Route exact path="/" component={SearchForm} />
                <Route path='/:zipcode' component={Forecast} />
            </Switch>
        </div>
     );
}
 
export default MainContent;