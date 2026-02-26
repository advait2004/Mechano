import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/mechano-logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={Logo} alt="Mechano" className="h-[84px] w-auto" />
                        <span className="text-xl font-bold font-manrope text-text-dark dark:text-white -ml-5">Mechano</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#featured-services" className="text-sm font-medium text-text-dark dark:text-white/80 hover:text-primary transition-colors relative group">
                            Featured Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#how-it-works" className="text-sm font-medium text-text-dark dark:text-white/80 hover:text-primary transition-colors relative group">
                            How it Works
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#help-support" className="text-sm font-medium text-text-dark dark:text-white/80 hover:text-primary transition-colors relative group">
                            Help & Support
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/dashboard" className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center">
                            Dashboard
                        </Link>
                        <Link to="/signin" className="px-5 py-2 rounded-lg border border-border text-sm font-medium text-text-dark dark:text-white hover:bg-white/5 transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
                            Login
                        </Link>
                        <Link to="/signup" className="px-5 py-2 rounded-lg bg-background-dark text-white text-sm font-bold shadow-md hover:bg-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text-dark dark:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 p-4 glass mt-2 mx-4 rounded-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
                        <a href="#featured-services" className="text-text-dark dark:text-white font-medium hover:text-primary">Featured Services</a>
                        <a href="#how-it-works" className="text-text-dark dark:text-white font-medium hover:text-primary">How it Works</a>
                        <a href="#help-support" className="text-text-dark dark:text-white font-medium hover:text-primary">Help & Support</a>
                        <hr className="border-border/20" />
                        <button className="w-full py-2 rounded-lg border border-border text-text-dark dark:text-white">Login</button>
                        <button className="w-full py-2 rounded-lg bg-primary text-white font-bold">Dashboard</button>
                    </div>
                )}
            </div>
        </nav>
    );
}
