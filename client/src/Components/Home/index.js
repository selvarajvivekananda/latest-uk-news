import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from '../LandingPage';
import Search from '../Search';

const HomePage = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/Search" component={Search} />
            <Route path="/LandingPage" component={LandingPage} />
            <Route component={LandingPage} />
        </Switch>
    </BrowserRouter>
);

export default HomePage;