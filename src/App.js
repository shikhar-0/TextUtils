import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#002b50';
      showAlert("Dark Mode has been enabled!", "success");
      document.title="TextUtils - Dark";
      // setInterval(() => {
      //   document.title = "Install TextUtils"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!", "success");
      document.title="TextUtils - Home"
    }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils"/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;