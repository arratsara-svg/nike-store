import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsData, type Product } from '../data/product';

const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ borderBottom: '1px solid #333', padding: '20px 0' }}>
            <div onClick={() => setIsOpen(!isOpen)} style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontWeight: 'bold' }}>
                {title}
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && <div style={{ marginTop: '15px', color: '#aaa' }}>{children}</div>}
        </div>
    );
};

export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [index, setIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const product: Product | undefined = id ? productsData[id] : undefined;
    const sizes = ['EU 36.5', 'EU 37.5', 'EU 38', 'EU 38.5', 'EU 39', 'EU 40', 'EU 40.5', 'EU 41', 'EU 44', 'EU 45', 'EU 46'];

    if (!product) return <div style={{ color: '#fff', padding: '100px' }}>Product not found!</div>;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % product.images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [product.images.length]);

    const addToCart = () => {
        if (!selectedSize) {
            alert("Please select a size first!");
            return;
        }
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const cartItem = { ...product, size: selectedSize };
        localStorage.setItem('cart', JSON.stringify([...cart, cartItem]));
        alert(`Added ${product.title} (Size: ${selectedSize}) to Bag!`);
    };

    return (
        <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#fff', fontFamily: 'Helvetica, Arial, sans-serif', paddingTop: '100px' }}>
            <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) minmax(400px, 1fr)', gap: '100px', alignItems: 'start' }}>

                    <div>
                        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>{product.title}</h1>
                        <p style={{ fontSize: '18px', color: '#aaa', marginBottom: '20px' }}>{product.description}</p>
                        <h2 style={{ fontSize: '28px', margin: '20px 0' }}>{product.price}</h2>

                        {/* قسم المقاسات */}
                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ marginBottom: '10px', fontSize: '14px' }}>Select Size</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                {sizes.map((size) => (
                                    <button key={size} onClick={() => setSelectedSize(size)} style={{ padding: '12px', cursor: 'pointer', backgroundColor: selectedSize === size ? '#fff' : 'transparent', color: selectedSize === size ? '#000' : '#fff', border: selectedSize === size ? '2px solid #fff' : '1px solid #555', borderRadius: '4px' }}>{size}</button>
                                ))}
                            </div>
                        </div>

                        <button onClick={addToCart} style={{ width: '100%', padding: '20px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px', backgroundColor: '#fff', color: '#000' }}>Add to Bag</button>

                        {/* هنا قمت بإضافة الـ AccordionItem كما طلبتِ */}
                        <div style={{ marginTop: '40px' }}>
                            <AccordionItem title="Size & Fit"><p>True to size. Order your standard fit.</p></AccordionItem>
                            <AccordionItem title="Delivery & Returns"><p>Free delivery on orders over £50. 30-day returns.</p></AccordionItem>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', flexDirection: 'row-reverse' }}>
                        <img src={product.images[index]} alt="Main" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {product.images.map((img, i) => (
                                <img key={i} src={img} alt="thumb" onClick={() => setIndex(i)} style={{ width: '70px', height: '70px', cursor: 'pointer', border: index === i ? '2px solid #fff' : '1px solid #555', objectFit: 'cover' }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}