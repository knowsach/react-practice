import React , {Component } from 'react';

class Welcome extends Component {
isSub = false;
subscribeBtnMessage = 'subscribe';

  constructor(){
    super();
      this.state = {
        message : "Welcome"
    }
  }

  changeState(){
  
    this.isSub =!this.isSub;
    if(this.isSub){
      this.setState({
        message : 'thanks for subscribing'
      });
      this.subscribeBtnMessage = 'unsubscribe';
    }
    else{
      this.setState({
        message : 'Welcome again..'
      });
      this.subscribeBtnMessage = 'subscribe';
    }
  
  }
  
  render(){
    return ( 
      <div>
        <h1>{this.state.message}</h1>
    <button style={{'background':'#f2f2f2'}} onClick={()=> this.changeState()}>  {this.subscribeBtnMessage} </button>
      </div>
    )
  }
}

export default Welcome;