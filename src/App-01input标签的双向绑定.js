import React, { Component, Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      msg: '123'
    }
  }

  handleChange = (e) => {
    console.log(e);
    console.log(e.currentTarget);
    this.setState({ msg: e.currentTarget.value });
  }
  render() { 
    return (  
      <Fragment>
        输入表单<input type="text" value={this.state.msg} onChange={this.handleChange}/>
        <h1> {this.state.msg} </h1>
      </Fragment>
    );
  }
}


export default App;
