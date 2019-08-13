import React, { Component,Fragment } from "react";

class App extends Component {
  state = {  
    num: 1
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextState);
    console.log('shouldComponentUpdate');
    console.log(this.state.num);
    console.log(nextState.num);
    
    if(nextState.num === this.state.num) {
      return false
    }else {
      return true
    }
  }
  
  render() {
    setTimeout(() => {
      this.setState({ num: 100 });
    },2000)
    console.log('render');
    
    return (  
      <Fragment>
        <h2> {this.state.num} </h2>
      </Fragment>
    );
  }
}







export default App;
