import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyle } from "./Global.styles";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Messages from "./pages/Messages";
import Onboarding from "./pages/Onboarding";


function App() {
  const [data, setData] = React.useState('')

    // React.useEffect(() => {
    //     fetch('/api')
    //     .then((res) => res.json())
    //     .then(json => console.log(json))
    // }, [])



  return (
    <div className="App">
        <GlobalStyle/>
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/onboarding" element={<Onboarding/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/messages" element={<Messages/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
