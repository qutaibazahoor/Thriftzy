"use client";

import { motion } from "framer-motion";
import { featuredDrops } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedDrops() {
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
                        New Arrivals
                    </p>
                    <h2 className="text-display-md">Featured Drops</h2>
                </motion.div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {featuredDrops.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>

            {/* View All Link */}
            <motion.div
                className="text-center mt-component"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <a
                    href="/shop"
                    className="inline-flex items-center gap-2 text-body-md text-foreground/60 hover:text-foreground transition-colors duration-300 group"
                >
                    View all products
                    <motion.span
                        className="inline-block"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        →
                    </motion.span>
                </a>
            </motion.div>
        </section>
    );
}
