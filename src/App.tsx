import * as React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import AuthProvider, { RequireAuth } from './contexts/AuthProvider';

import Ethereum from './components/ethereum';
import Header from './components/examples/Header';
import Navigation from './components/examples/Navigation';
import Example from './pages/Example';
import LogIn from './pages/Example/LogIn';
import Signup from './pages/Example/Signup';
import Home from './pages/home';
let showEthereum = false;


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/home' element={<Home />}>
            {/* <Route index element={<Example />} />
          <Route path='/feature' element={<Header />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> */}
          </Route>
          <Route path='/' /*element={<Navigation />}*/>
            <Route
              index
              element={
                <RequireAuth>
                  <Navigation />
                </RequireAuth>
              }
            />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

