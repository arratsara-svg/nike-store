import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // استيراد الـ useNavigate للتنقل

// مكون مخصص للروابط الداخلية للقائمة المنسدلة ليعطي تأثير هوفر ناعم
function DropdownLink({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                color: isHovered ? '#ffffff' : '#999999',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                display: 'block',
                marginBottom: '12px'
            }}
        >
            {children}
        </a>
    );
}

export default function Navbar() {
    const navigate = useNavigate(); // تعريف دالة التنقل

    // حالات التحكم بظهور جميع القوائم المنسدلة عند الهوفر
    const [isNieuwHovered, setIsNieuwHovered] = useState(false);
    const [isHerenHovered, setIsHerenHovered] = useState(false);
    const [isDamesHovered, setIsDamesHovered] = useState(false);
    const [isKidsHovered, setIsKidsHovered] = useState(false);
    const [isSportHovered, setIsSportHovered] = useState(false);
    const [isSkimsHovered, setIsSkimsHovered] = useState(false);

    // حالات البحث
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // الكلمات المفتاحية الأكثر بحثاً
    const popularSearches = [
        "challenger", "nike challenger", "p6000", "football boots",
        "air force 1", "air max 95", "air max", "jordan"
    ];

    // دالة معالجة البحث عند الضغط على Enter
    const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim() !== '') {
            setIsSearchActive(false); // إغلاق واجهة البحث
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`); // الانتقال لصفحة النتائج
        }
    };

    // دالة البحث عند الضغط على الكلمات الأكثر بحثاً
    const handlePopularTermClick = (term: string) => {
        setIsSearchActive(false);
        setSearchQuery(term);
        navigate(`/search?q=${encodeURIComponent(term)}`);
    };

    // دالة مساعدة لإغلاق جميع القوائم المفتوحة
    const closeAllMenus = () => {
        setIsNieuwHovered(false);
        setIsHerenHovered(false);
        setIsDamesHovered(false);
        setIsKidsHovered(false);
        setIsSportHovered(false);
        setIsSkimsHovered(false);
    };

    return (
        <>
            <div
                onMouseLeave={closeAllMenus}
                style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}
            >
                {/* البار الرئيسي للـ Navbar */}
                <nav style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 48px',
                    backgroundColor: '#111111',
                    boxSizing: 'border-box',
                    height: '60px'
                }}>

                    {/* 1. شعار نايكي */}
                    <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                            alt="Nike Logo"
                            style={{ height: '22px', width: 'auto', filter: 'invert(1)', display: 'block' }}
                        />
                    </div>

                    {/* 2. القوائم العلوية الكاملة */}
                    <ul style={{
                        display: 'flex', listStyle: 'none', gap: '28px', margin: 0, padding: 0,
                        fontWeight: 700, fontSize: '16px', color: '#ffffff', height: '100%', alignItems: 'center'
                    }}>
                        <li onMouseEnter={() => { closeAllMenus(); setIsNieuwHovered(true); }} style={{ cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center', borderBottom: isNieuwHovered ? '2px solid #ffffff' : '2px solid transparent', transition: 'border-color 0.15s ease' }}>Nieuw</li>
                        <li onMouseEnter={() => { closeAllMenus(); setIsHerenHovered(true); }} style={{ cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center', borderBottom: isHerenHovered ? '2px solid #ffffff' : '2px solid transparent', transition: 'border-color 0.15s ease' }}>Heren</li>
                        <li onMouseEnter={() => { closeAllMenus(); setIsDamesHovered(true); }} style={{ cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center', borderBottom: isDamesHovered ? '2px solid #ffffff' : '2px solid transparent', transition: 'border-color 0.15s ease' }}>Dames</li>
                        <li onMouseEnter={() => { closeAllMenus(); setIsKidsHovered(true); }} style={{ cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center', borderBottom: isKidsHovered ? '2px solid #ffffff' : '2px solid transparent', transition: 'border-color 0.15s ease' }}>Kids</li>
                        <li onMouseEnter={() => { closeAllMenus(); setIsSportHovered(true); }} style={{ cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center', borderBottom: isSportHovered ? '2px solid #ffffff' : '2px solid transparent', transition: 'border-color 0.15s ease' }}>Sport</li>
                        <li onMouseEnter={() => { closeAllMenus(); setIsSkimsHovered(true); }} style={{ cursor: 'pointer', height: '100%', display: 'flex', alignItems: 'center', borderBottom: isSkimsHovered ? '2px solid #ffffff' : '2px solid transparent', transition: 'border-color 0.15s ease' }}>NikeSKIMS</li>
                    </ul>

                    {/* 3. أدوات اليمين */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                        <div onClick={() => setIsSearchActive(true)} style={{ position: 'relative', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <span style={{ position: 'absolute', left: '14px', color: '#cccccc', fontSize: '14px' }}>🔍</span>
                            <input
                                type="text"
                                placeholder="Zoek"
                                readOnly
                                value={searchQuery}
                                style={{
                                    backgroundColor: '#222222', border: 'none', padding: '10px 16px 10px 42px',
                                    borderRadius: '100px', fontSize: '14px', outline: 'none', width: '160px',
                                    color: '#ffffff', fontWeight: 500, cursor: 'pointer'
                                }}
                            />
                        </div>

                        {/* أيقونة المفضلة */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ cursor: 'pointer' }} onClick={() => navigate('/favourites')}>
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>

                        {/* أيقونة السلة/الحقيبة المعدلة */}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/cart')} // 👈 عند الضغط، يتم التوجيه لصفحة السلة الموضحة في image_bf4f7c.png
                        >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </div>
                </nav>

                {/* 1. قائمة Nieuw */}
                <div style={{
                    position: 'absolute', top: '60px', left: 0, width: '100%', backgroundColor: '#111111',
                    boxShadow: '0px 20px 30px rgba(0,0,0,0.5)', padding: '40px 180px 60px 180px', boxSizing: 'border-box',
                    display: isNieuwHovered ? 'grid' : 'none', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', borderTop: '1px solid #222222', zIndex: 99
                }}
                     onMouseEnter={() => setIsNieuwHovered(true)}
                     onMouseLeave={() => setIsNieuwHovered(false)}
                >
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Nieuw</h5>
                        <DropdownLink>Nieuwe items</DropdownLink>
                        <DropdownLink>Bestsellers</DropdownLink>
                        <DropdownLink>Introductiekalender SNKRS</DropdownLink>
                        <DropdownLink>Nieuw: tenues van nationale elftallen voor 2026</DropdownLink>
                        <DropdownLink>Zomerkleding</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Hoogtepunten</h5>
                        <DropdownLink>Jordan x Brasil Futebol</DropdownLink>
                        <DropdownLink>De thuisbasis van Air Max</DropdownLink>
                        <DropdownLink>Het beste van Jordan</DropdownLink>
                        <DropdownLink>Slam collectie</DropdownLink>
                        <DropdownLink>Voetbal: nieuwe Mercurial</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Trending</h5>
                        <DropdownLink>Hybride training</DropdownLink>
                        <DropdownLink>Marathonschoenen</DropdownLink>
                        <DropdownLink>Elite voetbalschoenen</DropdownLink>
                        <DropdownLink>Sportswear</DropdownLink>
                        <DropdownLink>Hardloopkleding</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Merken</h5>
                        <DropdownLink>Nike Sportswear</DropdownLink>
                        <DropdownLink>ACG: All Conditions Gear</DropdownLink>
                        <DropdownLink>Jordan</DropdownLink>
                        <DropdownLink>Kobe</DropdownLink>
                        <DropdownLink>NOCTA</DropdownLink>
                    </div>
                </div>

                {/* 2. قائمة Heren */}
                <div style={{
                    position: 'absolute', top: '60px', left: 0, width: '100%', backgroundColor: '#111111',
                    boxShadow: '0px 20px 30px rgba(0,0,0,0.5)', padding: '40px 100px 60px 100px', boxSizing: 'border-box',
                    display: isHerenHovered ? 'grid' : 'none', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px', borderTop: '1px solid #222222', zIndex: 99
                }}
                     onMouseEnter={() => setIsHerenHovered(true)}
                     onMouseLeave={() => setIsHerenHovered(false)}
                >
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Hoogtepunten</h5>
                        <DropdownLink>Nieuwe items</DropdownLink>
                        <DropdownLink>Bestsellers</DropdownLink>
                        <DropdownLink>Streetwear</DropdownLink>
                        <DropdownLink>Look of Football</DropdownLink>
                        <DropdownLink>Tennis Lifestyle</DropdownLink>
                        <DropdownLink>Zomerkleding</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Schoenen</h5>
                        <DropdownLink>Alle schoenen</DropdownLink>
                        <DropdownLink>Lifestyle</DropdownLink>
                        <DropdownLink>Jordan</DropdownLink>
                        <DropdownLink>Hardlopen</DropdownLink>
                        <DropdownLink>Voetbal</DropdownLink>
                        <DropdownLink>Basketbal</DropdownLink>
                        <DropdownLink>Fitness en training</DropdownLink>
                        <DropdownLink>Skateboarden</DropdownLink>
                        <DropdownLink>Custom schoenen</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Kleding</h5>
                        <DropdownLink>Alle kleding</DropdownLink>
                        <DropdownLink>Hoodies en sweatshirts</DropdownLink>
                        <DropdownLink>Tops en T-shirts</DropdownLink>
                        <DropdownLink>Tenues en jerseys</DropdownLink>
                        <DropdownLink>Shorts</DropdownLink>
                        <DropdownLink>Broeken en tights</DropdownLink>
                        <DropdownLink>Trainingspakken</DropdownLink>
                        <DropdownLink>Jassen</DropdownLink>
                        <DropdownLink>Accessoires</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Sport</h5>
                        <DropdownLink>Hardlopen</DropdownLink>
                        <DropdownLink>Voetbal</DropdownLink>
                        <DropdownLink>Basketbal</DropdownLink>
                        <DropdownLink>Fitness en training</DropdownLink>
                        <DropdownLink>Tennis</DropdownLink>
                        <DropdownLink>Skateboarden</DropdownLink>
                        <DropdownLink>Golf</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Merken</h5>
                        <DropdownLink>Nike Sportswear</DropdownLink>
                        <DropdownLink>ACG: All Conditions Gear</DropdownLink>
                        <DropdownLink>Jordan</DropdownLink>
                        <DropdownLink>Kobe</DropdownLink>
                        <DropdownLink>NOCTA</DropdownLink>
                    </div>
                </div>

                {/* 3. قائمة Dames */}
                <div style={{
                    position: 'absolute', top: '60px', left: 0, width: '100%', backgroundColor: '#111111',
                    boxShadow: '0px 20px 30px rgba(0,0,0,0.5)', padding: '40px 100px 60px 100px', boxSizing: 'border-box',
                    display: isDamesHovered ? 'grid' : 'none', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px', borderTop: '1px solid #222222', zIndex: 99
                }}
                     onMouseEnter={() => setIsDamesHovered(true)}
                     onMouseLeave={() => setIsDamesHovered(false)}
                >
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Hoogtepunten</h5>
                        <DropdownLink>Nieuwe items</DropdownLink>
                        <DropdownLink>Bestsellers</DropdownLink>
                        <DropdownLink>Style By: Moon Shoe</DropdownLink>
                        <DropdownLink>Kledingpacks voor het seizoen</DropdownLink>
                        <DropdownLink>Zomerkleding</DropdownLink>
                        <DropdownLink>Tennis Lifestyle</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Schoenen</h5>
                        <DropdownLink>Alle schoenen</DropdownLink>
                        <DropdownLink>Lifestyle</DropdownLink>
                        <DropdownLink>Jordan</DropdownLink>
                        <DropdownLink>Hardlopen</DropdownLink>
                        <DropdownLink>Fitness en training</DropdownLink>
                        <DropdownLink>Voetbal</DropdownLink>
                        <DropdownLink>Custom schoenen</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Kleding</h5>
                        <DropdownLink>Alle kleding</DropdownLink>
                        <DropdownLink>Hoodies en sweatshirts</DropdownLink>
                        <DropdownLink>Tops en T-shirts</DropdownLink>
                        <DropdownLink>Shorts</DropdownLink>
                        <DropdownLink>Leggings</DropdownLink>
                        <DropdownLink>Broeken</DropdownLink>
                        <DropdownLink>Matchende sets</DropdownLink>
                        <DropdownLink>Jassen</DropdownLink>
                        <DropdownLink>Sport-bh's</DropdownLink>
                        <DropdownLink>Accessoires</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Sport</h5>
                        <DropdownLink>Fitness en training</DropdownLink>
                        <DropdownLink>Hardlopen</DropdownLink>
                        <DropdownLink>Voetbal</DropdownLink>
                        <DropdownLink>Basketbal</DropdownLink>
                        <DropdownLink>Tennis</DropdownLink>
                        <DropdownLink>Skateboarden</DropdownLink>
                        <DropdownLink>Golf</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Merken</h5>
                        <DropdownLink>NikeSKIMS</DropdownLink>
                        <DropdownLink>Nike Sportswear</DropdownLink>
                        <DropdownLink>ACG: All Conditions Gear</DropdownLink>
                        <DropdownLink>Jordan</DropdownLink>
                        <DropdownLink>Kobe</DropdownLink>
                    </div>
                </div>

                {/* 4. قائمة Kids */}
                <div style={{
                    position: 'absolute', top: '60px', left: 0, width: '100%', backgroundColor: '#111111',
                    boxShadow: '0px 20px 30px rgba(0,0,0,0.5)', padding: '40px 100px 60px 100px', boxSizing: 'border-box',
                    display: isKidsHovered ? 'grid' : 'none', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px', borderTop: '1px solid #222222', zIndex: 99
                }}
                     onMouseEnter={() => setIsKidsHovered(true)}
                     onMouseLeave={() => setIsKidsHovered(false)}
                >
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Hoogtepunten</h5>
                        <DropdownLink>Nieuwe items</DropdownLink>
                        <DropdownLink>Bestsellers</DropdownLink>
                        <DropdownLink>Teen Destination</DropdownLink>
                        <DropdownLink>Nike x LEGO® collectie</DropdownLink>
                        <DropdownLink>Zomerkleding</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Schoenen</h5>
                        <DropdownLink>Alle schoenen</DropdownLink>
                        <DropdownLink>Lifestyle</DropdownLink>
                        <DropdownLink>Jordan</DropdownLink>
                        <DropdownLink>Voetbal</DropdownLink>
                        <DropdownLink>Hardlopen</DropdownLink>
                        <DropdownLink>Basketbal</DropdownLink>
                        <DropdownLink>Lichamelijke opvoeding</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Kleding</h5>
                        <DropdownLink>Alle kleding</DropdownLink>
                        <DropdownLink>Hoodies en sweatshirts</DropdownLink>
                        <DropdownLink>Tops en T-shirts</DropdownLink>
                        <DropdownLink>Tenues en shirts</DropdownLink>
                        <DropdownLink>Trainingspakken</DropdownLink>
                        <DropdownLink>Shorts</DropdownLink>
                        <DropdownLink>Broeken en leggings</DropdownLink>
                        <DropdownLink>Matchende sets</DropdownLink>
                        <DropdownLink>Jassen</DropdownLink>
                        <DropdownLink>Accessoires</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Kids per leeftijd</h5>
                        <DropdownLink>Tieners (13-17 jaar)</DropdownLink>
                        <DropdownLink>Kids (7-12 jaar)</DropdownLink>
                        <DropdownLink>Kleuters (3-7 jaar)</DropdownLink>
                        <DropdownLink>Baby's en peuters (0-3 jaar)</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Sport</h5>
                        <DropdownLink>Hardlopen</DropdownLink>
                        <DropdownLink>Voetbal</DropdownLink>
                        <DropdownLink>Basketbal</DropdownLink>
                        <DropdownLink>Lichamelijke opvoeding</DropdownLink>
                        <DropdownLink>Skateboarden</DropdownLink>
                    </div>
                </div>

                {/* 5. قائمة Sport */}
                <div style={{
                    position: 'absolute', top: '60px', left: 0, width: '100%', backgroundColor: '#111111',
                    boxShadow: '0px 20px 30px rgba(0,0,0,0.5)', padding: '40px 100px 60px 100px', boxSizing: 'border-box',
                    display: isSportHovered ? 'grid' : 'none', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px', borderTop: '1px solid #222222', zIndex: 99
                }}
                     onMouseEnter={() => setIsSportHovered(true)}
                     onMouseLeave={() => setIsSportHovered(false)}
                >
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Hoogtepunten</h5>
                        <DropdownLink>Nieuwe items</DropdownLink>
                        <DropdownLink>Bestsellers</DropdownLink>
                        <DropdownLink>Jordan Basketball</DropdownLink>
                        <DropdownLink>Nieuw: tenues van nationale elftallen voor 2026</DropdownLink>
                        <DropdownLink>Hardloopschoenen: Pegasus 42</DropdownLink>
                        <DropdownLink>Slam collectie</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Hardlopen</h5>
                        <DropdownLink>Alle hardloopgear</DropdownLink>
                        <DropdownLink>Schoenen</DropdownLink>
                        <DropdownLink>Kleding</DropdownLink>
                        <DropdownLink>Accessoires</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight :700, margin: '0 0 20px 0' }}>Voetbal</h5>
                        <DropdownLink>Alles van voetbal</DropdownLink>
                        <DropdownLink>Schoenen</DropdownLink>
                        <DropdownLink>Kleding</DropdownLink>
                        <DropdownLink>Accessoires</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Fitness en training</h5>
                        <DropdownLink>Alle fitness en training</DropdownLink>
                        <DropdownLink>Schoenen</DropdownLink>
                        <DropdownLink>Kleding</DropdownLink>
                        <DropdownLink>Accessoires</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Meer sport</h5>
                        <DropdownLink>Alle sporten</DropdownLink>
                        <DropdownLink>Basketbal</DropdownLink>
                        <DropdownLink>Outdoor</DropdownLink>
                        <DropdownLink>Tennis</DropdownLink>
                        <DropdownLink>Nike SB</DropdownLink>
                        <DropdownLink>Golf</DropdownLink>
                    </div>
                </div>

                {/* 6. قائمة NikeSKIMS */}
                <div style={{
                    position: 'absolute', top: '60px', left: 0, width: '100%', backgroundColor: '#111111',
                    boxShadow: '0px 20px 30px rgba(0,0,0,0.5)', padding: '40px 180px 60px 180px', boxSizing: 'border-box',
                    display: isSkimsHovered ? 'grid' : 'none', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', borderTop: '1px solid #222222', zIndex: 99
                }}
                     onMouseEnter={() => setIsSkimsHovered(true)}
                     onMouseLeave={() => setIsSkimsHovered(false)}
                >
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>NikeSKIMS Guides</h5>
                        <DropdownLink>NikeSKIMS lookbook</DropdownLink>
                        <DropdownLink>NikeSKIMS bh-gids</DropdownLink>
                        <DropdownLink>NikeSKIMS collectiewijzer</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Kleding</h5>
                        <DropdownLink>Alle kleding</DropdownLink>
                        <DropdownLink>Bh's</DropdownLink>
                        <DropdownLink>Tops en tanktops</DropdownLink>
                        <DropdownLink>Leggings</DropdownLink>
                        <DropdownLink>Shorts</DropdownLink>
                        <DropdownLink>Schoenen</DropdownLink>
                        <DropdownLink>Accessoires</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Collecties</h5>
                        <DropdownLink>Alle collecties</DropdownLink>
                        <DropdownLink>Shine</DropdownLink>
                        <DropdownLink>Matte</DropdownLink>
                        <DropdownLink>Ribbed Seamless</DropdownLink>
                        <DropdownLink>Stretch Knit</DropdownLink>
                        <DropdownLink>Weightless</DropdownLink>
                        <DropdownLink>Airy</DropdownLink>
                    </div>
                    <div>
                        <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, margin: '0 0 20px 0' }}>Shop op kleur</h5>
                        <DropdownLink>Obsidian</DropdownLink>
                        <DropdownLink>Dark Sepia</DropdownLink>
                        <DropdownLink>Phoenix</DropdownLink>
                        <DropdownLink>Himalayan</DropdownLink>
                        <DropdownLink>Dune</DropdownLink>
                    </div>
                </div>
            </div>

            {/* ========================================================= */}
            {/* واجهة البحث الكاملة التفاعلية المستقلة والمُصححة والمكتملة بنسبة 100% */}
            {/* ========================================================= */}
            {isSearchActive && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: '#111111', zIndex: 99999, padding: '40px 48px',
                    boxSizing: 'border-box', fontFamily: 'Helvetica, Arial, sans-serif'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', width: '100%' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" style={{ height: '22px', filter: 'invert(1)' }} />

                        {/* حقل البحث النشط الفعال */}
                        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', maxWidth: '700px', margin: '0 auto' }}>
                            <span style={{ position: 'absolute', left: '18px', color: '#aaaaaa', fontSize: '16px' }}>🔍</span>
                            <input
                                type="text"
                                placeholder="Search"
                                autoFocus
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchSubmit} // التقاط الضغط على الـ Enter
                                style={{
                                    width: '100%', backgroundColor: '#222222', border: 'none',
                                    padding: '16px 16px 16px 54px', borderRadius: '100px', fontSize: '18px',
                                    color: '#ffffff', outline: 'none', fontWeight: 500
                                }}
                            />
                        </div>

                        <button
                            onClick={() => { setIsSearchActive(false); setSearchQuery(''); }}
                            style={{
                                backgroundColor: 'transparent', border: 'none', color: '#ffffff',
                                fontSize: '16px', fontWeight: 500, cursor: 'pointer', padding: '10px 20px'
                            }}
                        >
                            Cancel
                        </button>
                    </div>

                    {/* المقترحات الأكثر شعبية */}
                    <div style={{ maxWidth: '700px', margin: '40px auto 0 auto', textAlign: 'left' }}>
                        <h4 style={{ color: '#666666', fontSize: '14px', marginBottom: '16px', fontWeight: 600 }}>Popular Search Terms</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {popularSearches.map((term, index) => (
                                <span
                                    key={index}
                                    onClick={() => handlePopularTermClick(term)}
                                    style={{
                                        backgroundColor: '#222222', color: '#ffffff', padding: '8px 20px',
                                        borderRadius: '100px', fontSize: '14px', fontWeight: 500,
                                        cursor: 'pointer', transition: 'background-color 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333333'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#222222'}
                                >
                                    {term}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}