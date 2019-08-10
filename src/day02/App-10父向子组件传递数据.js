import React, { Component, Fragment } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      bgColor: "red",
      bgColor22: "blue",
      font: "70px"
    }
  }
  render() { 
    return (  
      <Fragment>
        <div>
          <Home color={this.state.bgColor}></Home>
          <Footer color22={this.state.bgColor22} font={this.state.font}></Footer>
          <Main {...this.state}></Main>
        </div>
      </Fragment>
    );
  }
}

class Home extends Component {
  render() {
    console.log(this);
    
    return (  
      <Fragment>
        <h1 style={ {backgroundColor: this.props.color} }>Home</h1>
      </Fragment>
    );
  }
}

class Footer  extends Component {
  render() { 
    return (  
      <Fragment>
        <h2 style={ {backgroundColor: this.props.color22, fontSize: this.props.font} }>footer</h2>
      </Fragment>
    );
  }
}

class Main extends Component {
  render() {
    console.log(this)

    return (
      <Fragment>
        <h1 style={ {backgroundColor: this.props.bgColor22, fontSize: this.props.font} }>main</h1>
      </Fragment>
    );
  }
}




export default App;
