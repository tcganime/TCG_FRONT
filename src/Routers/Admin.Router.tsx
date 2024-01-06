import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages

import Home from '../Pages/Admin/Home/Home';
import AdminUser from '../Pages/Admin/Users/AdminUser';
import UserPage from '../Pages/Admin/UserPage/UserPage';

function AdminRouter () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<AdminUser />} />
                <Route path="/users/:id" element={<UserPage />} />
            </Routes>
        </Router>
    )
}

export default AdminRouter