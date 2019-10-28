import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';

class Main extends React.Component {
    render() {
        return (
        <Switch>
            <Route path='/login' component={Login}></Route>
            {/* <Route path='/signup' component={Signup}></Route> */}
            {/* <Route path='/scan' component={Scan}></Route> */}
            {/* <Route path='/menu' component={Menu}></Route> */}
        </Switch>
        );
    }
}