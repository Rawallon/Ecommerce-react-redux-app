import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Container>
          <main className="py-3">
            <Switch>
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
