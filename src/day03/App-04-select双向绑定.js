import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      value: 'apple'
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  }
  render() { 
    return (  
      <div>
        请选择你喜欢的水果: 
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="cherry">车厘子</option>
          <option value="durian">榴莲</option>
          <option value="apple">苹果</option>
          <option value="kiwi">猕猴桃</option>
        </select>
      </div>
    );
  }
}
 



export default App;
