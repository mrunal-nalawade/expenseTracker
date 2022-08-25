import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewsLister from "./pages/NewsLister";

function App() {

  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
              <HomePage />
          }
        />
         <Route
          path="/newslist/:search"
          exact
          element={
              <NewsLister />
          }
        />
        
      </Routes> 
    </div>
  );
}

export default App;
