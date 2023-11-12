import "./styles.scss";
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Cart from './components/cart/cart';

export default function App() {
  return (
    <Router>
      <div className="pageWrapper">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
