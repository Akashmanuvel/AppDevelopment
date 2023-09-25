import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './assests/pages/Login';
import Signup from './assests/pages/Signup';
import Landing from './assests/pages/Landing';
import Lenders from './assests/pages/Lenders';
import Dashboard from './assests/pages/Dashboard';
import Borrowers from './assests/pages/Borrowers';
import Terms from './assests/pages/Terms';
import Privacy from './assests/pages/Privacy';
import Help from './assests/pages/Help';
import Faq from './assests/pages/Faq';
import AboutUs from './assests/pages/About';
import TransactionHistory from './assests/pages/TransactionHistory';
export default function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landing/>}/>
          <Route path="/lenders" element={<Lenders/>}/>
          <Route path="/dash" element={<Dashboard/>}/>
          <Route path="/borrower" element={<Borrowers/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path='/transaction' element={<TransactionHistory/>}></Route>
          <Route path="/Faq" element={<Faq/>}/>
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
      </div>
    </Router>
  );
}
