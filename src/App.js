import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div>
    
      <List item={'title'} showItem= {(item) => <h1>{item}</h1>}/>
    </div>
  );
}
function List({item, showItem}) {
const s = showItem();
   return ({s})
}

export default App;
