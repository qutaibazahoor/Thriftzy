"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface ProductPageProps {
    params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = getProductById(params.id);

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <main className="min-h-screen">
            <Header />

            {/* Product Detail Section */}
            <section className="pt-32 pb-section">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <motion.nav
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ol className="flex items-center gap-2 text-body-sm text-foreground/50">
                            <li>
                                <Link href="/" className="hover:text-foreground transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link href="/shop" className="hover:text-foreground transition-colors">
                                    Shop
                                </Link>
                            </li>
                            <li>/</li>
                            <li className="text-foreground">{product.name}</li>
                        </ol>
                    </motion.nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Product Image */}
                        <motion.div
                            className="relative aspect-square bg-grey-light rounded-3xl overflow-hidden"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Placeholder with emoji */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.span
                                    className="text-9xl"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    {product.category === "boots" ? "🥾" :
                                        product.category === "loafers" ? "👞" :
                                            "👟"}
                                </motion.span>
                            </div>

                            {/* Only 1 in stock badge */}
                            <motion.div
                                className="absolute top-6 left-6 bg-foreground text-background px-4 py-2 rounded-full text-body-sm font-medium"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                Only 1 in stock
                            </motion.div>

                            {/* Condition badge */}
                            <motion.div
                                className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-body-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                {product.condition}
                            </motion.div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Brand */}
                            <motion.p
                                className="text-caption uppercase tracking-widest text-foreground/50 mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                {product.brand}
                            </motion.p>

                            {/* Name */}
                            <motion.h1
                                className="text-display-md mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                {product.name}
                            </motion.h1>

                            {/* Price */}
                            <motion.div
                                className="flex items-baseline gap-3 mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                            >
                                <span className="text-display-md">
                                    ₹{product.price.toLocaleString()}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-heading-md text-foreground/40 line-through">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                )}
                            </motion.div>

                            {/* Size */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                <p className="text-body-sm text-foreground/50 mb-2">Size</p>
                                <span className="inline-block bg-grey-light px-5 py-3 rounded-xl text-heading-md">
                                    {product.size}
                                </span>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                className="text-body-lg text-foreground/70 mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                {product.description}
                            </motion.p>

                            {/* Buy Button */}
                            <motion.button
                                className="w-full bg-foreground text-background py-5 rounded-full text-heading-md font-medium mb-6"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                Buy Now — ₹{product.price.toLocaleString()}
                            </motion.button>

                            {/* Policy Notice */}
                            <motion.div
                                className="bg-grey-light rounded-2xl p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-sm">!</span>
                                    </div>
                                    <div>
                                        <p className="text-body-md font-medium mb-1">Purchase Policy</p>
                                        <p className="text-body-sm text-foreground/60">
                                            All sales are final. Due to the nature of thrift, we do not accept returns.
                                            Pre-payment only (No COD).
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Additional Details */}
                            <motion.div
                                className="mt-8 pt-8 border-t border-grey-border"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.4 }}
                            >
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-caption text-foreground/50 uppercase tracking-wider mb-1">
                                            Category
                                        </p>
                                        <p className="text-body-md capitalize">{product.category}</p>
                                    </div>
                                    <div>
                                        <p className="text-caption text-foreground/50 uppercase tracking-wider mb-1">
                                            Condition
                                        </p>
                                        <p className="text-body-md">{product.condition}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-section px-6 lg:px-8 max-w-7xl mx-auto border-t border-grey-border">
                    <motion.div
                        className="mb-component"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-caption uppercase tracking-widest text-foreground/50 mb-3">
                            You might also like
                        </p>
                        <h2 className="text-display-md">Related Products</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {relatedProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
