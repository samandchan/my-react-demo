import React, { Component, Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      msg: 1001
    }
  }
  handleClick(a, b) {
    console.log(this);
    console.log(a);
    console.log(b);
    
    
  }
  render() { 
    return (  
      <Fragment>
        <p onClick={this.handleClick.bind(this,'123')}> {this.state.msg} </p>
        <p onClick={(e) => {this.handleClick(e,'456')}}>2000</p>
        <p onClick={(e) => {this.handleClick('789',e)}}>3000</p>
        <p onClick={this.handleClick}>4000</p>
      </Fragment>
    );
  }
}

export default App;
