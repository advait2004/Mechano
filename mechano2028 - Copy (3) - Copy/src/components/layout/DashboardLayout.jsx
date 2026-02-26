import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useMarketplace } from '../../context/MarketplaceContext';
import Logo from '../../assets/mechano-logo.png';

export default function DashboardLayout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    const { userLocation, setUserLocation } = useMarketplace();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/signin');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const menuItems = [
        { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
        { icon: 'calendar_month', label: 'My Bookings', path: '/dashboard/bookings' }, // Updated icon & label
        { icon: 'shopping_cart', label: 'My Cart', path: '/dashboard/cart' }, // New Item
        { icon: 'bookmark', label: 'Saved', path: '/dashboard/saved' },
        { icon: 'payments', label: 'Payments', path: '/dashboard/payments' },
    ];

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/dashboard/search?q=${e.target.value}`);
        }
    };

    return (
        <div className="min-h-screen bg-background-light font-manrope flex">

            {/* Sidebar - Fixed Left */}
            <aside className="w-[250px] bg-white border-r border-primary/10 fixed inset-y-0 left-0 z-50 flex flex-col">

                {/* Sidebar Header */}
                <div className="h-28 flex items-center px-4 border-b border-primary/10 animate-in fade-in slide-in-from-top-4 duration-500">
                    <Link to="/" className="flex items-center group">
                        <img src={Logo} alt="Mechano" className="h-[72px] w-auto group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold font-manrope text-[#181411] -ml-4">Mechano</span>
                    </Link>
                </div>
                {/* Navigation */}
                <nav className="flex-1 py-6 px-3 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-200 group ${isActive
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-[#5c5044] hover:bg-background-light'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : 'text-[#8a7560] group-hover:text-primary transition-colors'}`}>
                                    {item.icon}
                                </span>
                                {item.label}
                            </Link>
                        );
                    })}

                    <div className="pt-4 mt-2 border-t border-primary/5">
                        <p className="px-4 text-[10px] font-bold text-[#8a7560] uppercase tracking-wider mb-2">Support</p>
                        <Link to="/dashboard/support" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-[#5c5044] hover:bg-background-light transition-all">
                            <span className="material-symbols-outlined text-[20px] text-[#8a7560]">help</span>
                            Help & Support
                        </Link>
                    </div>
                </nav>

                {/* Bottom CTA */}

            </aside>

            {/* Main Content Info */}
            <div className="flex-1 ml-[250px] flex flex-col min-w-0">

                {/* Top Header */}
                <header className="h-16 bg-white border-b border-primary/10 flex items-center justify-between px-8 sticky top-0 z-40">

                    {/* Search Bar */}
                    <div className="w-[400px] relative group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a7560] material-symbols-outlined group-focus-within:text-primary transition-colors">search</span>
                        <input
                            type="text"
                            placeholder="Search machines, operators, mechanics, plumbers..."
                            onKeyDown={handleSearch}
                            className="w-full h-10 pl-12 pr-4 rounded-lg bg-background-light border-transparent focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary text-sm text-[#181411] placeholder-[#8a7560] transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Location Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLocationOpen(!isLocationOpen)}
                                className="flex items-center gap-2 text-sm font-bold text-[#181411] hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-background-light"
                            >
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                {userLocation}
                                <span className="material-symbols-outlined text-[#8a7560] text-[18px]">expand_more</span>
                            </button>

                            {/* Dropdown Menu */}
                            {isLocationOpen && (
                                <div className="absolute top-full right-0 mt-2 w-56 bg-white max-h-[400px] overflow-y-auto rounded-xl shadow-xl border border-primary/10 py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="sticky top-0 bg-white border-b border-primary/5 pb-1 mb-1">
                                        <button
                                            onClick={() => {
                                                setUserLocation('All Kerala');
                                                setIsLocationOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-sm font-bold hover:bg-primary/5 hover:text-primary transition-colors ${userLocation === 'All Kerala' ? 'text-primary bg-primary/5' : 'text-[#181411]'}`}
                                        >
                                            All Kerala
                                        </button>
                                    </div>
                                    {[
                                        'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam',
                                        'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram',
                                        'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'
                                    ].map((loc) => (
                                        <button
                                            key={loc}
                                            onClick={() => {
                                                setUserLocation(loc);
                                                setIsLocationOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors ${userLocation === loc ? 'text-primary bg-primary/5' : 'text-[#5c5044]'}`}
                                        >
                                            {loc}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="h-6 w-px bg-primary/10"></div>

                        {/* Notification */}
                        <button className="relative p-2 text-[#5c5044] hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-white"></span>
                        </button>

                        {/* User Profile or Login */}
                        {/* User Profile or Login */}
                        {currentUser ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-3 cursor-pointer group focus:outline-none text-left"
                                >
                                    <div className="text-right hidden md:block">
                                        <p className="text-sm font-bold text-[#181411] leading-tight group-hover:text-primary transition-colors">{currentUser.displayName || 'User'}</p>
                                        <p className="text-[10px] font-bold text-[#8a7560] uppercase tracking-wide">Enterprise Admin</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-background-light border border-primary/10 flex items-center justify-center overflow-hidden group-hover:opacity-80 transition-opacity">
                                        {/* Placeholder Avatar */}
                                        <span className="material-symbols-outlined text-[#8a7560] text-2xl">person</span>
                                    </div>
                                </button>

                                {/* Dropdown Menu */}
                                {isProfileOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-primary/10 py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                                        <div className="px-4 py-3 border-b border-primary/5 bg-background-light/50">
                                            <p className="text-sm font-bold text-[#181411]">{currentUser.displayName || 'User'}</p>
                                            <p className="text-xs text-[#8a7560] truncate font-medium">{currentUser.email}</p>
                                        </div>
                                        <div className="py-1">
                                            <Link to="/dashboard/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#5c5044] hover:bg-primary/5 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">person</span>
                                                Your Profile
                                            </Link>
                                            <Link to="/dashboard/settings" className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#5c5044] hover:bg-primary/5 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">settings</span>
                                                Settings
                                            </Link>
                                        </div>
                                        <div className="border-t border-primary/5 pt-1 mb-1">
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-bold flex items-center gap-2"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">logout</span>
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/signin" className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-[#d9720b] transition-colors flex items-center gap-2">
                                <span>Login</span>
                                <span className="material-symbols-outlined text-[18px]">login</span>
                            </Link>
                        )}
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-8 overflow-y-auto bg-background-light relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
