import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedListings from '../components/home/FeaturedListing';
import Footer from '../components/layout/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <HowItWorks />
            <FeaturedListings />
            <Footer />
        </>
    );
}
