import './App.css';
import main from './pages/main/index'
import registro from './pages/registro'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={main}/>
          <Route path="/Registrar" component={registro}/>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
