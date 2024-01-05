import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Admin/Home/Home';

function AdminRouter () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AdminRouter