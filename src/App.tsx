import React from 'react';
import './App.css';
import data from './data.json'
import { Slider } from './components/Slider';

function App() {
  const {items} = data;
    return (
      <div>
        <Slider items={items}/>
      </div>
    );
}

export default App;
