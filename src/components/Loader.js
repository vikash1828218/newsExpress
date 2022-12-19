import React, { Component } from 'react'
import load from '../load.gif'
export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={load} alt="Loading" />
      </div>
    )
  }
}
