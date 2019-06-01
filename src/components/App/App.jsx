import React from 'react';
import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './../Header/Header';
import styled from 'styled-components'


const News = React.lazy(() => import('./../News/News.jsx'));
const Login = React.lazy(() => import('../Login/Login.jsx'));
const Profile = React.lazy(() => import('../Profile/Profile.jsx'));

const MainWrapper = styled.main`
  width: 80%;
  height: 100%;
  background-color: #F7F7F7;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <BrowserRouter>
        <Header />
        <MainWrapper>
            <Suspense fallback={<div></div>}>
              <Switch>
                <Route exact path="/" component={News} />
                <Route path="/login" component={Login} />
                <Route path="/news" component={News} />
                <Route path="/profile/:id" component={Profile} />
              </Switch>
            </Suspense>
        </MainWrapper>
    </BrowserRouter>
  );
}

export default App;
