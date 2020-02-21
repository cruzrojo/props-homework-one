import React, { Component } from 'react';
import { Greeting } from './functional'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Burke Rich's Prop Homework</h1>
        <h2>React Skeleton...click...clack...Booooo!!!</h2>
        <Greeting/>
      </div>
    );
  }
}