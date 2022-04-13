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
  /*const [userInput, setSomething] = useState({
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
    <button onClick={handleDataVisibility }> start</button>
    </div>

  );*/
  const [userInput1 , setUserInput1]=useState({
    
    sst:0,
    hindi:0
    
  })
  const [userInput2,setUserInput2]=useState({
    sst:0,
    hindi:0
  })
  const clickme=()=>{
    if(userInput1.sst>userInput2.sst)
    {
      alert("1 wins sst")
    }
    else{
      alert("2 wins sst")
    }
  }

  const handleSChange1 = (event) => {   
    const obj1={
      sst:event.target.value,
      hindi:userInput1.hindi
    }  
    setUserInput1(obj1) 
  }
  
  const handleSSChange1 = (event) => {   
    const obj1={
      
      sst:userInput1.sst,
      hindi:event.target.value
    }  
    setUserInput1(obj1)   
  }
  
  const handleSSSChange1 = (event) => {   
    const obj2={
      sst:event.target.value,
      hindi:userInput2.hindi
    }  
    setUserInput2(obj2) 
  }
  
  const handleSSSSChange1 = (event) => {   
    const obj2={
      
      sst:userInput2.sst,
      hindi:event.target.value
    }  
    setUserInput2(obj2)   
  }
  
  
    return (
      <div className="App">
   <form>
      
      <input onChange={handleSChange1} value={userInput1.sst}></input><br></br>
      <input onChange={handleSSChange1}value={userInput1.hindi}></input><br></br>
      <input onChange={handleSSSChange1} value={userInput2.sst}></input><br></br>
      <input onChange={handleSSSSChange1}value={userInput2.hindi}></input><br></br>
  
      <button onClick={clickme}>
      Click me</button>
     
    </form> 
  
  
      </div>
     
    );
  }
  
  export default App;
  //camel case
  //{} instead of ""
  //5ip-name usn colg age gender--

