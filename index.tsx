import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import './style.css';

import Welcome from './src/pages/Welcome';
import Products from './src/pages/Products';
import MainHeader from './src/components/MainHeader';
import ProductDetail from './src/pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
