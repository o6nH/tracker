import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';

const App: React.FC = () => (
  <Router>
    <Route path='/' component={ Navbar }/>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/login' component={ Login }/>
  </Router>
)

export default App;
