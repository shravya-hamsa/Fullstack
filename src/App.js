import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  const [userInput, setSomething] = useState({
    name:"",
    usn:"",
    university:"",
    gender:"",
    phoneNumber:""
  });
  const [shouldIShowValue, setShouldIShowValue]=useState(false);
  
  
  
  const handleNameChange=(event)=>{
    const newObject={
      name:event.target.value,
      usn:userInput.usn,
      university:userInput.university,
      gender:userInput.gender,
      phoneNumber:userInput.phoneNumber
    }
  setSomething(newObject)
  }
  const handleDataVisibility=()=>{
    setShouldIShow(true)
  }
   
  return(
    <div className="App">
    <input placeholder='Name' onChange={handleNameChange} value={userInput.name}/>
    <button onClick={handleDataVisibility }></button>
    </div>

  );
}

export default App;
