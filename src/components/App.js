import React from 'react';
import './App.scss';
import Main from './Main';

class App extends React.Component {
    render() {
        return (
        <div className='app'>
            <div className='topBar'>
                <h1>Welcome to {this.props.title} </h1>
            </div>
            <Main />
        </div>
        );
    }
}