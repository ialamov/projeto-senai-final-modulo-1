import './App.css';
import Company from './pages/Company';
import Map from './pages/Map'
import Product from './pages/Product'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/map" component={ Map } />
        <Route exact path="/company" component={ Company } />
        <Route exact path="/" component={ Home } />
        <Route exact path="/product" component={ Product } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;