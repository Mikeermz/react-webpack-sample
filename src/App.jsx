import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Body from './components/Body'
import Navbar from './components/global/navbar'

const App = ({children}) => {
  return (
    <div className="App">
      <Navbar />
      <Body content={children} />
    </div>
  )
}

export default App;
