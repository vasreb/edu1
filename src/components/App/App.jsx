import React from 'react';
import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import Header from './../Header/Header';

const News = React.lazy(() => import('./../News/News.jsx'));
const Login = React.lazy(() => import('../Login/Login.jsx'));
const Profile = React.lazy(() => import('../Profile/Profile.jsx'));


function App() {
  return (
    <BrowserRouter>
        <header>
          <Header />
        </header>
        <main className="main-wrapper">
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/" component={News} />
              <Route path="/login" component={Login} />
              <Route path="/news" component={News} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </Suspense>
        </main>
    </BrowserRouter>
  );
}

export default App;
