import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Admin/Home/Home';
import AdminUser from '../Pages/Admin/Users/AdminUser';

function AdminRouter () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<AdminUser />} />
            </Routes>
        </Router>
    )
}

export default AdminRouter