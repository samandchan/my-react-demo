import React, { Component, Fragment } from "react";

import { connect } from 'react-redux';
// import { NUM_ADD } from './store/actionTypes';
import { numAdd, numINIT, numSUB } from './store/actionCreator';


// 加
class AddBtn extends Component {
  render() {
    // console.log(this.props); 

    return (  
      <button onClick={this.props.numAdd}> + </button>
    );
  }
}

class SubBtn extends Component {
  render() { 
    return (  
      <button onClick={this.props.numSub} > - </button>
    );
  }
}


class App extends Component {
  componentDidMount() {
    this.props.numInit()
  }
  render() { 
    // console.log(this.props);
    
    return (  
      <Fragment>
        <div style={ {margin: "20px auto", width: "200px"} }>
          <AddBtn {...this.props}></AddBtn>
          <span> 数量: {this.props.num123} </span>
          <SubBtn {...this.props}></SubBtn>
        </div>
      </Fragment>
    );
  }
}


const mapPropsToState = (state) => {
  // console.log(state);
  return {
    num123: state.fruitReducer.num
  }
}

const mapPropsToDispatch = (dispatch) => {
  return {
    numAdd: () => {
      // dispatch({
      //   type: NUM_ADD,
      //   value: 1
      // })
      dispatch(numAdd())
    },
    numInit: () => {
      dispatch(numINIT())
    },
    numSub: () => {
      dispatch(numSUB())
    }
  }
}


export default connect(mapPropsToState, mapPropsToDispatch)(App)

