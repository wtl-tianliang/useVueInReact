import logo from './logo.svg';
import './App.css';

import ElRateCDN from './components/ElRateCDN'
import { useState } from 'react';

function App () {
  const [rate, setRate] = useState(2)
  const onChange = (e) => {
    console.log('onChange', e)
    setRate(e)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt=''></img>
        <ElRateCDN value={rate} onChange={onChange}></ElRateCDN>
      </header>
    </div>
  );
}

export default App;
