import React, { Component,Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      msg: '哈哈'
    }
  }
  render() { 
    return (  
      <Fragment>
        <input type="text" defaultValue={this.state.msg} />
      </Fragment>
    );
  }
}




export default App;
