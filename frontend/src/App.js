import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import MissingPage from './pages/MissingPage';
import Search from './pages/Search';
import Layout from './components/Layout';

import Modal from './components/organisms/Modal';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Modal />
        <Switch>
          <Route path="/order/:id/:pay?" component={Order} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/payment" component={Payment} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:cat/:pageNumber?" component={Category} />
          <Route path="/product/:id" component={Product} />
          <Route
            path="/search/:keyword/page/:pageNumber"
            exact
            component={Search}
          />
          <Route path="/search/:keyword" exact component={Search} />
          <Route path="/" exact component={Home} />
          <Route path="/404" exact component={MissingPage} />
          <Route path="*" component={MissingPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
