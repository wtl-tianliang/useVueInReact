import logo from './logo.svg';
import './App.css';
import ElRate from './components/Rate/index.js';
import { useState } from 'react';

function App () {
  const [rate, setRate] = useState(0)
  const onChange = (e) => {
    console.log('onChange', e)
    setRate(e)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt=''></img>
        <ElRate value={rate} onChange={onChange}></ElRate>
      </header>
    </div>
  );
}

export default App;
