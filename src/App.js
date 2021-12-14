import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Posts from "./pages/Posts/Posts";
import Resume from './pages/Resume/Resume';
import PageNotFound from "./pages/404NotFound/PageNotFound";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router basename="/">
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} exact/>
        <Route path='/resume' component={Resume} exact/>
        <Route path='/posts' component={UnderConstruction} exact/>
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;