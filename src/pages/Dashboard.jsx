import { useAuth } from '../context/AuthContext';
import { useMarketplace } from '../context/MarketplaceContext';

import { useState } from 'react';

export default function Dashboard() {
    const { currentUser } = useAuth();
    const {
        searchResults,
        activeMachinery,
        activeJobs,
        pendingRequests,
        addToCart
    } = useMarketplace();
    const { machinery: machineryListings, workers: workerListings } = searchResults;
    const [activeCategory, setActiveCategory] = useState('machinery'); // 'machinery' or 'workers'

    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="space-y-8 max-w-[1400px] mx-auto pb-10">

            {/* Welcome Section */}
            <div className="flex justify-between items-end animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div>
                    <h1 className="text-3xl font-extrabold text-[#181411] mb-1">Welcome back, {currentUser?.displayName?.split(' ')[0] || 'Guest'}</h1>
                    <div className="flex items-center gap-2 text-[#5c5044] text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        {currentDate}
                    </div>
                </div>
            </div>

            {/* Summary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Metrics removed as per request */}
            </div>

            {/* Marketplace Section */}
            <section className="space-y-6">

                {/* Header & Toggle */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-[#181411]">Marketplace</h2>

                    {/* Category Toggle */}
                    <div className="bg-background-light p-1 rounded-xl flex items-center border border-primary/10 w-full md:w-auto">
                        <button
                            onClick={() => setActiveCategory('machinery')}
                            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${activeCategory === 'machinery'
                                ? 'bg-primary text-white shadow-md'
                                : 'text-[#5c5044] hover:bg-white/50'
                                }`}
                        >
                            <span className="material-symbols-outlined text-[20px]">construction</span>
                            Heavy Machinery
                        </button>
                        <button
                            onClick={() => setActiveCategory('workers')}
                            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${activeCategory === 'workers'
                                ? 'bg-primary text-white shadow-md'
                                : 'text-[#5c5044] hover:bg-white/50'
                                }`}
                        >
                            <span className="material-symbols-outlined text-[20px]">engineering</span>
                            Skilled Workers
                        </button>
                    </div>
                </div>

                {/* Filter Bar (Dynamic) */}
                <div className="bg-white rounded-xl border border-primary/10 p-4 shadow-sm flex flex-wrap gap-4 items-center justify-between animate-in fade-in slide-in-from-top-1 duration-300">
                    <div className="flex flex-wrap gap-3">
                        {activeCategory === 'machinery' ? (
                            ['Equipment Type', 'Price Range', 'Availability', 'Distance'].map((filter) => (
                                <button key={filter} className="px-4 py-2 rounded-lg border border-primary/10 text-sm font-bold text-[#5c5044] bg-background-light hover:bg-white hover:text-primary transition-all flex items-center gap-2">
                                    {filter}
                                    <span className="material-symbols-outlined text-[16px] opacity-60">expand_more</span>
                                </button>
                            ))
                        ) : (
                            ['Skill Type', 'Experience Level', 'Certification', 'Distance'].map((filter) => (
                                <button key={filter} className="px-4 py-2 rounded-lg border border-primary/10 text-sm font-bold text-[#5c5044] bg-background-light hover:bg-white hover:text-primary transition-all flex items-center gap-2">
                                    {filter}
                                    <span className="material-symbols-outlined text-[16px] opacity-60">expand_more</span>
                                </button>
                            ))
                        )}
                    </div>
                    <button className="px-6 py-2 bg-primary/10 text-primary font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all">
                        Apply Filters
                    </button>
                </div>

                {/* Listings Grid (Dynamic) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-500 key={activeCategory}">
                    {activeCategory === 'machinery' ? (
                        machineryListings.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
                                <div className="aspect-[4/3] bg-gray-100 relative">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#8a7560] hover:text-red-500 shadow-sm transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                                    </button>
                                    {item.badge && (
                                        <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded shadow-sm ${item.badge === 'FAST DELIVERY' ? 'bg-primary text-white' : 'bg-blue-600 text-white'}`}>
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-sm font-bold text-[#181411] line-clamp-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-700 text-[10px] font-bold">
                                            <span className="material-symbols-outlined text-[12px] fill-current">star</span>
                                            {item.rating}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-[#8a7560] mb-4">
                                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                                        {item.location} <span className="text-primary/40">•</span> {item.distance}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto gap-2">
                                        <div>
                                            <span className="text-lg font-extrabold text-[#181411]">₹{item.price}</span>
                                            <span className="text-xs text-[#8a7560] font-medium">{item.unit}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="px-3 py-2 bg-background-light text-[#181411] border border-primary/10 rounded-lg hover:bg-white hover:text-primary transition-colors shadow-sm"
                                                title="Add to Cart"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                                            </button>
                                            <button className="px-4 py-2 bg-[#181411] text-white text-xs font-bold rounded-lg hover:bg-primary transition-colors shadow-sm">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        workerListings.map((worker) => (
                            <div key={worker.id} className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all group">
                                <div className="p-5 flex flex-col items-center border-b border-primary/5 bg-background-light/30">
                                    <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20 mb-3 relative">
                                        <img src={worker.image} alt={worker.name} className="w-full h-full rounded-full object-cover" />
                                        {worker.badge && (
                                            <span className="absolute bottom-0 right-0 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-white">
                                                {worker.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-base font-bold text-[#181411] text-center mb-0.5">{worker.name}</h3>
                                    <p className="text-xs font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full mb-1">{worker.role}</p>
                                    <div className="flex items-center gap-1 text-xs text-[#5c5044]">
                                        <span className="font-bold">{worker.experience}</span> Exp
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-4 text-xs text-[#8a7560]">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">location_on</span>
                                            {worker.location}
                                        </div>
                                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-700 font-bold">
                                            <span className="material-symbols-outlined text-[12px] fill-current">star</span>
                                            {worker.rating}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto gap-2">
                                        <div>
                                            <span className="text-lg font-extrabold text-[#181411]">₹{worker.price}</span>
                                            <span className="text-xs text-[#8a7560] font-medium">{worker.unit}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => addToCart(worker)}
                                                className="px-3 py-2 bg-background-light text-[#181411] border border-primary/10 rounded-lg hover:bg-white hover:text-primary transition-colors shadow-sm"
                                                title="Add to Cart"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                                            </button>
                                            <button className="px-4 py-2 bg-[#181411] text-white text-xs font-bold rounded-lg hover:bg-primary transition-colors shadow-sm">
                                                Hire Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* Dashboard Footer */}
            <footer className="pt-10 mt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#8a7560]">
                <p>© 2023 Mechano Industrial Rentals Pvt. Ltd. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary transition-colors">About Us</a>
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-primary transition-colors">Contact Support</a>
                </div>
            </footer>
        </div>
    );
}
