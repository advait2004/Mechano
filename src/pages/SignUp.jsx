import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../assets/mechano-logo.png';

export default function SignUp() {
    const [role, setRole] = useState('customer');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await signup(formData.email, formData.password, formData.name, role);
            setSuccess(true);
            setTimeout(() => {
                navigate('/signin');
            }, 2000);
        } catch (err) {
            setError('Failed to create an account: ' + err.message);
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type === 'email' ? 'email' : (e.target.placeholder.includes('password') ? 'password' : 'name')]: e.target.value });
    };

    // Need to update input onChange handlers below to use handleChange and set values

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-dark dark:text-white font-manrope transition-colors duration-300">

            {/* Success Popup */}
            {success && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white dark:bg-[#2d241c] p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-primary/20 animate-in zoom-in-95 duration-300 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-400"></div>
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-symbols-outlined text-3xl">check_circle</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Account Created!</h3>
                        <p className="text-text-dark/60 dark:text-white/60 text-sm mb-6">
                            Your account has been successfully registered. Redirecting you to sign in...
                        </p>
                        <div className="w-full bg-background-light dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
                            <div className="h-full bg-primary animate-[progressBar_2s_ease-in-out_forwards]" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <header className="w-full py-6 px-4 md:px-8 flex justify-between items-center relative z-10">
                <Link to="/" className="inline-flex items-center group">
                    <img src={Logo} alt="Mechano" className="h-[84px] w-auto group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-bold font-manrope text-text-dark dark:text-white -ml-5">Mechano</span>
                </Link>
                <div className="hidden md:flex items-center gap-2 text-sm">
                    <span className="text-text-dark/60 dark:text-white/60">Already have an account?</span>
                    <Link to="/signin" className="font-bold text-primary hover:underline">Sign In</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 py-12 relative">
                {/* Auth Card */}
                <div className="w-full max-w-[440px] bg-white dark:bg-[#2d241c] rounded-2xl border border-border dark:border-[#3d3228] shadow-sm dark:shadow-none animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Card Header */}
                    <div className="pt-8 pb-6 px-8 text-center">
                        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
                        <p className="text-sm text-[#8a7560]">Join Mechano to start renting or listing equipment.</p>
                    </div>

                    {/* Role Tabs - NO ADMIN ROLE */}
                    <div className="flex border-b border-border dark:border-[#3d3228]">
                        {['customer', 'vendor'].map((r) => (
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
                        <form onSubmit={handleSignUp} className="space-y-4">

                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-text-dark dark:text-white">Full Name</label>
                                <div className="relative group">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7560] material-symbols-outlined text-[20px] transition-colors group-focus-within:text-primary">person</span>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-[#3d3228] bg-transparent dark:bg-[#3d3228] text-text-dark dark:text-white placeholder-[#8a7560]/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-text-dark dark:text-white">Email Address</label>
                                <div className="relative group">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7560] material-symbols-outlined text-[20px] transition-colors group-focus-within:text-primary">mail</span>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-[#3d3228] bg-transparent dark:bg-[#3d3228] text-text-dark dark:text-white placeholder-[#8a7560]/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                                        placeholder="name@company.com"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-text-dark dark:text-white">Password</label>
                                <div className="relative group">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7560] material-symbols-outlined text-[20px] transition-colors group-focus-within:text-primary">lock</span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-border dark:border-[#3d3228] bg-transparent dark:bg-[#3d3228] text-text-dark dark:text-white placeholder-[#8a7560]/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                                        placeholder="Create a password"
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group mt-4"
                            >
                                {loading ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        Create Account
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-xs text-[#8a7560] max-w-xs mx-auto">
                                By creating an account, you agree to our <a href="#" className="underline hover:text-primary">Terms of Service</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
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
