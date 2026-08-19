const { PrismaClient } = require('@prisma/client');
import { products } from '../src/data/products';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Clear existing data
    await prisma.cartItem.deleteMany();
    await prisma.product.deleteMany();
    await prisma.order.deleteMany();

    // Seed products
    for (const product of products) {
        await prisma.product.create({
            data: {
                id: product.id,
                name: product.name,
                brand: product.brand,
                category: product.category,
                size: product.size,
                price: product.price,
                originalPrice: product.originalPrice || null,
                condition: product.condition,
                image: product.image,
                images: product.images ? JSON.stringify(product.images) : null,
                description: product.description,
                isFeatured: product.isFeatured || false,
                isSold: product.isSold || false,
            },
        });
    }

    console.log(`Seeded ${products.length} products`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
