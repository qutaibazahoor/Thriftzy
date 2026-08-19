import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// In-memory cart storage (in production, use database)
const cartStorage = new Map<string, any[]>();

function getSessionId(request: NextRequest): string {
    const cookieStore = cookies();
    let sessionId = cookieStore.get('cart_session')?.value;

    if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    return sessionId;
}

export async function GET(request: NextRequest) {
    try {
        const sessionId = getSessionId(request);
        const cartItems = cartStorage.get(sessionId) || [];

        return NextResponse.json({ items: cartItems, sessionId });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch cart' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const sessionId = getSessionId(request);
        const body = await request.json();
        const { productId, quantity = 1 } = body;

        let cartItems = cartStorage.get(sessionId) || [];

        // Check if product already in cart
        const existingItemIndex = cartItems.findIndex(item => item.productId === productId);

        if (existingItemIndex > -1) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({
                id: `cart_${Date.now()}`,
                productId,
                quantity,
                addedAt: new Date().toISOString()
            });
        }

        cartStorage.set(sessionId, cartItems);

        const response = NextResponse.json({ items: cartItems, sessionId });
        response.cookies.set('cart_session', sessionId, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30 // 30 days
        });

        return response;
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to add to cart' },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    try {
        const sessionId = getSessionId(request);
        const body = await request.json();
        const { cartItemId, quantity } = body;

        let cartItems = cartStorage.get(sessionId) || [];
        const itemIndex = cartItems.findIndex(item => item.id === cartItemId);

        if (itemIndex > -1) {
            if (quantity <= 0) {
                cartItems.splice(itemIndex, 1);
            } else {
                cartItems[itemIndex].quantity = quantity;
            }
            cartStorage.set(sessionId, cartItems);
        }

        return NextResponse.json({ items: cartItems });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update cart' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const sessionId = getSessionId(request);
        const searchParams = request.nextUrl.searchParams;
        const cartItemId = searchParams.get('itemId');

        let cartItems = cartStorage.get(sessionId) || [];

        if (cartItemId) {
            cartItems = cartItems.filter(item => item.id !== cartItemId);
            cartStorage.set(sessionId, cartItems);
        } else {
            // Clear entire cart
            cartStorage.delete(sessionId);
            cartItems = [];
        }

        return NextResponse.json({ items: cartItems });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete from cart' },
            { status: 500 }
        );
    }
}
