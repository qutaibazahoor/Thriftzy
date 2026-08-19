"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/data/products";

// Get all shoe-related categories (sneakers, loafers, boots)
function getShoeProducts(): Product[] {
    return products.filter(
        (p) => p.category === "sneakers" || p.category === "loafers" || p.category === "boots"
    );
}

export default function ShoesPage() {
    const shoeProducts = getShoeProducts();

    return (
        <main className="min-h-screen pt-20">
            <Header />

            <section className="py-section px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.p
                        className="text-caption uppercase tracking-widest text-foreground/50 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        Pre-Loved Footwear
                    </motion.p>
                    <motion.h1
                        className="text-display-lg lg:text-display-xl mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Shoes
                    </motion.h1>
                    <motion.p
                        className="text-body-lg text-foreground/60 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Curated sneakers, loafers, and boots.
                        From iconic kicks to timeless classics.
                    </motion.p>
                </motion.div>

                {/* Category Pills */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {["All", "Sneakers", "Loafers", "Boots"].map((filter, index) => (
                        <motion.button
                            key={filter}
                            className={`px-6 py-2.5 rounded-full text-body-sm font-medium transition-all duration-300 ${index === 0
                                ? "bg-foreground text-background"
                                : "bg-grey-light text-foreground hover:bg-grey-medium"
                                }`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {filter}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {shoeProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </motion.div>

                {/* Empty State */}
                {shoeProducts.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <p className="text-heading-lg text-foreground/50">
                            No shoes available right now
                        </p>
                        <p className="text-body-md text-foreground/40 mt-2">
                            Check back soon for new drops
                        </p>
                    </motion.div>
                )}

                {/* Newsletter Section */}
                <motion.div
                    className="mt-24 bg-grey-light rounded-3xl p-12 lg:p-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-display-sm mb-4">Never Miss a Drop</h3>
                    <p className="text-body-md text-foreground/60 max-w-md mx-auto mb-8">
                        Get notified when new kicks arrive. Fresh drops every week.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-full bg-white border border-grey-border focus:outline-none focus:border-foreground/30 transition-colors text-body-sm"
                        />
                        <motion.button
                            className="px-8 py-3 bg-foreground text-background rounded-full text-body-sm font-medium"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Notify Me
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
