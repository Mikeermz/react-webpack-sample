import React, { Component, Fragment } from 'react';

const initalState = {
  count: 0,
  name: 'MediaKeyMessageEvent',
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = initalState
  }

  componentDidUpdate() {

  }

  
  agregar = () => {
    debugger;
    this.setState({
      count: this.state.count + 1
    })
    debugger;
  }

  restar = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  reset = () => {
    this.setState( initalState )
  }

  render() { 
    return (  
      <Fragment>
          <p>{this.state.count}</p>
          <button onClick={this.agregar}>AGREGAR</button>
          <button onClick={this.restar}>DISMINUIR</button>
          <button onClick={this.reset}>RESETEAR</button>
      </Fragment>
    );
  }
}
 
export default Counter;