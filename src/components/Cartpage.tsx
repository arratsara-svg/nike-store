import { useState, useEffect } from 'react';

import { productsData, type Product } from '../data/product'; // تأكدي من مسار الاستيراد

export default function CartPage() {

    const [cartItems, setCartItems] = useState<Product[]>([]);

    // جلب المنتجات من localStorage عند تحميل الصفحة
    useEffect(() => {
        const cartIds = JSON.parse(localStorage.getItem('cart') || '[]');
        const items = cartIds.map((id: string) => productsData[id]).filter(Boolean);
        setCartItems(items);
    }, []);

    // دالة حذف منتج من السلة
    const removeFromCart = (id: string) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart.map(i => i.id)));
    };

    // حساب المجموع (استخراج الرقم من نص السعر مثل £155.00)
    const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('£', '')), 0);

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#111111', minHeight: '100vh', padding: '40px 48px', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px' }}>

                {/* الجزء الأيسر */}
                <div>
                    <div style={{ padding: '16px', border: '1px solid #e5e5e5', marginBottom: '24px' }}>
                        <h3 style={{ color: '#fa5400', fontSize: '18px', fontWeight: 500, margin: '0 0 8px 0' }}>Fast, Free Delivery for Nike Members</h3>
                        <p style={{ margin: 0, fontSize: '15px' }}>Nike Members who spend more than £50 qualify for free delivery.</p>
                    </div>

                    <h1 style={{ fontSize: '24px', fontWeight: 500, margin: '0 0 16px 0' }}>Bag</h1>

                    {cartItems.length === 0 ? (
                        <p style={{ color: '#707072', fontSize: '16px', margin: '0 0 60px 0' }}>There are no items in your bag.</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} style={{ display: 'flex', gap: '20px', marginBottom: '30px', borderBottom: '1px solid #e5e5e5', paddingBottom: '20px' }}>
                                <img src={item.images[0]} alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                <div>
                                    <h3 style={{ margin: '0 0 8px 0' }}>{item.title}</h3>
                                    <p style={{ margin: '0 0 10px 0', color: '#707072' }}>{item.price}</p>
                                    <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* الجزء الأيمن: Summary */}
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 500, margin: '0 0 24px 0' }}>Summary</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Subtotal</span><span>£{subtotal.toFixed(2)}</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Estimated Delivery</span><span>{subtotal > 50 ? 'Free' : '£5.00'}</span></div>
                        <div style={{ height: '1px', backgroundColor: '#e5e5e5' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}><span>Total</span><span>£{(subtotal > 0 && subtotal < 50 ? subtotal + 5 : subtotal).toFixed(2)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}