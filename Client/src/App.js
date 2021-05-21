import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Registro from './pages/Registro'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/registro' exact component={Registro}/>
        </Switch>
      </Router>
    </div>

  );
}
export default App;
