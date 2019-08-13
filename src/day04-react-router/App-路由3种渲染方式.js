import React, { Component, Fragment } from "react";
import './App.css'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  
  return (
    <div><h2> 首页123 </h2></div>
  )
}

class User extends Component {
  state = {
    list: [
      {
        id: 0,
        name: 'lucy'
      },
      {
        id: 1,
        name: 'tom'
      },
      {
        id: 2,
        name: 'ken'
      }
    ]
  }
  handleClick(id) {
    // console.log(this.props);
    // this.props.history.push('./User/' + id)
    const { url } = this.props.match
    this.props.history.push(url + '/' + id)
  }
  render() { 
    return (  
      <ul>
        {
          this.state.list.map(v => <li key={v.id} onClick={this.handleClick.bind(this,v.id)}> {v.name} </li> )
        }
      </ul>
    );
  }
}



const About = () => <div><Link to="/abcde">关于123</Link></div>

const PageNotFound = () => <div> 404 页面不存在 </div>

// class UserDetail extends Component {
//   render() {
//     console.log(this.props);
//     const {id} = this.props.match.params
//     return (  
//       <Fragment>
//         <div>
//           {id}的详情
//         </div>
//       </Fragment>
//     );
//   }
// }
const UserDetail = (props) => {
  // console.log(props);
  const {id} = props.match.params
  return (
    <div>
      {id}的详情信息
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      msg: '123'
    }
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
            <Switch>
              {/* <Route path="/" exact component={Home} /> */}
              <Route path="/" exact render={(props) => <Home aaa={this.state.msg} {...props} />} />
              <Route path="/User" exact component={User} />
              {/* <Route path="/About" exact component={About} /> */}
              
              <Route path="/User/:id" exact component={UserDetail}/>
              <Route path="/404" exact component = {PageNotFound} />
              <Redirect to="/404" />
            </Switch>
            <Route children={About} />
          </section>
        </Router>
        </div>
      </Fragment>
    );
  }
}
 
export default App;

