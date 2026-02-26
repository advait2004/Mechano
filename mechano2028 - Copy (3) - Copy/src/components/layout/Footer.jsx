import Logo from '../../assets/mechano-logo.png';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#150f0a] border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <img src={Logo} alt="Mechano" className="h-[84px] w-auto" />
                            <span className="text-xl font-bold font-manrope text-text-dark dark:text-white -ml-5">Mechano</span>
                        </div>
                        <p className="text-text-dark/60 dark:text-white/60 leading-relaxed">
                            The #1 marketplace for heavy machinery rental. Connecting owners and contractors worldwide.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-dark dark:text-white hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                                    {/* Mock icons for now using simple letters or would use SVG in prod */}
                                    <span className="capitalize text-xs">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-text-dark dark:text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Browse Equipment', 'Skilled Workers', 'Hire Technicians', 'Become a Worker', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-text-dark/60 dark:text-white/60 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div id="help-support">
                        <h4 className="text-lg font-bold text-text-dark dark:text-white mb-6">Support</h4>
                        <ul className="space-y-4">
                            {['Help Center', 'Safety Information', 'Cancellation Policy', 'Report Issue', 'Terms of Service'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-text-dark/60 dark:text-white/60 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-text-dark dark:text-white mb-6">Newsletter</h4>
                        <p className="text-text-dark/60 dark:text-white/60 mb-6">
                            Subscribe to get the latest equipment updates and offers.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-white/5 border border-border dark:border-white/10 text-text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                            <button className="w-full py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-dark/40 dark:text-white/40">
                        &copy; 2026 Mechano Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-sm text-text-dark/40 dark:text-white/40 hover:text-primary">Privacy Policy</a>
                        <a href="#" className="text-sm text-text-dark/40 dark:text-white/40 hover:text-primary">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
