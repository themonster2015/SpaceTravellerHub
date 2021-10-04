import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './assets/rocket.png';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="main-header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route path="/missions" />
          <Route path="/profile" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
