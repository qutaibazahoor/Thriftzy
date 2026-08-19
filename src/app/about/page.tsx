"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-section px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p
                        className="text-caption uppercase tracking-widest text-foreground/50 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Story
                    </motion.p>
                    <motion.h1
                        className="text-display-xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        Streetwear History.
                        <br />
                        <span className="text-foreground/40">Pre-loved.</span>
                    </motion.h1>
                    <motion.p
                        className="text-body-lg text-foreground/60 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Gainszee started with a simple belief: great shoes deserve a second life.
                        We curate premium pre-loved footwear and streetwear for those who
                        appreciate quality, sustainability, and style.
                    </motion.p>
                </div>
            </section>

            {/* Values */}
            <section className="py-section px-6 lg:px-8 bg-grey-light">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {[
                            {
                                title: "Curated Quality",
                                description:
                                    "Every piece is hand-selected and authenticated. We only accept items that meet our strict quality standards.",
                                icon: "✨",
                            },
                            {
                                title: "Sustainable Fashion",
                                description:
                                    "By giving shoes a second life, we're reducing waste and promoting a more sustainable approach to fashion.",
                                icon: "🌱",
                            },
                            {
                                title: "Community First",
                                description:
                                    "1,000+ happy customers on Instagram. We've built a community of sneakerheads who trust us.",
                                icon: "💪",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <span className="text-5xl mb-6 block">{value.icon}</span>
                                <h3 className="text-heading-lg mb-3">{value.title}</h3>
                                <p className="text-body-md text-foreground/60">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-section px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {[
                            { number: "1,000+", label: "Happy Customers" },
                            { number: "500+", label: "Shoes Sold" },
                            { number: "100%", label: "Authentic Items" },
                            { number: "5★", label: "Average Rating" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <p className="text-display-md mb-2">{stat.number}</p>
                                <p className="text-body-sm text-foreground/50">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-section px-6 lg:px-8 bg-foreground text-background">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-display-md mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to find your next pair?
                    </motion.h2>
                    <motion.a
                        href="/shop"
                        className="inline-block bg-background text-foreground px-10 py-4 rounded-full text-body-md font-medium"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Shop the Collection
                    </motion.a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
