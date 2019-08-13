import React, { Component,Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.inp = React.createRef()
  }
  handleClick() {
    console.log(this.inp);
    this.inp.current.focus()
    
  }
  render() { 
    return (  
      <Fragment>
        <input ref={this.inp} type="text"/>
        <button  onClick={this.handleClick.bind(this)}>让文本框获得焦点</button>
      </Fragment>
    );
  }
}





export default App;
