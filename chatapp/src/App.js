import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"

import Join from '../src/component/Join/Join';
import Chat from '../src/component/Chat/Chat';
// const ENDPOINT="http://localhost:5000/"
// const socket=socketIO(ENDPOINT,{transports:['websocket']})

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Join/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>

    </div>
  );
}

export default App;
