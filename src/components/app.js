import React, { Component } from 'react';

import { Greeting } from './functional'

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      content: "PeekaBoo",
      showContent: true
    }
  }
    toggleContent = () => {
      if (this.state.showContent) {
          this.setState({ 
            content: "",
            showContent: false })
      } else {
          this.setState({
            content: "PeekaBoo", showContent: true })
      }

  }
  render() {
    return (
      <div className='app'>
        <h1>Burke Rich's Prop Homework</h1>
        <h2>React Skeleton...click...clack...Booooo!!!</h2>
        <Greeting name="Burke" /> 
        <Greeting name="Kent" /> 
        <Greeting name="Daniel" /> 
        <button onClick={this.toggleContent}>Toggle Content Button</button>
        <h3>{this.state.content}</h3>
      </div>
    );
  }
}