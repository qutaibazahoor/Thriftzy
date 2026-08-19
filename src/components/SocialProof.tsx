"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    const items = [
        "Trusted by 1,000+ customers on Instagram",
        "★★★★★",
        "Premium Pre-loved Quality",
        "★★★★★",
        "Authentic Streetwear",
        "★★★★★",
        "Trusted by 1,000+ customers on Instagram",
        "★★★★★",
        "Premium Pre-loved Quality",
        "★★★★★",
        "Authentic Streetwear",
        "★★★★★",
    ];

    return (
        <section className="py-8 bg-foreground text-background overflow-hidden">
            <div className="relative">
                <motion.div
                    className="flex items-center gap-8 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {items.map((item, index) => (
                        <span
                            key={index}
                            className="text-body-sm font-medium tracking-wide opacity-90"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
