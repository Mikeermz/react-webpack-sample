import React from 'react';
import './App.css';

import Body from './components/Body'

const App = ({children}) => {
  return (
    <div className="App">
      <Body content={children} />
    </div>
  )
}

export default App;
