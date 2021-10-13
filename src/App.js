import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div className="App">

      <AuthProvider>
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

            <PrivateRoute exact path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>

            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>

            <PrivateRoute exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
