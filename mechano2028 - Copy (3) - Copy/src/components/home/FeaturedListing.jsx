export default function FeaturedListings() {
    const listings = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=1000",
            title: "CAT 320 Excavator",
            location: "New York, NY",
            price: "$450",
            specs: ["20 Ton", "Diesel", "2019 Model"],
            verified: true
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1579207037748-0ca1280d885a?auto=format&fit=crop&q=80&w=1000",
            title: "Liebherr LTM Crane",
            location: "Chicago, IL",
            price: "$1,200",
            specs: ["50 Ton", "Telescopic", "All-Terrain"],
            verified: true
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1628004746682-15f5c0418641?auto=format&fit=crop&q=80&w=1000",
            title: "Komatsu Articulated Truck",
            location: "Houston, TX",
            price: "$850",
            specs: ["30 Ton", "6x6 WD", "High Capacity"],
            verified: true
        }
    ];

    const workerListings = [
        {
            id: 101,
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000",
            name: "Amit Sharma",
            role: "Certified Electrician",
            location: "Delhi NCR",
            price: "$50 / hr",
            experience: "8 Years Exp",
            verified: true
        },
        {
            id: 102,
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000",
            name: "Suresh Verma",
            role: "Expert Welder",
            location: "Noida, UP",
            price: "$80 / hr",
            experience: "12 Years Exp",
            verified: true
        },
        {
            id: 103,
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=1000",
            name: "Ravi Singh",
            role: "Industrial Plumber",
            location: "Gurgaon, HR",
            price: "$45 / hr",
            experience: "5 Years Exp",
            verified: true
        }
    ];

    return (
        <section id="featured-services" className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white">
                        Featured Services
                    </h2>
                    <div className="flex gap-2">
                        <button className="p-3 rounded-full border border-border hover:bg-white hover:shadow-md transition-all">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button className="p-3 rounded-full border border-border hover:bg-primary hover:border-primary hover:text-white hover:shadow-md transition-all">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map((item) => (
                        <div key={item.id} className="group rounded-2xl bg-white dark:bg-white/5 border border-border dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500">

                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    {item.verified && (
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-green-200 shadow-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">verified</span>
                                            VETTED
                                        </span>
                                    )}
                                </div>
                                <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-lg text-white font-bold text-sm">
                                    {item.price} <span className="text-xs font-normal opacity-80">/ day</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center text-sm text-text-dark/60 dark:text-white/60 mb-2">
                                    <span className="material-symbols-outlined text-lg mr-1 text-primary">location_on</span>
                                    {item.location}
                                </div>
                                <h3 className="text-xl font-bold text-text-dark dark:text-white mb-4 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                {/* Specs */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.specs.map((spec, i) => (
                                        <span key={i} className="text-xs font-medium bg-background-light dark:bg-white/10 px-3 py-1.5 rounded-md text-text-dark/70 dark:text-white/70">
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full py-3 rounded-xl border border-border text-text-dark dark:text-white font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Worker Listings Row */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {workerListings.map((worker) => (
                        <div key={worker.id} className="group rounded-2xl bg-white dark:bg-white/5 border border-border dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 flex flex-col">

                            {/* Profile Image Area */}
                            <div className="relative h-48 overflow-hidden bg-gray-100 flex justify-center items-end pt-4 bg-gradient-to-b from-transparent to-black/50">
                                <img
                                    src={worker.image}
                                    alt={worker.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                                <div className="absolute bottom-4 left-4 z-10 w-full pr-8">
                                    <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-primary transition-colors">{worker.name}</h3>
                                    <p className="text-white/80 text-sm font-medium">{worker.role}</p>
                                </div>

                                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-lg text-white font-bold text-xs flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">verified</span>
                                    VERIFIED
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center text-sm text-text-dark/60 dark:text-white/60">
                                        <span className="material-symbols-outlined text-lg mr-1 text-primary">location_on</span>
                                        {worker.location}
                                    </div>
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">
                                        {worker.experience}
                                    </span>
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="text-lg font-bold text-text-dark dark:text-white">
                                        {worker.price}
                                    </div>
                                    <button className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-[#d9720b] transition-all">
                                        Hire Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
