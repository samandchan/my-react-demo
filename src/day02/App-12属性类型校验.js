import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      msg: 1000
    }
  }
  render() { 
    return (  
      <Fragment>
        <Home num={this.state.msg}></Home>
      </Fragment>
    );
  }
}

class Home extends Component {
  render() { 
    console.log(this);
    
    return (  
      <Fragment>
        <h1>home: {this.props.num + 100}</h1>
      </Fragment>
    );
  }
}

Home.propTypes = {
  num: PropTypes.number
}

export default App;
