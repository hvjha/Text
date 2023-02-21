
import { useState } from "react";
import "./App.css";
// import Footer from "./components/Footer";
import Alert from "./components/Alert";
import About from "./components/About";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=() =>
  {
    if(mode==='light'){

      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'Textutils - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      // document.title = 'Textutils - LightMode';
    }
  }
  return (
    <>
    <Router>
     <Navbar title="Harsh" aboutText="About Harsh" mode={mode} toggleMode={toggleMode}/>
     {/* <Navbar/> */}
     <Alert alert={alert}/>
     <div className="container my-3">
     <Routes>
          <Route exact path="/aboutText" element={<About mode={mode}/>}>
           
          </Route>
          <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Try TextManipulator-word counter character counter Copy Text" mode={mode}/>}>
          
          </Route>
      </Routes>
     </div>
    </Router>
     {/* <About/> */}
     {/* <Footer/> */}
   
    </>
  );
}

export default App;
