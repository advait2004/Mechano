import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../assets/mechano-logo.png';

export default function SignIn() {
    const [role, setRole] = useState('customer');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to login: ' + err.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-dark dark:text-white font-manrope transition-colors duration-300">

            {/* Header */}
            <header className="w-full py-6 px-4 md:px-8 flex justify-between items-center relative z-10">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center mb-8 group">
                        <img src={Logo} alt="Mechano" className="h-[104px] w-auto group-hover:scale-110 transition-transform" />
                        <span className="text-2xl font-bold font-manrope text-text-dark dark:text-white -ml-6">Mechano</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm">
                    <span className="text-text-dark/60 dark:text-white/60">Need help?</span>
                    <a href="#" className="font-bold text-primary hover:underline">Support Center</a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 py-12 relative">
                {/* Auth Card */}
                <div className="w-full max-w-[440px] bg-white dark:bg-[#2d241c] rounded-2xl border border-border dark:border-[#3d3228] shadow-sm dark:shadow-none animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Card Header */}
                    <div className="pt-8 pb-6 px-8 text-center">
                        <h1 className="text-2xl font-bold mb-2">Sign In</h1>
                        <p className="text-sm text-[#8a7560]">Select your role to access your dashboard.</p>
                    </div>

                    {/* Role Tabs */}
                    <div className="flex border-b border-border dark:border-[#3d3228]">
                        {['customer', 'vendor', 'admin'].map((r) => (
                            <button
                                key={r}
                                onClick={() => setRole(r)}
                                className={`flex-1 pb-3 text-sm font-medium capitalize transition-all duration-300 border-b-2
                  ${role === r
                                        ? 'border-primary text-primary font-bold'
                                        : 'border-transparent text-[#8a7560] hover:text-text-dark dark:hover:text-white'
                                    }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="p-8">
                        {error && <div className="mb-4 text-sm text-red-500 bg-red-100 p-2 rounded">{error}</div>}
                        <form onSubmit={handleLogin} className="space-y-5">

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-text-dark dark:text-white">Email Address</label>
                                <div className="relative group">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7560] material-symbols-outlined text-[20px] transition-colors group-focus-within:text-primary">mail</span>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-[#3d3228] bg-transparent dark:bg-[#3d3228] text-text-dark dark:text-white placeholder-[#8a7560]/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                                        placeholder="name@company.com"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-text-dark dark:text-white">Password</label>
                                    <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
                                </div>
                                <div className="relative group">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7560] material-symbols-outlined text-[20px] transition-colors group-focus-within:text-primary">lock</span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-border dark:border-[#3d3228] bg-transparent dark:bg-[#3d3228] text-text-dark dark:text-white placeholder-[#8a7560]/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a7560] hover:text-text-dark dark:hover:text-white transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="rounded border-border dark:border-[#3d3228] text-primary focus:ring-primary/20 bg-transparent"
                                />
                                <label htmlFor="remember" className="text-sm text-[#8a7560] cursor-pointer select-none">Remember me</label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                {loading ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        Sign In
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Footer Links */}
                        <div className="mt-8 pt-6 border-t border-border dark:border-[#3d3228] text-center space-y-3">
                            <p className="text-sm text-[#8a7560]">
                                Don’t have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
                            </p>
                            <p className="text-sm text-[#8a7560]">
                                Need a vendor account? <a href="#" className="underline hover:text-primary transition-colors">Contact Sales</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Copyright Footer */}
            <footer className="py-6 text-center text-xs text-[#8a7560]">
                &copy; {new Date().getFullYear()} Mechano Industrial Solutions Inc. All rights reserved.
            </footer>
        </div>
    );
}
