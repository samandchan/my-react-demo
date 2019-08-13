import React, { Component } from 'react';

class Footer extends Component {
  state = {  
    msg: '尾部'
  }
  render() { 
    return (  
      <div>
        <h3 className="home"> {this.state.msg} </h3>
      </div>
    );
  }
}
 
export default Footer;