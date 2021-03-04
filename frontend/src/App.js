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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Container>
          <main className="py-3">
            <Switch>
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
