import { NextRequest, NextResponse } from 'next/server';
import { getProductById } from '@/data/products';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const product = getProductById(params.id);

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch product' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        // In a real app, this would update the database
        return NextResponse.json(
            { message: 'Product updated', product: { id: params.id, ...body } }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update product' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // In a real app, this would delete from database
        return NextResponse.json(
            { message: 'Product deleted' }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete product' },
            { status: 500 }
        );
    }
}
