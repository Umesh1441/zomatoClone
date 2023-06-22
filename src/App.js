import React from 'react';
import Home from './Home';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Login from './Login';
import Logout from './Logout';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <>
      <Provider  store={store}>
      <Nav></Nav>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/products' Component={Products}></Route>
        <Route exact path='/login' Component={Login}></Route>
        <Route exact path='/logout' Component={Logout}></Route>
      </Routes>
      </Provider>
    </>
  );
}

export default App;
