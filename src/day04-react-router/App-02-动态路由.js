
import React, { Component, Fragment } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <div><h2> 首页123 </h2></div>

class User extends Component {
  render() { 
    return (  
      <ul>
          <li><Link to="/User/0">jack</Link></li>
          <li><Link to="/User/1">lucy</Link></li>
          <li><Link to="/User/2">tom</Link></li>
      </ul>
    );
  }
}



const About = () => <div><h2>关于123</h2></div>

class UserDetail extends Component {
  render() { 
    return (  
      <Fragment>
        <div>
          ###的详情
        </div>
      </Fragment>
    );
  }
}

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
            <Route path="/" exact component={Home} />
            <Route path="/User" exact component={User} />
            <Route path="/About" exact component={About} />
            <Route path="/User/:id" exact component={UserDetail}/>
          </section>
        </Router>
        </div>
      </Fragment>
    );
  }
}
 
export default App;

