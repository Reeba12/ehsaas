import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from './components/Contact';
ReactDOM.render(
  <React.StrictMode>
     
     <Router>
     <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
     </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


