import { useLocation, Link } from 'react-router-dom';
import { useMarketplace } from '../context/MarketplaceContext';
import { useState, useEffect } from 'react';

export default function SearchPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    const { machinery, workers } = useMarketplace();

    const [filteredMachinery, setFilteredMachinery] = useState([]);
    const [filteredWorkers, setFilteredWorkers] = useState([]);
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'machinery', 'workers'

    useEffect(() => {
        if (!query) {
            setFilteredMachinery(machinery);
            setFilteredWorkers(workers);
            return;
        }

        const lowerQuery = query.toLowerCase();

        const fMachinery = machinery.filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.location.toLowerCase().includes(lowerQuery)
        );

        const fWorkers = workers.filter(worker =>
            worker.name.toLowerCase().includes(lowerQuery) ||
            worker.role.toLowerCase().includes(lowerQuery) ||
            worker.location.toLowerCase().includes(lowerQuery)
        );

        setFilteredMachinery(fMachinery);
        setFilteredWorkers(fWorkers);
    }, [query, machinery, workers]);

    return (
        <div className="space-y-8 max-w-[1400px] mx-auto pb-10">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#181411]">
                    Search Results for "{query}"
                </h1>

                {/* Filter Tabs */}
                <div className="flex bg-background-light p-1 rounded-lg border border-primary/10">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'all' ? 'bg-white shadow text-primary' : 'text-[#5c5044] hover:text-[#181411]'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveTab('machinery')}
                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'machinery' ? 'bg-white shadow text-primary' : 'text-[#5c5044] hover:text-[#181411]'}`}
                    >
                        Machinery ({filteredMachinery.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('workers')}
                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'workers' ? 'bg-white shadow text-primary' : 'text-[#5c5044] hover:text-[#181411]'}`}
                    >
                        Workers ({filteredWorkers.length})
                    </button>
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(activeTab === 'all' || activeTab === 'machinery') && filteredMachinery.map((item) => (
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

                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-lg font-extrabold text-[#181411]">₹{item.price}</span>
                                    <span className="text-xs text-[#8a7560] font-medium">{item.unit}</span>
                                </div>
                                <button className="px-4 py-2 bg-[#181411] text-white text-xs font-bold rounded-lg hover:bg-primary transition-colors shadow-sm">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {(activeTab === 'all' || activeTab === 'workers') && filteredWorkers.map((worker) => (
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

                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <span className="text-lg font-extrabold text-[#181411]">₹{worker.price}</span>
                                    <span className="text-xs text-[#8a7560] font-medium">{worker.unit}</span>
                                </div>
                                <button className="px-4 py-2 bg-[#181411] text-white text-xs font-bold rounded-lg hover:bg-primary transition-colors shadow-sm">
                                    Hire Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredMachinery.length === 0 && filteredWorkers.length === 0 && (
                <div className="text-center py-20">
                    <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
                    <h3 className="text-xl font-bold text-[#181411]">No results found</h3>
                    <p className="text-[#8a7560]">Try adjusting your search or filters to find what you're looking for.</p>
                </div>
            )}
        </div>
    );
}
