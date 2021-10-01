// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router } from 'react-router';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orderReview">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
