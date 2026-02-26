export default function Categories() {
    const categories = [
        { title: "Excavators", icon: "agriculture", desc: "Heavy earthmovers" },
        { title: "Cranes", icon: "precision_manufacturing", desc: "Lifting giants" },
        { title: "Dump Trucks", icon: "local_shipping", desc: "Material transport" },
        { title: "Certified Operators", icon: "engineering", desc: "Expert handlers" },
        { title: "Skilled Workers", icon: "handyman", desc: "Mechanics & Techs" },
    ];

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white mb-4">
                            Explore by Category
                        </h2>
                        <p className="text-text-dark/60 dark:text-white/60 max-w-lg">
                            Find exactly what you need for your project from our vast fleet of verified machinery.
                        </p>
                    </div>
                    <button className="hidden md:block px-6 py-3 rounded-lg border border-border text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
                        View All Categories
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-border dark:border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-xl bg-background-light dark:bg-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl text-text-dark dark:text-white group-hover:text-primary transition-colors duration-300">
                                    {cat.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-text-dark dark:text-white mb-2">{cat.title}</h3>
                            <p className="text-sm text-text-dark/60 dark:text-white/60">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
