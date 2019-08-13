import React, { Component,Fragment } from "react";

class HomeInput extends Component {
  handleChange(e) {
    // console.log(e.target);
    this.props.changeValue(e.target.value)
  }
  handleClick() {
    // console.log(this.props);
    this.props.addValue(this.props.inpValue)
  }
  render() { 
    return (  
      <Fragment>
        <div>
          请输入:<input type="text" value={this.props.inpValue} onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)} >添加</button>
        </div>
      </Fragment>
    );
  }
}

class HomeList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.list !== nextProps.list
  }
  render() {
    console.log('homeList----render被触发');
    
    return (  
      <Fragment>
        <ul>
          {
            this.props.list.map(v => <li key={v.id}> {v.text} </li> )
          }
        </ul>
      </Fragment>
    );
  }
}


class App extends Component {
  state = {
    value: '123',  
    list: [
      {
        id: 0,
        text: 100
      },
      {
        id: 1,
        text: 200
      },
      {
        id: 2,
        text: 300
      }
    ]
  }
  handleChangeValue = (value) => {
    // console.log(value);
    this.setState({ value });
  }
  handleAddValue = (value) => {
    // console.log(value);
    let { list } = this.state
    // 深拷贝
    list = JSON.parse(JSON.stringify(list))
    let isHas = list.some(v => v.text === value)
    if(!isHas) {
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
        <HomeInput inpValue={this.state.value} changeValue={this.handleChangeValue} addValue={this.handleAddValue} />
        <HomeList list={this.state.list}  />
      </Fragment>
    );
  }
}








export default App;
