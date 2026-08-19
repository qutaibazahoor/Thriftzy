export interface Product {
    id: string;
    name: string;
    brand: string;
    category: "sneakers" | "loafers" | "boots";
    size: string;
    price: number;
    originalPrice?: number;
    condition: "Excellent" | "Very Good" | "Good";
    image: string;
    images?: string[];
    description: string;
    isFeatured?: boolean;
    isSold?: boolean;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Air Jordan 1 Retro High OG",
        brand: "Nike",
        category: "sneakers",
        size: "US 10",
        price: 18500,
        originalPrice: 25000,
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
        description: "Iconic silhouette in pristine condition. Minimal creasing, original box included.",
        isFeatured: true,
    },
    {
        id: "2",
        name: "Penny Loafers Brown Leather",
        brand: "Cole Haan",
        category: "loafers",
        size: "US 9",
        price: 8500,
        condition: "Very Good",
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=600&fit=crop",
        description: "Classic penny loafers in rich brown leather. Perfect for smart casual looks.",
        isFeatured: true,
    },
    {
        id: "3",
        name: "Chuck Taylor All Star '70",
        brand: "Converse",
        category: "sneakers",
        size: "US 8.5",
        price: 4500,
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&h=600&fit=crop",
        description: "Vintage-inspired high tops with premium canvas construction.",
        isFeatured: true,
    },
    {
        id: "4",
        name: "Chelsea Boots Black",
        brand: "Dr. Martens",
        category: "boots",
        size: "US 11",
        price: 12000,
        originalPrice: 18000,
        condition: "Very Good",
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=600&fit=crop",
        description: "Classic Dr. Martens Chelsea boots with signature yellow stitching.",
        isFeatured: true,
    },
    {
        id: "5",
        name: "Stan Smith OG",
        brand: "Adidas",
        category: "sneakers",
        size: "US 9.5",
        price: 6500,
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
        description: "Clean white leather with green heel tab. Timeless design.",
    },
    {
        id: "6",
        name: "Suede Tassel Loafers",
        brand: "Zara Man",
        category: "loafers",
        size: "US 10",
        price: 4000,
        condition: "Good",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=600&fit=crop",
        description: "Navy suede loafers with tassel detail. Great for summer.",
    },
    {
        id: "7",
        name: "Air Force 1 Low White",
        brand: "Nike",
        category: "sneakers",
        size: "US 8",
        price: 7500,
        condition: "Very Good",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
        description: "The classic all-white AF1. Well maintained with minor sole wear.",
    },
];

export const featuredDrops = products.filter(p => p.isFeatured);

export function getProductById(id: string): Product | undefined {
    return products.find(p => p.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
    return products.filter(p => p.category === category);
}
