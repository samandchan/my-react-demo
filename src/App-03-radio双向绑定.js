import React, { Component } from "react";

class App extends Component {
  state = {  
    list: [
      {
        id: 0,
        text: '男',
        value: 'male',
        checked: false
      },
      {
        id: 1,
        text: '女',
        value: 'female',
        checked: true
      }
    ]
  }
  handleChange = (i, e) => {
    // console.log(e.currentTarget.value);
    console.log(e.currentTarget.checked);
    let {list} = this.state
    list.forEach((v, index) => {
      index === i ? v.checked = true : v.checked = false
    })
    this.setState({ list });
  }
  render() { 
    return (  
      <div>
        {
          this.state.list.map((v, i) => 
          <span key={v.id}><input type="radio" name="gender" value={v.value} checked={v.checked} onChange={this.handleChange.bind(this,i)} /> {v.text} </span>
          )
        }
      </div>
    );
  }
}




export default App;
