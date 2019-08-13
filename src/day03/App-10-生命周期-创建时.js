import React, { Component,Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    console.log('constructor');
    
  }
  componentDidMount() {
    console.log('componentDidMount');
    
  }
  render() {
    console.log('render');
    return (  
      <Fragment>app</Fragment>
    );
  }
}






export default App;
