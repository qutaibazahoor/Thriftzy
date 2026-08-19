import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeaturedDrops from "@/components/FeaturedDrops";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <SocialProof />
            <FeaturedDrops />
            <ProductGrid />
            <Footer />
        </main>
    );
}
