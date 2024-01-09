import React, { Component } from 'react'

export default class App2 extends Component {
  constructor(){
    super()
    console.log("constructor")
    this.state={
     count1:0
    }
  }
 componentWillUnmount(){
  console.log("unmount")
 
  
}
  render() {
   
       console.log("render")
    return (
    <>
       count1:{this.state.count1}
    </>
    )
  }
}