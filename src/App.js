import React, { Fragment, Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'tom'
    }
  }
  handleClick = () => {
    // console.log(this);
    // this.setState({
    //   msg: 'lucy'
    // })
    // setTimeout(() => {
    //   console.log(this.state.msg);
    // }, 1);
    this.setState((preState) => {
      console.log(preState);
      return {
        msg: 'lucy'
      }
    })
  }
  render() {
    return (
      <Fragment>
        <div onClick={this.handleClick} data-index="007"> {this.state.msg} </div>
        <input type="text" />
        <div data-aaa="hi" bbb="ke">哈哈哈</div>
        <input type="checkbox"  defaultChecked/>
      </Fragment>
    );
  }
}

export default App;
