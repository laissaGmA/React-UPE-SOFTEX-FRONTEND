import React from "react";
import Header from "./components/Header"
import GlobalStyle from "./styles/global"
import {
   BrowserRouter,
    Routes, 
    Route, 
    Link, 
    Navigate,
} from 'react-router-dom'

import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

const App = () => {
  return (
  <>
   <Header />
   <GlobalStyle />
   <BrowserRouter>

        <Link to="/">Home</Link>                             <Link to="/users">Users</Link>

        <Routes>
          <Route path="/" exact element={<Page1/>} />
          <Route path="/users" element={<Page2/>} />
        </Routes>
      </BrowserRouter>
   </>
  );
};

export default App;
