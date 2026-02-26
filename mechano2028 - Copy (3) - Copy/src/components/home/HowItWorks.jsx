export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Find Equipment or Skilled Worker",
            description: "Browse our extensive catalog of heavy machinery and certified operators available in your area.",
        },
        {
            number: "02",
            title: "Secure Booking",
            description: "Select your dates, review specific requirements, and book instantly with secure payments.",
        },
        {
            number: "03",
            title: "Start Your Project",
            description: "Equipment is delivered to your site on time. Manage your fleet from one dashboard.",
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white dark:bg-[#1a140e]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-white mb-4">
                        How Mechano Works
                    </h2>
                    <p className="text-text-dark/60 dark:text-white/60 max-w-2xl mx-auto">
                        Streamlining the rental process for construction professionals.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-2xl bg-white dark:bg-[#221910] border border-border dark:border-white/10 shadow-lg flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                                <span className="text-3xl font-extrabold text-primary font-manrope bg-primary/10 px-4 py-2 rounded-lg">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-text-dark dark:text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-text-dark/60 dark:text-white/60 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
