import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Unconnected/Normal_Home/Home.Unconnected';
import AdminUnconnectedHome from '../Unconnected/Admin_Unconnected_Home/Admin.Unconnected.Home';
import Login from '../Unconnected/Login/Login';
import Register from '../Unconnected/Register/Register';

function UnconnectedRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminUnconnectedHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default UnconnectedRouter;