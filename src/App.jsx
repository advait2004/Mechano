import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import SearchPage from './pages/SearchPage';
import BookingsPage from './pages/BookingsPage';
import CartPage from './pages/CartPage';
import DashboardLayout from './components/layout/DashboardLayout';
import { AuthProvider } from './context/AuthContext';
import { MarketplaceProvider } from './context/MarketplaceContext'; // Assuming this import path

function App() {
  return (
    <AuthProvider>
      <MarketplaceProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignUp />} />
            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/dashboard/search" element={<DashboardLayout><SearchPage /></DashboardLayout>} />
            <Route path="/dashboard/bookings" element={<DashboardLayout><BookingsPage /></DashboardLayout>} />
            <Route path="/dashboard/cart" element={<DashboardLayout><CartPage /></DashboardLayout>} />
            <Route path="/dashboard/*" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          </Routes>
        </Router>
      </MarketplaceProvider>
    </AuthProvider>
  )
}

export default App
