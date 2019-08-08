import React, {Fragment} from 'react';

function App() {
  // let msg = "我的世界"
  // let num = 300
  // let isActive = false
  let obj = { age: 18, name: 'lucy' }
  let arr = ['lucy','sam']
  // let arr2 = [{age:22,name: 'lucy'}, {age: 23, name: 'sam'}]
  function showMsg(msg) { 
    return msg
  }
  let list = [ {id: 0, name: 'tom'}, {id: 1,name: 'ken'}, {id: 2, name: 'lucy'} ]
  let htmlStr = '<h1>这是h1标题</h1>'
  return (
    <Fragment>
      {/* <div>hello, world! i love </div>
      <div>{msg}</div>
      <h2>{num}</h2> */}
      {/* <h1> {isActive} </h1>
      <div> {null} </div>
      <div> {undefined} </div> */}
      {/* <div> {obj} </div> */}
      <div> {obj.age} </div>
      <div> {arr} </div>
      {/* <div> {arr2} </div> */}
      <div> {true? '123': '456'} </div>
      <div> {showMsg('789')} </div>
      <ul>
        {
          list.map(v => <li key={v.id}> {v.name} </li>)
        }
      </ul>
      <div style={ {color: 'red', fontSize: 50} }> 这是一段文本 </div>
      <div className="box">这是一个盒子</div>
      <div dangerouslySetInnerHTML={ {__html: htmlStr} }></div>
      <label htmlFor="nickname">姓名</label>
      <input id="nickname" />
      </Fragment>
  );
}

export default App;
