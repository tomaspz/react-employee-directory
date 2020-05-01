import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Shared/Navbar';
import Directory from './containers/Directory';
import Details from './containers/Details';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Directory} />
      <Route exact path="/directory" component={Directory} />
      <Route exact path="/details" component={Details} />
    </Router>
  );
}

export default App;
