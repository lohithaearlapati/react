
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    console.log("constructor")
    this.state={
     count:0
    }
  }
 componentDidMount(){
  console.log("mounting")
  setInterval(()=>{
    this.setState({count:this.state.count++})
  },1000);
}
  render() {
   
       console.log("render")
       
      
    return (
    <>
     count:{this.state.count}
    </>
    )
  }
}



