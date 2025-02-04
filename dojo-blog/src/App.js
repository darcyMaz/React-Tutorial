import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content"> 
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/create"> 
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// Switch component makes sure there's only one route at a time
// exact prop only opens that route if it's an exact match

export default App;
