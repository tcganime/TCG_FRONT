import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Unconnected/Normal_Home/Home.Unconnected';
import AdminUnconnectedHome from '../Pages/Unconnected/Admin_Unconnected_Home/Admin.Unconnected.Home';
import Login from '../Pages/Unconnected/Login/Login';
import Register from '../Pages/Unconnected/Register/Register';

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