
import './App.css';
import React,{useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
 const [alert,setAlert]=useState(null);

 const ShowAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>setAlert(null),2000)
}


  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
     document.body.style.backgroundColor="white";
     ShowAlert("dark mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      ShowAlert("light mode has been enabled","success");
     
    }
  }
 
  return (
    <>
    <Router>
    <Navbar title="TextUtils" About="About" Home="Home" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/" element={<Textform ShowAlert={ShowAlert} heading="Enter any text here to Analyze below" mode={mode} ></Textform>
          }/>
          <Route exact path="/about" element={<About/>}/>
          
        </Routes>
       
    </div>
    </Router>
    </>
   
  );
}

export default App;
