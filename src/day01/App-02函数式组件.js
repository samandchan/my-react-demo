import React, {Fragment} from 'react';

function App() {
  let msg = '123'
  setTimeout(() => {
    msg = '456'
  }, 2000);
  return (
    <Fragment>
      {msg}
    </Fragment>
  )
}

export default App;
