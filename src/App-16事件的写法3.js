import React, { Component, Fragment } from "react";

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  state = {  
    msg: 2000
  }
  handleClick() {
    console.log(this);
    
  }
  render() { 
    return (  
      <Fragment>
        <div onClick={this.handleClick}> {this.state.msg} </div>
      </Fragment>
    );
  }
}


export default App;
