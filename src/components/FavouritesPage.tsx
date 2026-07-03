import { useEffect, useState } from 'react';
import { productsData, type Product } from '../data/product';

export default function FavouritesPage() {
    const [favProducts, setFavProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadFavourites();
    }, []);

    const loadFavourites = () => {
        const favIds = JSON.parse(localStorage.getItem('favourites') || '[]');
        const products = favIds.map((id: string) => productsData[id]).filter(Boolean);
        setFavProducts(products);
    };

    // دالة الحذف
    const removeFromFavourites = (id: string) => {
        const favIds = JSON.parse(localStorage.getItem('favourites') || '[]');
        const updatedIds = favIds.filter((favId: string) => favId !== id);

        // تحديث localStorage
        localStorage.setItem('favourites', JSON.stringify(updatedIds));

        // تحديث الواجهة فوراً
        setFavProducts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <div style={{ padding: '100px 40px', color: '#fff', backgroundColor: '#000', minHeight: '100vh' }}>
            <h1 style={{ marginBottom: '40px' }}>My Favourites</h1>

            {favProducts.length === 0 ? (
                <p>No favourites added yet.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    {favProducts.map((p) => (
                        <div key={p.id} style={{ border: '1px solid #333', padding: '15px', position: 'relative' }}>
                            <img src={p.images[0]} alt={p.title} style={{ width: '100%' }} />
                            <h3>{p.title}</h3>
                            <p>{p.price}</p>

                            {/* زر الحذف */}
                            <button
                                onClick={() => removeFromFavourites(p.id)}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid #fff',
                                    color: '#fff',
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    marginTop: '10px'
                                }}
                            >
                                Remove ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}