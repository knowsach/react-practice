import React, { Component } from 'react'

class Counter extends Component {

  is10Reached = false;
  constructor(props){
    super(props)

    this.state ={
      count : 0
    }
  }


  incrementCounter(){

    this.setState({
      count : ++this.state.count
    })

   this.is10Reached = this.state.count >= 10 ? true : false;
  }

  decrementCounter(){
    this.setState({
      count : --this.state.count
    });

    this.is10Reached = this.state.count < 10 ? false : true;
  }

  render() {
    return (
      <div>

        <h3> count: {this.state.count}</h3>
        <button onClick={()=> this.incrementCounter()}>increment</button>
        <button style={{marginLeft:'10px'}} onClick={()=> this.decrementCounter()}> decrement </button>
        {this.is10Reached ?  <h4 >you reached 10.... hurray</h4> : null}
         
      </div>
    )
  }
}

export default Counter
