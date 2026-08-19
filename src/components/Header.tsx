"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/shop", label: "Shop All" },
        { href: "/shop/shoes", label: "Shoes" },
        { href: "/about", label: "About" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-grey-border/50">
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <motion.span
                            className="text-xl lg:text-2xl font-bold tracking-tight"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            Thriftzy
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <motion.span
                                    className="text-body-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                                    whileHover={{ y: -1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.label}
                                </motion.span>
                            </Link>
                        ))}
                    </div>

                    {/* Cart & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        {/* Cart Icon */}
                        <motion.button
                            className="relative p-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Shopping cart"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                            {/* Cart badge */}
                            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-foreground text-background text-[10px] font-medium rounded-full flex items-center justify-center">
                                0
                            </span>
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="lg:hidden relative z-50 p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 flex flex-col gap-1.5">
                                <motion.span
                                    className="block h-0.5 bg-foreground origin-center"
                                    animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="block h-0.5 bg-foreground"
                                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="block h-0.5 bg-foreground origin-center"
                                    animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white z-40 lg:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-display-md hover:text-foreground/60 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
