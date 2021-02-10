import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './ui/containers/dashboard/dashboard';

import './App.scss';

const App = () => {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Redirect to='/' />
            </Switch>
        </div>
    );
};

export default App;
