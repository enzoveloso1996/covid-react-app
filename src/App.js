import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

//components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Local from './components/Local'
import Global from './components/Global'
import Countries from './components/Countries'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <main>
            <Switch>
              <Route path="/" exact component={Local}>
              </Route>
              <Route path="/global" exact component={Global}>
              </Route>
              <Route path="/countries" exact component={Countries}>
              </Route>
              <Route path="/info" exact component={Info}>
              </Route>
            </Switch>
          </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
