import React, {useState} from 'react';
import './App.css';
import Button from './components/Buttons';
import Navbar from './components/Navbar';

function App() {

  const [getNavbarvalue, setNavbarvalue] = useState("")

  const traceButton = () => {
    setNavbarvalue("Berhasil Muncul")
  }

  return (
    <div className="App">
      <Navbar newValue = {getNavbarvalue}/>
      <Button ifClick = {() => traceButton()} />
    </div>
  );
}

export default App;
