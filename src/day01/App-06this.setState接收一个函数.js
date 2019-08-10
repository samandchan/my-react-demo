import React, { Fragment, Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: 100
    }
  }
  handleClick = () => {
    let { msg } = this.state
    msg += 100
    this.setState({
      msg
    })
    this.setState((preState) => {
      console.log(preState);
      console.log(preState.msg);
      
    })
    // console.log(this.state.msg);
    
  }
  render() {
    return (
      <Fragment>
        <div onClick={this.handleClick} > {this.state.msg} </div>
      </Fragment>
    );
  }
}

export default App;
