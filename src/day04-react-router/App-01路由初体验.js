import React, { Component, Fragment } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <div><h2> 首页123 </h2></div>
const User = () => <div><h2>用户123</h2></div>
const About = () => <div><h2>关于123</h2></div>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Fragment>
        <div className="main">
        <Router>
          <nav>
            <Link to="/">首页</Link>
            <Link to="/User">用户</Link>
            <Link to="/About">关于</Link>
          </nav>
          <section>
            <Route path="/" component={Home} />
            <Route path="/User" component={User} />
            <Route path="/About" component={About} />
          </section>
        </Router>
        </div>
      </Fragment>
    );
  }
}
 
export default App;

