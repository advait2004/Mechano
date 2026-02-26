import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background-light dark:bg-background-dark">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background-light dark:from-background-dark to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-10"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                Heavy Machinery & <span className="text-[#f27f0d]">Skilled Workforce</span> — Unified.
                            </h1>
                            <p className="text-xl text-[#5c5044] mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-800 delay-100">
                                Rent heavy machinery, hire certified operators, and book verified mechanics, plumbers, electricians, and technical crews — all in one industrial ecosystem.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-900 delay-200">
                                <Link to="/dashboard" className="px-8 py-4 bg-[#f27f0d] text-white font-bold rounded-lg text-lg hover:bg-[#d9720b] transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20 text-center flex items-center justify-center">
                                    Explore Marketplace
                                </Link>
                                <button className="px-8 py-4 bg-white text-[#181411] border border-[#e6e0db] font-bold rounded-lg text-lg hover:border-[#f27f0d] hover:text-[#f27f0d] transition-all shadow-sm transform hover:scale-105">
                                    List Your Services
                                </button>
                            </div>

                            <div className="mt-12 flex items-center gap-6 text-sm font-bold text-[#5c5044] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#f27f0d]"></span>
                                    Heavy Machinery
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#f27f0d]"></span>
                                    Certified Operators
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#f27f0d]"></span>
                                    Skilled Workers
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visuals (Floating Cards) */}
                    <div className="relative h-[500px] w-full hidden lg:block">
                        {/* Card 1 */}
                        <div className="absolute top-10 left-10 p-6 rounded-2xl glass w-64 animate-[bounce_6s_infinite] hover:[animation-play-state:paused] hover:scale-105 transition-all duration-500 cursor-pointer">
                            <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary mb-4">
                                <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#181411] mb-1">Heavy Machinery</h3>
                            <p className="text-sm text-[#5c5044]">Excavators, Cranes, & more</p>
                        </div>

                        {/* Card 2 */}
                        <div className="absolute top-40 right-0 p-6 rounded-2xl glass w-64 animate-[bounce_7s_infinite_1s] hover:[animation-play-state:paused] hover:scale-105 transition-all duration-500 cursor-pointer bg-[#181411] border-border/10">
                            <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-4">
                                <span className="material-symbols-outlined text-2xl">engineering</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Certified Operators</h3>
                            <p className="text-sm text-white/60">Verified Professionals</p>
                        </div>

                        {/* Card 3 */}
                        <div className="absolute bottom-20 left-20 p-6 rounded-2xl glass w-64 animate-[bounce_8s_infinite_0.5s] hover:[animation-play-state:paused] hover:scale-105 transition-all duration-500 cursor-pointer">
                            <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-4">
                                <span className="material-symbols-outlined text-2xl">handyman</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#181411] mb-1">Skilled Workers</h3>
                            <p className="text-sm text-[#5c5044]">Mechanics, Electricians, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
