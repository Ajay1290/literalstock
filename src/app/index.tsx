import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { BookPage } from './pages/BookPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { SearchPage } from './pages/SearchPage';
import { TagPage } from './pages/TagPage';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/book/:id" component={BookPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/tag/:tag" component={TagPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
