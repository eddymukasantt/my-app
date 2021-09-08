
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


class GetCurrentTimeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: ''
        };

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
       
        axios.get('http://localhost:8080/getTime')
            .then(res => {
                const time = res.data.currentTime;
                this.setState({ currentTime: time });
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHandler}>
                Show current Time
                </button>
                <p>
                    {this.state.currentTime}
                </p>
            </div>
           
        )
    }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <GetCurrentTimeButton />
      </header>
    </div>
  );
}

export default App;
