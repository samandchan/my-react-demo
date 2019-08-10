import React, { Component, Fragment } from "react";

class App extends Component {
  state = {  
    msg: 3000
  }
  handleClick() {
    console.log(this);
  }
  render() { 
    return (  
      <Fragment>
        <div onClick={() => {this.handleClick()}}> {this.state.msg} </div>
      </Fragment>
    );
  }
}

export default App;
