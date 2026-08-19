"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    return (
        <section className="py-section px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-component">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-caption uppercase tracking-widest text-foreground/50 mb-3">
                        The Collection
                    </p>
                    <h2 className="text-display-md">Shop All</h2>
                </motion.div>
            </div>

            {/* Filter Pills */}
            <motion.div
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {["All", "Sneakers", "Loafers", "Boots", "Apparel"].map((filter, index) => (
                    <motion.button
                        key={filter}
                        className={`px-5 py-2 rounded-full text-body-sm transition-all duration-300 ${index === 0
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
        </section>
    );
}
