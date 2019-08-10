import React, { Component,Fragment } from "react";

class HomeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      value: '123'
    }
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  handleClick = () => {
    this.props.addValue(this.state.value)
  }
  render() { 
    return (  
      <div>
        <input value={this.state.value} onChange={this.handleChange} type="text"/>
        <button onClick={this.handleClick}>添加</button>
      </div>
    );
  }
}

class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      
    }
  }
  render() { 
    return (  
      <div>
        <ul>
          {
            this.props.list.map(v => 
              <li key={v.id}> {v.text} </li>
              )
          }
        </ul>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      list: [
        {
          id: 0,
          text: 'lucy'
        },
        {
          id: 1,
          text: 'tom'
        }
      ]
    }
  }
  handleAddValue(value) {
    console.log(value);
    let {list} = this.state
    let res = list.some(v => v.text === value)
    if(!res) {
      list.push({
        id: Date.now(),
        text: value
      })
      this.setState({ list });
    }
  }

  render() { 
    return (  
      <Fragment>
        <HomeInput addValue={this.handleAddValue.bind(this)}></HomeInput>
        <hr/>
        <HomeList list={this.state.list}></HomeList>
      </Fragment>
    );
  }
}






export default App;
