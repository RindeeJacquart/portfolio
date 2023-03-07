import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div>
        <Route exact path='/'>
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
