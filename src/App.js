import {useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   Routes,
//   BrowserRouter,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');   // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
    document.title = 'TextUtils-Dark Mode';

  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils-Light Mode';

  }
}

return (
  <>
  {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className='container'>
    {/* <Routes> */}
          {/* <Route path="/about" element={<About />}>  */}
          {/* <About />   */}
          {/* </Route> */}
          {/* <Route path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Route> */}
    {/* </Routes> */}
    </div> 
    {/* </BrowserRouter> */}
  </>

);
}

export default App;
