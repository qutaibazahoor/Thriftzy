"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const [isAdding, setIsAdding] = useState(false);
    const [added, setAdded] = useState(false);

    const handleAddToCart = async (e: React.MouseEvent) => {
        e.preventDefault();
        setIsAdding(true);

        try {
            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId: product.id, quantity: 1 })
            });

            if (response.ok) {
                setAdded(true);
                setTimeout(() => setAdded(false), 2000);
            }
        } catch (error) {
            console.error('Failed to add to cart:', error);
        } finally {
            setIsAdding(false);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Link href={`/product/${product.id}`} className="group block">
                {/* Image Container */}
                <div className="relative aspect-square bg-grey-light rounded-2xl overflow-hidden mb-4">
                    {/* Product Image */}
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <motion.div
                        className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Sold Badge */}
                    {product.isSold && (
                        <div className="absolute top-4 left-4 bg-foreground text-background text-caption px-3 py-1 rounded-full">
                            Sold
                        </div>
                    )}

                    {/* Condition Badge */}
                    {!product.isSold && (
                        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-caption px-3 py-1 rounded-full">
                            {product.condition}
                        </div>
                    )}

                    {/* Sale Badge */}
                    {product.originalPrice && (
                        <div className="absolute top-4 left-4 bg-primary text-white text-caption px-3 py-1 rounded-full font-medium">
                            SALE
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                    {/* Brand */}
                    <p className="text-caption text-foreground/50 uppercase tracking-wider">
                        {product.brand}
                    </p>

                    {/* Name */}
                    <h3 className="text-heading-md group-hover:text-foreground/70 transition-colors duration-300">
                        {product.name}
                    </h3>

                    {/* Size & Price Row */}
                    <div className="flex items-center justify-between pt-2">
                        {/* Size */}
                        <span className="text-body-sm bg-grey-light px-3 py-1 rounded-full">
                            {product.size}
                        </span>

                        {/* Price */}
                        <div className="text-right">
                            {product.originalPrice && (
                                <span className="text-body-sm text-foreground/40 line-through mr-2">
                                    Rs{product.originalPrice.toLocaleString()}
                                </span>
                            )}
                            <span className="text-heading-md">
                                Rs{product.price.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    {!product.isSold && (
                        <motion.button
                            onClick={handleAddToCart}
                            className={`w-full mt-3 px-4 py-2.5 rounded-full text-body-sm font-medium transition-colors ${added
                                ? 'bg-green-500 text-white'
                                : 'bg-primary text-white hover:bg-primary/90'
                                }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isAdding}
                        >
                            {added ? '✓ Added to Cart' : isAdding ? 'Adding...' : 'Add to Cart'}
                        </motion.button>
                    )}
                </div>
            </Link>
        </motion.div>
    );
}
