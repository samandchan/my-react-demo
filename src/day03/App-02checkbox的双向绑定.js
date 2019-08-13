import React, { Component, Fragment } from "react";

class App extends Component {
  state = {  
    list: [
      {
        id: 0,
        text: '001',
        value: 'lucy',
        checked: true
      },
      {
        id: 1,
        text: '002',
        value: 'tom',
        checked: false
      },
      {
        id: 2,
        text: '003',
        value: 'ken',
        checked: false
      }
    ]
  }

  handleChange = (i,e) => {
    // console.log(i);
    // console.dir(e);
    // console.log(e.currentTarget.checked);
    // console.log(e.currentTarget.value);
    
    let { list } = this.state
    list[i].checked = e.currentTarget.checked
    this.setState({ list });
  }

  render() {
    let checkedList = this.state.list.filter(v => v.checked === true); 
    return (  
      <Fragment>
        <div>
          {
            this.state.list.map((v, i) => 
              <span key={v.id}><input type="checkbox"  value={v.value} checked={v.checked} onChange={this.handleChange.bind(this,i)} /> {v.text} </span>
              )
          }
        </div>
        <hr/>
        <div>
          {
            checkedList.map(v => 
              <span key={v.id}> {v.value} </span>
              )
          }
        </div>
      </Fragment>
    );
  }
}



export default App;
