import { useState } from 'react';
import { useMarketplace } from '../context/MarketplaceContext';

export default function BookingsPage() {
    const { myBookings } = useMarketplace();
    const [activeTab, setActiveTab] = useState('Upcoming');

    const tabs = ['Upcoming', 'Completed', 'Cancelled'];

    const filteredBookings = myBookings.filter(booking => booking.status === activeTab);

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold text-[#181411]">My Bookings</h1>
                    <p className="text-sm text-[#8a7560] font-medium mt-1">Manage your service history and upcoming schedules</p>
                </div>
                <button className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                    Download Report
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-primary/10 pb-1">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2.5 text-sm font-bold rounded-t-lg transition-colors relative ${activeTab === tab
                                ? 'text-[#181411] before:absolute before:bottom-[-5px] before:left-0 before:right-0 before:h-0.5 before:bg-primary'
                                : 'text-[#8a7560] hover:text-primary hover:bg-background-light'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Bookings List */}
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking) => (
                        <div key={booking.id} className="bg-white rounded-xl border border-primary/10 p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center gap-6">
                            {/* Image */}
                            <div className="w-full md:w-32 h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0 relative">
                                <img src={booking.image} alt={booking.name} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1 flex justify-center">
                                    <span className="material-symbols-outlined text-white text-[18px]">
                                        {booking.type === 'machinery' ? 'construction' : 'engineering'}
                                    </span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex-1 w-full">
                                <div className="flex flex-wrap justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border ${booking.status === 'Upcoming' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                                                    booking.status === 'Completed' ? 'bg-green-50 text-green-600 border-green-200' :
                                                        'bg-red-50 text-red-600 border-red-200'
                                                }`}>
                                                {booking.status}
                                            </span>
                                            <span className="text-xs font-bold text-[#8a7560]">ID: {booking.id}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#181411]">{booking.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-extrabold text-[#181411]">₹{booking.price}</p>
                                        <p className="text-xs text-[#8a7560] font-medium lowercase">total amount</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-xs text-[#5c5044] font-medium border-t border-primary/5 pt-3 mt-1">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        {booking.location}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[16px]">event</span>
                                        {booking.date}
                                    </div>
                                    {booking.status === 'Upcoming' && (
                                        <div className="flex items-center gap-1.5 ml-auto text-orange-600">
                                            <span className="material-symbols-outlined text-[16px]">schedule</span>
                                            Scheduled
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="w-full md:w-auto flex md:flex-col gap-2 border-t md:border-t-0 md:border-l border-primary/10 pt-4 md:pt-0 md:pl-6">
                                <button className="flex-1 md:flex-none px-4 py-2 bg-[#181411] text-white text-xs font-bold rounded-lg hover:bg-primary transition-colors whitespace-nowrap">
                                    View Details
                                </button>
                                {booking.status === 'Upcoming' && (
                                    <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-primary/10 text-red-600 text-xs font-bold rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap">
                                        Cancel Booking
                                    </button>
                                )}
                                {booking.status === 'Completed' && (
                                    <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors whitespace-nowrap">
                                        Download Invoice
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-primary/10 border-dashed">
                        <div className="w-16 h-16 bg-background-light rounded-full flex items-center justify-center mx-auto mb-4 text-[#8a7560]">
                            <span className="material-symbols-outlined text-3xl opacity-50">calendar_today</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#181411] mb-1">No bookings found</h3>
                        <p className="text-sm text-[#8a7560]">You don't have any {activeTab.toLowerCase()} bookings yet.</p>
                        <button className="mt-6 px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-lg hover:bg-[#d9720b] transition-colors shadow-lg shadow-primary/20">
                            Book a Service
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
