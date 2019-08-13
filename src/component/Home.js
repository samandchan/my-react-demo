import React, { Component } from 'react';
import  './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      msg: '首部'
    }
  }
  render() { 
    return (  
      <div>
        <h3 className="home"> {this.state.msg} </h3>
      </div>
    );
  }
}

export default Home;