"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { label: "All Products", href: "/shop" },
            { label: "Sneakers", href: "/shop/shoes" },
            { label: "Loafers", href: "/shop/shoes" },
            { label: "Boots", href: "/shop/shoes" },
        ],
        info: [
            { label: "About Us", href: "/about" },
            { label: "Shipping", href: "/shipping" },
            { label: "Returns Policy", href: "/returns" },
            { label: "Contact", href: "/contact" },
        ],
        social: [
            { label: "Instagram", href: "https://instagram.com/thriftzy" },
            { label: "WhatsApp", href: "https://wa.me/yourphonenumber" },
        ],
    };

    return (
        <footer className="bg-grey-light border-t border-grey-border">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-section">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/">
                            <motion.span
                                className="text-2xl font-bold tracking-tight"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                Thriftzy
                            </motion.span>
                        </Link>
                        <p className="text-body-sm text-foreground/60 mt-4 max-w-xs">
                            Premium thrifted shoes. Each pair is hand-picked
                            and authenticated for quality and style.
                        </p>
                        {/* Social Proof */}
                        <div className="mt-6 flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-sm">★</span>
                                ))}
                            </div>
                            <span className="text-caption text-foreground/50">
                                1,000+ happy customers
                            </span>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h4 className="text-caption uppercase tracking-widest text-foreground/50 mb-4">
                            Shop
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-body-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info Links */}
                    <div>
                        <h4 className="text-caption uppercase tracking-widest text-foreground/50 mb-4">
                            Information
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.info.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-body-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-caption uppercase tracking-widest text-foreground/50 mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.social.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-body-sm text-foreground/70 hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1"
                                    >
                                        {link.label}
                                        <span className="text-xs">↗</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Policy Notice */}
                        <div className="mt-8 p-4 bg-background rounded-xl">
                            <p className="text-caption text-foreground/60">
                                <span className="font-medium text-foreground">Note:</span> All sales are final.
                                Pre-payment only (No COD).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-grey-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-caption text-foreground/40">
                        © {currentYear} Thriftzy. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy"
                            className="text-caption text-foreground/40 hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-caption text-foreground/40 hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
