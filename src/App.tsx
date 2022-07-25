import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Ethereum from './components/ethereum';
import Header from './components/examples/Header';
import Navigation from './components/examples/Navigation';
import Example from './pages/Example';
import LogIn from './pages/Example/LogIn';
import Home from './pages/home';
let showEthereum = false;


function App() {
  return (
    <BrowserRouter>
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
          <Route index element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
