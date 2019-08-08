import React, {Fragment,Component} from 'react';

class App extends Component {
  state = { 
    msg: 'lucy'
  }
  // handleClick() {
    // console.log(this);
    // this.setState({
    //   msg: 'sam'
    // })
  // }
  handleClick = () => {
    console.log(this);
    this.setState({
      msg: 'sam'
    })
  }
  render() { 
    return ( 
      <Fragment>
        <div onClick={this.handleClick}> {this.state.msg} </div>
        <input type="text"/>
      </Fragment>
    );
  }
}


export default App;
