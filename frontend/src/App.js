import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import AdminSignup from './Components/AdminSignup'
import AdminDashboard from './AdminComponents/AdminDashboard';
import Cart from './CartComponents/Cart';
import CartHome from './CartComponents/Home';
function App() {
  return (
    <div className='app-bg'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/admin_signup" element={<AdminSignup />}></Route>
          <Route exact path="/admin_dashboard" element={<AdminDashboard />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/home" element={<CartHome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
