import logo from './logo.svg';
import './App.css';
import Input from './Input'
import Result from './Result'
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App-header">
      <Input setInputValue={setInputValue}/>
      <Result inputValue={inputValue}/>
    </div>
  );
}

export default App;
