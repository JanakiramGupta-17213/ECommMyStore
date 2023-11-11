import "./style.css";
import Navbar  from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";

export default function App() {
  return (
    <Router>
      <div className="pageWrapper">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
