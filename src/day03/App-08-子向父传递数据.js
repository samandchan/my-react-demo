import React, { Component,Fragment } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleClick() {
    this.props.changeColor('brown')
  }
  render() { 
    return (  
      <Fragment>
        <button onClick={() => {this.handleClick()}}>点我改变盒子颜色</button>
      </Fragment>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      bgColor: 'yellow'
    }
  }

  handleChangeColor(color) {
    console.log(color);
    this.setState({ bgColor: color });
    
  }
  render() { 
    return (  
      <Fragment>
        <div style={ {width: 100, height: 100, backgroundColor: this.state.bgColor} }></div>
        <Home changeColor={this.handleChangeColor.bind(this)} ></Home>

      </Fragment>
    );
  }
}





export default App;
