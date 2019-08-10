import React, { Component, Fragment } from "react";


const App = () => {
  let msg = 1000
  return (
    <Fragment>
      <Home num={msg}>
        <h1>这是个标题h1</h1>
      </Home>
    </Fragment>
  )
}

const Home = (props) => {
  console.log(props);
  
  return (
    <Fragment>
      <div> {props.num} </div>
      <div>
        {props.children}
      </div>
    </Fragment>
  )
}

export default App;
