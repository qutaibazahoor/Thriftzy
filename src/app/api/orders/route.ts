import { NextRequest, NextResponse } from 'next/server';

// In-memory order storage (in production, use database)
const orders = new Map<string, any>();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { customerName, email, phone, address, items, total } = body;

        const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const order = {
            id: orderId,
            customerName,
            email,
            phone,
            address,
            items,
            total,
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        orders.set(orderId, order);

        return NextResponse.json(
            { message: 'Order created successfully', order },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create order' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const email = searchParams.get('email');

        if (email) {
            const userOrders = Array.from(orders.values()).filter(
                order => order.email === email
            );
            return NextResponse.json({ orders: userOrders });
        }

        // Return all orders (admin functionality)
        return NextResponse.json({ orders: Array.from(orders.values()) });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch orders' },
            { status: 500 }
        );
    }
}
