import React, { Fragment, Component } from "react";

class App extends Component {
  state = {
    msg: 100
  }
  handleClick = () => {
    let {msg} = this.state
    msg+=100
    this.setState({
      msg
    })
    console.log(this.state.msg);
    
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
