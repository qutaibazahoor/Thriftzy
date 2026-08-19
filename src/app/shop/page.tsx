import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function ShopPage() {
    return (
        <main className="min-h-screen pt-20">
            <Header />
            <ProductGrid />
            <Footer />
        </main>
    );
}
