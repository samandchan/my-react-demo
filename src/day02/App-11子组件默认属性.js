import React, { Component, Fragment } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      bgColor: "brown"
    }
  }
  render() { 
    return (  
      <Fragment>
        <div>
          <Home bgColor={this.state.bgColor}></Home>
        </div>
      </Fragment>
    );
  }
}

class Home extends Component {
  render() {
    // console.log(this);
    
    return (  
      <Fragment>
        <h1 style={ {backgroundColor: this.props.bgColor} }>Home</h1>
      </Fragment>
    );
  }
}
Home.defaultProps = {
  bgColor: "yellow"
}


export default App;
