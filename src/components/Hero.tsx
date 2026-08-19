"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grey-light">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Overline */}
                    <motion.p
                        className="text-caption uppercase tracking-widest text-foreground/50 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Premium Thrifted Shoes
                    </motion.p>

                    {/* Main Headline */}
                    <h1 className="text-display-xl mb-6">
                        <span className="block">Step Into History.</span>
                        <motion.span
                            className="block text-foreground/40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Thrifted.
                        </motion.span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-body-lg text-foreground/60 max-w-xl mx-auto mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Pre-loved sneakers, loafers, and boots. Every pair has a story.
                        Curated for those who value authenticity and quality.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <Link href="/shop">
                            <motion.button
                                className="bg-primary text-background px-10 py-4 rounded-full text-body-md font-medium hover:bg-primary/90 transition-colors"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                            >
                                Shop the Collection
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Floating Shoe Visual */}
                <motion.div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 0.1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <svg viewBox="0 0 400 160" className="w-full">
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            className="fill-foreground text-[120px] font-bold tracking-tighter"
                        >
                            THRIFTZY
                        </text>
                    </svg>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <motion.div
                        className="w-1.5 h-3 bg-foreground/40 rounded-full mt-2"
                        animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
