import { NextRequest, NextResponse } from 'next/server';
import { products, getProductsByCategory } from '@/data/products';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get('category');

        if (category) {
            const filteredProducts = getProductsByCategory(category as "sneakers" | "loafers" | "boots");
            return NextResponse.json(filteredProducts);
        }

        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        // In a real app, this would save to database
        // For now, return success
        return NextResponse.json(
            { message: 'Product created', product: body },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create product' },
            { status: 500 }
        );
    }
}
