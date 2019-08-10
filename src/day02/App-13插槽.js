import React, { Component, Fragment } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  

    }
  }
  render() { 
    return (  
      <Fragment>
        <Home>123</Home>
      </Fragment>
    );
  }
}

class Home extends Component {
  render() {
    console.log(this);
    
    return (  
      <Fragment>
        <h1>h1标题 {this.props.children}</h1>
      
      </Fragment>
    );
  }
}

export default App;
