import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Thriftzy | Premium Thrifted Shoes - Sneakers, Loafers & Boots",
    description: "Step Into History. Thrifted. Shop authentic pre-loved sneakers, loafers, and boots. Hand-picked and authenticated for quality. Trusted by 1,000+ customers.",
    keywords: ["thrift", "sneakers", "loafers", "boots", "pre-loved shoes", "thrifted", "vintage shoes", "secondhand shoes"],
    openGraph: {
        title: "Thriftzy | Premium Thrifted Shoes",
        description: "Step Into History. Thrifted. Shop authentic pre-loved sneakers, loafers, and boots.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
