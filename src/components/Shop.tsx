import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; //

// --- البيانات الأساسية ---
interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    athlete: string;
    country: string;
    image: string;
}

const allProducts: Product[] = Array(12).fill(null).map((_, i) => ({
    id: i,
    title: i % 2 === 0 ? "LeBron Jersey" : "Haaland Shirt",
    category: "Tops",
    price: 80 + (i * 10),
    athlete: i % 2 === 0 ? "LeBron James" : "Erling Haaland",
    country: i % 2 === 0 ? "USA" : "England",
    image: `https://picsum.photos/seed/${i + 10}/400/400`
}));

// --- المكون الرئيسي ---
export default function ShopPage() {
    const navigate = useNavigate(); //
    const [showSort, setShowSort] = useState(false);
    const [showFilters, setShowFilters] = useState(true);
    const [sortOption, setSortOption] = useState('Featured');
    const [selectedAthletes, setSelectedAthletes] = useState<string[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({ Athletes: true, Countries: true });

    const toggleSection = (section: string) => setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));

    const toggleFilter = (val: string, type: 'athlete' | 'country') => {
        if (type === 'athlete') setSelectedAthletes(prev => prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]);
        else setSelectedCountries(prev => prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]);
    };

    const processedProducts = useMemo(() => {
        let list = allProducts.filter(p => {
            const matchA = selectedAthletes.length === 0 || selectedAthletes.includes(p.athlete);
            const matchC = selectedCountries.length === 0 || selectedCountries.includes(p.country);
            return matchA && matchC;
        });
        if (sortOption === 'Price: Low-High') list.sort((a, b) => a.price - b.price);
        if (sortOption === 'Price: High-Low') list.sort((a, b) => b.price - a.price);
        return list;
    }, [selectedAthletes, selectedCountries, sortOption]);

    // وظيفة التنقل المحدثة لتطابق المسار في App.tsx
    const handleProductClick = (id: number) => {
        // هذا السطر هو الذي سيحول الرابط إلى /product/2
        navigate(`/product/${id}`);
    };

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Arial, sans-serif', padding: '0 48px' }}>
            {/* البانر */}
            <div style={{ width: '100%', height: '300px', margin: '20px 0', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000" alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* أدوات التحكم */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', position: 'relative', gap: '30px' }}>
                <button onClick={() => setShowFilters(!showFilters)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                    {showFilters ? 'Hide Filters ➖' : 'Show Filters ➕'}
                </button>
                <button onClick={() => setShowSort(!showSort)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                    Sort By {showSort ? '▴' : '▾'}
                </button>
                {showSort && (
                    <div style={{ position: 'absolute', top: '30px', background: '#fff', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 10 }}>
                        {['Featured', 'Price: Low-High', 'Price: High-Low'].map(opt => (
                            <div key={opt} onClick={() => { setSortOption(opt); setShowSort(false); }} style={{ padding: '8px', cursor: 'pointer' }}>{opt}</div>
                        ))}
                    </div>
                )}
            </div>

            {/* المحتوى الرئيسي */}
            <div style={{ display: 'flex', gap: '40px' }}>
                {showFilters && (
                    <aside style={{ width: '250px' }}>
                        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '15px' }}>
                            <div onClick={() => toggleSection('Athletes')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Athletes</div>
                            {openSections.Athletes && ['LeBron James', 'Erling Haaland', 'Caitlin Clark'].map(name => (
                                <div key={name} style={{ margin: '5px 0' }}><input type="checkbox" onChange={() => toggleFilter(name, 'athlete')} /> {name}</div>
                            ))}
                        </div>
                        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '15px', marginTop: '15px' }}>
                            <div onClick={() => toggleSection('Countries')} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Countries</div>
                            {openSections.Countries && ['USA', 'England'].map(c => (
                                <div key={c} style={{ margin: '5px 0' }}><input type="checkbox" onChange={() => toggleFilter(c, 'country')} /> {c}</div>
                            ))}
                        </div>
                    </aside>
                )}

                <main style={{ display: 'grid', gridTemplateColumns: showFilters ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)', gap: '20px', flexGrow: 1 }}>
                    {processedProducts.map((p) => (
                        <div key={p.id}
                             onClick={() => handleProductClick(p.id)}
                             style={{ cursor: 'pointer', border: '1px solid #eee', padding: '10px', transition: 'transform 0.2s' }}
                             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            <img src={p.image} alt={p.title} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
                            <h3 style={{ fontSize: '14px', margin: '10px 0' }}>{p.title}</h3>
                            <p style={{ color: '#757575', fontSize: '13px' }}>£{p.price}</p>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
}