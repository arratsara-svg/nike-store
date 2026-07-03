import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- تعريف الأنواع (TypeScript Interfaces) ---
interface DropdownItem {
    name: string;
    subText?: string;
    img?: string;
    icon?: string;
}

interface DropdownData {
    Boots: DropdownItem[];
    Nations: DropdownItem[];
    Athletes: DropdownItem[];
    Clubs: DropdownItem[];
}
interface TeamCard {
    id: number;
    teamName: string;
    img: string;
}

const DROPDOWN_CONTENT: DropdownData = {
    Boots: [
        { name: 'Superfly', subText: 'Fast Sprints', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=150' },
        { name: 'Vapor', subText: 'Quick Cuts', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=150' },
        { name: 'Phantom' },
        { name: 'Tiempo' },
    ],
    Nations: [
        { name: 'Brazil', icon: '🇧🇷' },
        { name: 'Canada', icon: '🇨🇦' },
        { name: 'England', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
        { name: 'France', icon: '🇫🇷' },
        { name: 'Netherlands', icon: '🇳🇱' },
        { name: 'Norway', icon: '🇳🇴' },
        { name: 'USA', icon: '🇺🇸' },
    ],
    Athletes: [
        { name: 'Erling Haaland', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=80' },
        { name: 'Alexia Putellas', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80' },
        { name: 'Cristiano Ronaldo', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=80' },
        { name: 'Kylian Mbappé', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=80' },
        { name: 'Cole Palmer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80' },
    ],
    Clubs: [
        { name: 'F.C. Barcelona', icon: '🔵🔴' },
        { name: 'Paris Saint-Germain', icon: '🔵🗼' },
        { name: 'Chelsea F.C.', icon: '🔵🦁' },
        { name: 'Inter Milan', icon: '⚫🔵' },
        { name: 'Tottenham Hotspur', icon: '⚪🐓' },
        { name: 'Atlético Madrid', icon: '🔴⚪' },
    ]
};

const TEAM_CARDS: TeamCard[] = [
    { id: 1, teamName: 'Norway', img: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600' },
    { id: 2, teamName: 'USA', img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600' },
    { id: 3, teamName: 'Uruguay', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600' },
    { id: 4, teamName: 'England', img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600' },
    { id: 5, teamName: 'France', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600' },
];

export default function Watch() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<keyof DropdownData | null>(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsAtTop(true);
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            } else {
                setIsAtTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#ffffff', fontFamily: 'Arial, sans-serif', paddingTop: '120px' }}>

            {/* 1. الـ Navbar الذكي */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                backgroundColor: '#000000',
                paddingTop: isAtTop ? '24px' : '10px',
                paddingBottom: isAtTop ? '16px' : '10px',
                borderBottom: isAtTop ? '1px solid #111111' : '1px solid #222222',
                boxShadow: isAtTop ? 'none' : '0 10px 30px rgba(0,0,0,0.8)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxHeight: isAtTop ? '80px' : '0px',
                    opacity: isAtTop ? 1 : 0,
                    overflow: 'hidden',
                    transform: isAtTop ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.3s ease',
                    marginBottom: isAtTop ? '16px' : '0px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg height="22" width="55" viewBox="0 0 24 24" fill="#ff007f">
                            <path d="M21 6.5c-2.3 1.7-6.7 4.5-11 6.8C6.3 15.3 3.7 16.5 2 17c-.5.1-.9-.1-.6-.5.7-1.1 4.3-5.8 8.4-10.3 3.3-3.6 6.8-5.7 9.2-5.7.9 0 1.2.4 1 1-.5 1.6-1.5 3.6-2 5z"/>
                        </svg>
                        <span style={{ color: '#ff007f', fontSize: '26px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px', textTransform: 'lowercase', marginTop: '2px' }}>
                            nike football
                        </span>
                    </div>
                </div>

                <nav style={{ display: 'flex', justifyContent: 'center', gap: '28px' }}>
                    {(Object.keys(DROPDOWN_CONTENT) as Array<keyof DropdownData>).map((tab) => (
                        <div
                            key={tab}
                            onMouseEnter={() => setActiveTab(tab)}
                            onMouseLeave={() => setActiveTab(null)}
                            style={{ position: 'relative', cursor: 'pointer' }}
                        >
                            <span style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: activeTab === tab ? '#ff007f' : '#ffffff',
                                transition: 'color 0.2s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {tab}
                            </span>
                            {activeTab === tab && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#111111',
                                    borderRadius: '12px',
                                    padding: '16px',
                                    minWidth: '220px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                                    border: '1px solid #222222',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    zIndex: 110,
                                    marginTop: '10px'
                                }}>
                                    {DROPDOWN_CONTENT[tab].map((item, index) => (
                                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 8px', borderRadius: '8px', cursor: 'pointer' }}
                                             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1c1c1c'}
                                             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                            {item.img && <img src={item.img} alt="" style={{ width: '32px', height: '32px', borderRadius: tab === 'Athletes' ? '50%' : '4px', objectFit: 'cover' }} />}
                                            {item.icon && <span style={{ fontSize: '20px' }}>{item.icon}</span>}
                                            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                                <span style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff' }}>{item.name}</span>
                                                {item.subText && <span style={{ fontSize: '11px', color: '#888888' }}>{item.subText}</span>}
                                            </div>
                                        </div>
                                    ))}
                                    <div style={{ borderTop: '1px solid #222222', paddingTop: '8px', textAlign: 'center' }}>
                                        <span onClick={() => navigate('/shop')} style={{ fontSize: '13px', fontWeight: '500', color: '#ff007f', cursor: 'pointer' }}>Shop All</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <span onClick={() => navigate('/shop')} style={{ fontSize: '14px', fontWeight: '600', color: '#ff007f', cursor: 'pointer', textTransform: 'uppercase' }}>Shop All</span>
                </nav>
            </div>

            {/* 2. قسم الفيديو الرئيسي */}
            <div style={{ width: '100%', height: '75vh', position: 'relative', overflow: 'hidden', backgroundColor: '#050505' }}>
                <video
                    src="/videos/hero-video1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '120px', background: 'linear-gradient(transparent, #000000)' }} />
            </div>

            {/* 3. قسم الـ Banner النصي */}
            <div style={{ textAlign: 'center', padding: '50px 24px', backgroundColor: '#000000' }}>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Nike Football</p>
                <h1 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '72px', fontWeight: '900', letterSpacing: '-2px', margin: '0 0 12px 0', textTransform: 'uppercase' }}>RIP THE SCRIPT</h1>
                <p style={{ fontSize: '16px', fontWeight: '400', color: '#cccccc', margin: '0 0 24px 0' }}>Alles draait om instinct.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                    <button onClick={() => navigate('/shop')} style={{ padding: '10px 24px', backgroundColor: '#ffffff', color: '#000000', border: 'none', borderRadius: '24px', fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}>Shop</button>

                </div>
            </div>

            {/* 4. قسم معرض الصور */}
            <div style={{ padding: '20px 48px 40px 48px', maxWidth: '1400px', margin: '0 auto', backgroundColor: '#000000' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '20px', letterSpacing: '-0.5px', textTransform: 'capitalize' }}>The Latest</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden', backgroundImage: 'url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div style={{ position: 'absolute', bottom: '40px', left: '40px', zIndex: 2 }}>
                            <p style={{ fontSize: '14px', margin: '0 0 6px 0', color: '#ffffff' }}>Collecties van nationale elftallen</p>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 14px 0', color: '#ffffff' }}>Sta achter je team</h3>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={() => navigate('/shop')} style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '8px 22px', borderRadius: '20px', fontWeight: '600', cursor: 'pointer' }}>Shop</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden', backgroundImage: 'url("https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div style={{ position: 'absolute', bottom: '40px', left: '40px', zIndex: 2 }}>
                            <p style={{ fontSize: '14px', margin: '0 0 6px 0', color: '#ffffff' }}>Look of Football</p>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 14px 0', color: '#ffffff' }}>Your game, your rules.</h3>
                            <button onClick={() => navigate('/shop')} style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '8px 22px', borderRadius: '20px', fontWeight: '600', cursor: 'pointer' }}>Shop</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. قسم الـ Slider */}
            <div style={{ padding: '40px 48px 20px 48px', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '500', margin: 0, letterSpacing: '-0.5px' }}>Rep Your Team</h2>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button onClick={() => scroll('left')} style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#111111', border: 'none', color: '#ffffff', fontSize: '18px', cursor: 'pointer' }}>◀</button>
                        <button onClick={() => scroll('right')} style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#111111', border: 'none', color: '#ffffff', fontSize: '18px', cursor: 'pointer' }}>▶</button>
                    </div>
                </div>
                <div ref={scrollContainerRef} style={{ display: 'flex', gap: '20px', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: '10px' }}>
                    {TEAM_CARDS.map((card) => (
                        <div key={card.id} style={{ flex: '0 0 calc(33.333% - 14px)', minWidth: '300px', scrollSnapAlign: 'start', position: 'relative', aspectRatio: '4/5', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}>
                            <img src={card.img} alt={card.teamName} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            <div style={{ position: 'absolute', bottom: '28px', left: '28px' }}>
                                <button onClick={() => navigate('/shop')} style={{ padding: '8px 20px', backgroundColor: '#ffffff', color: '#000000', border: 'none', borderRadius: '20px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Shop {card.teamName}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 6. بنر النهاية */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 20px', backgroundColor: '#000000' }}>
                <h1 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '84px', fontWeight: '900', letterSpacing: '2px', margin: '0 0 8px 0', textTransform: 'uppercase' }}>RIP THE SCRIPT</h1>
                <p style={{ fontSize: '18px', fontWeight: '400', color: '#ffffff', margin: '0 0 24px 0', letterSpacing: '0.5px' }}>Instinct Over Everything</p>
                <button onClick={() => navigate('/shop')} style={{ padding: '12px 28px', backgroundColor: '#ffffff', color: '#000000', border: 'none', borderRadius: '24px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>Shop</button>
            </div>
        </div>
    );
}