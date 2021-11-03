import React, { useState, useEffect } from "react";
import Navbar from './components/Navigation/Navbar';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact/Contact';
import SignUp from './components/pages/Devis/SignUp';
import Peinture from './components/pages/Services/Peinture';
import MentionsLegales from './components/pages/Legal/MentionsLegales';
import NotFound from './components/pages/Error404/NotFound';
import Preloader from "./components/Pre";
import ScrollTop from "./components/ScrollTop/ScrollTop";
function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    
    <>
      <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollTop/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/peinture'component={Peinture} />
          <Route path='/mentions-legales'component={MentionsLegales} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
