import React, { Component, Fragment } from "react";

class App extends Component {
  render() { 
    return (  
      <Fragment>
        <div>
          <Home></Home>
          <Footer></Footer>
        </div>
      </Fragment>
    );
  }
}
  
  class Home extends Component {
    render() { 
      return (  
        <Fragment>
          <h1>标题1</h1>
        </Fragment>
      );
    }
  }
  
  class Footer extends Component {
    render() { 
      return (  
        <h3>标题3</h3>
      );
    }
  }
  



export default App;
