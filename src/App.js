import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AdminScreen from "./screens/AdminScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomeScreen />} />

          <Route path="/sanpham/:category" render={() => <ProductScreen />} />

          <Route path="/admin" render={() => <AdminScreen />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
