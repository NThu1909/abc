import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/sanpham/:category">
            <ProductScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
