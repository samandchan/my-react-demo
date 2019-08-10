import React, { Component,Fragment } from "react";

class Home extends Component {
  state = {  

  }
  render() { 
    return (  
      <Fragment>
        <h1> {this.props.aaa} </h1>
      </Fragment>
    );
  }
}

class App extends Component {
  state = {  
    msg: '程序'
  }
  render() { 
    return (  
      <Fragment>
        <Home aaa={this.state.msg} />
      </Fragment>
    );
  }
}






export default App;
