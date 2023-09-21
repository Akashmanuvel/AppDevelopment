import React, { useState } from "react";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from "../src/pages/Login";
import Signup from "../src/pages/Register";
import Lender from "../src/pages/Lender";
import Dashboard from "../src/pages/Dashboard";
import AboutUs from "./pages/About";
import TransactionHistory from "./pages/TransactionHistory";
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
          <Route path='/lender' element={<Lender/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/transaction' element={<TransactionHistory/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;