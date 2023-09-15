import React, { useState } from "react";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from "../src/pages/Login";
import Signup from "../src/pages/Register";

function App() {
  const [currentPage, setCurrentPage] = useState("Login");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;