import React, { Component, Fragment } from "react";


class App extends Component {
  state = {  
    msg: 1000
  }
  handleClick() {
    console.log(this);
    
  }
  render() { 
    return (  
      <Fragment>
        <div onClick={this.handleClick.bind(this)}> {this.state.msg} </div>
      </Fragment>
    );
  }
}

export default App;
