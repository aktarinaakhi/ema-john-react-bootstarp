import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route exact path="/shop">
            <Shop></Shop>
          </Route>

          <Route exact path="/orderReview">
            <OrderReview></OrderReview>
          </Route>

          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>

          <Route exact path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
