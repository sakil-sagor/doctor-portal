import logo from './logo.svg';
import './App.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appoinment from './Pages/Appoinment/Appoinment';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}
export default App;
