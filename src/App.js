import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyle } from "./Global.styles";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";


function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/onboarding" element={<Onboarding/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
