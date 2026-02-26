import { createContext, useContext, useState, useEffect } from 'react';

const MarketplaceContext = createContext();

export function useMarketplace() {
    return useContext(MarketplaceContext);
}

export function MarketplaceProvider({ children }) {
    // Mock Data - Machinery
    const initialMachinery = [
        { id: 1, type: 'machinery', title: 'Komatsu PC210 Excavator', price: '12,500', unit: '/ day', location: 'Ernakulam', distance: '12 km', rating: '4.8', image: 'https://plus.unsplash.com/premium_photo-1664302152996-26703b680517?q=80&w=2067&auto=format&fit=crop', badge: 'FAST DELIVERY' },
        { id: 2, type: 'machinery', title: 'JCB 3DX Super Eco', price: '9,500', unit: '/ day', location: 'Thiruvananthapuram', distance: '5 km', rating: '4.7', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop', badge: 'POPULAR' },
        { id: 3, type: 'machinery', title: 'Bobcat S450 Skid Steer', price: '5,500', unit: '/ day', location: 'Kozhikode', distance: '18 km', rating: '4.7', image: 'https://images.unsplash.com/photo-1721532296155-236b28173426?q=80&w=2070&auto=format&fit=crop', badge: '' },
        { id: 4, type: 'machinery', title: 'Hydra Crane 14 Ton', price: '8,000', unit: '/ day', location: 'Thrissur', distance: '22 km', rating: '4.5', image: 'https://images.unsplash.com/photo-1582216508216-95568cb1943f?q=80&w=2070&auto=format&fit=crop', badge: '' },
    ];

    // Mock Data - Skilled Workers
    const initialWorkers = [
        { id: 101, type: 'worker', name: 'Amit Sharma', role: 'Certified Electrician', price: '500', unit: '/ hour', location: 'Kollam', distance: '3 km', rating: '4.9', experience: '8 Years', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop', badge: 'VERIFIED' },
        { id: 102, type: 'worker', name: 'Suresh Verma', role: 'Expert Welder (MIG/TIG)', price: '800', unit: '/ hour', location: 'Alappuzha', distance: '8 km', rating: '4.8', experience: '12 Years', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop', badge: 'TOP RATED' },
        { id: 103, type: 'worker', name: 'Ravi Singh', role: 'Industrial Plumber', price: '450', unit: '/ hour', location: 'Malappuram', distance: '10 km', rating: '4.6', experience: '5 Years', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop', badge: '' },
        { id: 104, type: 'worker', name: 'Team Alpha Mechanics', role: 'Heavy Diesel Mechanics', price: '1,500', unit: '/ hour', location: 'Palakkad', distance: '15 km', rating: '5.0', experience: '15+ Years', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop', badge: 'TEAM' },
    ];

    // Mock Data - Active Services
    const initialActiveServices = [
        { id: 'ORD-2891', type: 'machinery', name: 'JCB 3DX Backhoe Loader', status: 'In Progress', location: 'Site A, Ernakulam', date: 'Ends Oct 25', image: 'https://images.unsplash.com/photo-1579618067427-4629471927c3?q=80&w=2070&auto=format&fit=crop' },
        { id: 'JOB-9921', type: 'worker', name: 'Rajender Kumar (Electrician)', status: 'Scheduled', location: 'Warehoue 2, Kottayam', date: 'Today, 2:00 PM', image: 'https://images.unsplash.com/photo-1541625602330-2277db098547?q=80&w=2083&auto=format&fit=crop' },
        { id: 'ORD-2900', type: 'machinery', name: 'Caterpillar D6 Dozer', status: 'In Progress', location: 'Site A, Kannur', date: 'Ends Oct 30', image: 'https://images.unsplash.com/photo-1520624024399-5fa8a383b482?q=80&w=2069&auto=format&fit=crop' },
    ];

    // Mock Data - My Bookings
    const initialBookings = [
        { id: 'ORD-2891', type: 'machinery', name: 'JCB 3DX Backhoe Loader', status: 'Upcoming', location: 'Site A, Ernakulam', date: 'Oct 25, 2026', image: 'https://images.unsplash.com/photo-1579618067427-4629471927c3?q=80&w=2070&auto=format&fit=crop', price: '12,500' },
        { id: 'JOB-9921', type: 'worker', name: 'Rajender Kumar (Electrician)', status: 'Completed', location: 'Warehouse 2, Kottayam', date: 'Oct 12, 2026', image: 'https://images.unsplash.com/photo-1541625602330-2277db098547?q=80&w=2083&auto=format&fit=crop', price: '500' },
        { id: 'ORD-1102', type: 'machinery', name: 'Rotary Drill Rig', status: 'Cancelled', location: 'Site C, Kochi', date: 'Sep 20, 2026', image: 'https://images.unsplash.com/photo-1582216508216-95568cb1943f?q=80&w=2070&auto=format&fit=crop', price: '15,000' }
    ];

    const [machinery, setMachinery] = useState(initialMachinery);
    const [workers, setWorkers] = useState(initialWorkers);
    const [activeServices, setActiveServices] = useState(initialActiveServices);
    const [myBookings, setMyBookings] = useState(initialBookings);
    const [userLocation, setUserLocation] = useState('All Kerala');

    // Filtered Data based on Location
    const filteredMachinery = userLocation === 'All Kerala'
        ? machinery
        : machinery.filter(item => item.location.includes(userLocation));

    const filteredWorkers = userLocation === 'All Kerala'
        ? workers
        : workers.filter(item => item.location.includes(userLocation));

    const [searchResults, setSearchResults] = useState({ machinery: filteredMachinery, workers: filteredWorkers });

    // Update search results when location changes (resets search)
    useEffect(() => {
        setSearchResults({ machinery: filteredMachinery, workers: filteredWorkers });
    }, [userLocation, machinery, workers]);

    // Search Logic
    const searchServices = (query) => {
        if (!query) {
            setSearchResults({ machinery: filteredMachinery, workers: filteredWorkers });
            return;
        }

        const lowerQuery = query.toLowerCase();

        const searchFilteredMachinery = filteredMachinery.filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.location.toLowerCase().includes(lowerQuery)
        );

        const searchFilteredWorkers = filteredWorkers.filter(worker =>
            worker.name.toLowerCase().includes(lowerQuery) ||
            worker.role.toLowerCase().includes(lowerQuery) ||
            worker.location.toLowerCase().includes(lowerQuery)
        );

        setSearchResults({ machinery: searchFilteredMachinery, workers: searchFilteredWorkers });
    };

    // Booking Logic
    const bookService = (service, date) => {
        const newBooking = {
            id: `ORD-${Math.floor(Math.random() * 10000)}`, // Generate random ID
            type: service.type, // 'machinery' or 'worker'
            name: service.title || service.name || service.name,
            status: 'Upcoming', // Default status for new booking
            location: service.location,
            date: date || new Date().toLocaleDateString(),
            image: service.image,
            price: service.price
        };

        setMyBookings([newBooking, ...myBookings]);
    };

    // Cart Logic
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        // Check if item is already in cart
        if (cart.some(cartItem => cartItem.id === item.id)) {
            // Optionally show a toast or alert
            return;
        }
        setCart([...cart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            // Parse price string like "12,500" to number
            const price = parseFloat(item.price.replace(/,/g, ''));
            return total + (isNaN(price) ? 0 : price);
        }, 0);
    };

    const value = {
        machinery: filteredMachinery, // Expose filtered lists by default
        workers: filteredWorkers,
        allMachinery: machinery, // Expose raw lists if needed
        allWorkers: workers,
        activeServices,
        myBookings,
        searchResults,
        searchServices,
        bookService,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        userLocation,
        setUserLocation
    };

    return (
        <MarketplaceContext.Provider value={value}>
            {children}
        </MarketplaceContext.Provider>
    );
}
