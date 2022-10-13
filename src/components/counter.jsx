import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <>
      <span>{this.state.count}</span>
      <button>Increment</button>
      </>
    )
  }
}
