import React, { Component,Fragment } from "react";
import Home from '../component/Home';
import Footer from '../component/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Fragment>
        <Home/>
        <Footer/>
      </Fragment>
    );
  }
}








export default App;
