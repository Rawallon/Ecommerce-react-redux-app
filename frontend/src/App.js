import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
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
import ListUsers from './pages/admin/ListUsers';
import ListProducts from './pages/admin/ListProducts';
import ListOrders from './pages/admin/ListOrders';
import EditUser from './pages/admin/EditUser';
import EditProducts from './pages/admin/EditProducts';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Container>
          <main className="py-3">
            <Switch>
              <Route path="/admin/orders" component={ListOrders} />
              <Route path="/admin/products/create" component={EditProducts} />
              <Route path="/admin/products/:id" component={EditProducts} />
              <Route path="/admin/products" component={ListProducts} />
              <Route path="/admin/users/:id" component={EditUser} />
              <Route path="/admin/users/" component={ListUsers} />
              <Route path="/order/:id/:pay?" component={Order} />
              <Route path="/placeorder" component={PlaceOrder} />
              <Route path="/payment" component={Payment} />
              <Route path="/shipping" component={Shipping} />
              <Route path="/profile" component={Profile} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/cart" component={Cart} />
              <Route path="/category/:cat" component={Category} />
              <Route path="/product/:id" component={Product} />
              <Route path="/" exact component={Home} />
              <Route path="*" component={Footer} />
            </Switch>
          </main>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
