import React from 'react';
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
function App() {

  return (
    
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/peinture'component={Peinture} />
          <Route path='/mentions-legales'component={MentionsLegales} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
