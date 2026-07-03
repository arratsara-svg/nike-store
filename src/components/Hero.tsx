import { useNavigate } from 'react-router-dom';

function Hero() {
    // 1. استدعاء دالة التنقل
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#000000', color: '#ffffff', width: '100%', fontFamily: 'Helvetica, Arial, sans-serif' }}>

            {/* 1. الفيديو العريض الأول */}
            <div style={{ width: '100%', height: '80vh', overflow: 'hidden', position: 'relative' }}>
                <video
                    src="/videos/hero-video1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* 2. قسم النصوص والأزرار بالمنتصف */}
            <div style={{ textAlign: 'center', padding: '56px 24px', backgroundColor: '#000000' }}>
                <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '6px', letterSpacing: '0.5px' }}>
                    Nike Football
                </p>
                <h1 style={{
                    fontSize: '76px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-3px',
                    margin: '0 0 12px 0',
                    fontFamily: '"Impact", "Arial Black", sans-serif'
                }}>
                    RIP THE SCRIPT
                </h1>
                <p style={{ fontSize: '16px', margin: '0 0 28px 0', fontWeight: 400, color: '#ffffff' }}>
                    Alles draait om instinct.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <button
                        onClick={() => navigate('/shop')}
                        style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '10px 26px', borderRadius: '24px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}
                    >
                        Shop
                    </button>
                    <button
                        onClick={() => navigate('/watch')}
                        style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '10px 22px 10px 26px', borderRadius: '24px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Watch <span style={{ fontSize: '10px' }}>▶</span>
                    </button>
                </div>
            </div>

            {/* 3. الفيديو العريض الثاني */}
            <div style={{ width: '100%', height: '80vh', overflow: 'hidden', position: 'relative' }}>
                <video
                    src="/videos/hero-video2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* الحاوية الرئيسية لأقسام الصور */}
            <div style={{ padding: '0 48px 40px 48px', backgroundColor: '#000000' }}>

                <h2 style={{ fontSize: '24px', fontWeight: 600, margin: '40px 0 24px 0', letterSpacing: '-0.5px' }}>
                    The Latest
                </h2>

                {/* [القسم الأول] */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundImage: 'url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div style={{ position: 'absolute', bottom: '40px', left: '40px', textAlign: 'left' }}>
                            <p style={{ fontSize: '14px', fontWeight: 500, margin: '0 0 8px 0' }}>Collecties van nationale elftallen</p>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px 0' }}>Sta achter je team</h3>
                            <p style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0' }}>Gear up voor de voetbalzomer</p>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button onClick={() => navigate('/shop')} style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Shop</button>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundImage: 'url("https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div style={{ position: 'absolute', bottom: '40px', left: '40px', textAlign: 'left' }}>
                            <p style={{ fontSize: '14px', fontWeight: 500, margin: '0 0 8px 0' }}>Look of Football</p>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px 0' }}>Your game, your rules.</h3>
                            <p style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0' }}>Een collectie voor wie elke dag goed in de wedstrijd zit.</p>
                            <button onClick={() => navigate('/shop')} style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Shop</button>
                        </div>
                    </div>
                </div>

                {/* [القسم الثاني] */}
                <div style={{ position: 'relative', width: '100%', height: '75vh', backgroundImage: 'url("https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1600")', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '12px' }}>
                    <div style={{ position: 'absolute', bottom: '40px', left: '40px', textAlign: 'left' }}>
                        <p style={{ fontSize: '14px', fontWeight: 500, margin: '0 0 8px 0' }}>Mercurial</p>
                        <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px 0' }}>Break 'Em</h3>
                        <p style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0' }}>Met de Merc ben je op je snelst. Je instinct doet de rest.</p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button onClick={() => navigate('/shop')} style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Shop</button>
                        </div>
                    </div>
                </div>

                {/* [القسم الثالث] */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundImage: 'url("https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div style={{ position: 'absolute', bottom: '40px', left: '40px', textAlign: 'left' }}>
                            <p style={{ fontSize: '14px', fontWeight: 500, margin: '0 0 8px 0' }}>Nike Football x LEGO® collectie</p>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px 0' }}>Grenzeloos spelen</h3>
                            <p style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0' }}>Klassiekers, maar dan opnieuw opgebouwd. Steen voor steen.</p>
                            <button onClick={() => navigate('/shop')} style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Shop</button>
                        </div>
                    </div>

                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundImage: 'url("https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div style={{ position: 'absolute', bottom: '40px', left: '40px', textAlign: 'left' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px 0' }}>Gear en accessoires</h3>
                            <p style={{ fontSize: '14px', fontWeight: 400, margin: '0 0 16px 0' }}>Essentials voor trainingen</p>
                            <button onClick={() => navigate('/shop')} style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Shop</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* البار الزهري */}
            <div style={{ width: '100%', backgroundColor: '#0a0a0a', padding: '36px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #1a1a1a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}>
                    <div style={{ border: '3px solid #ff007f', borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%', padding: '6px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#ff007f', fontWeight: 'bold', fontSize: '14px' }}>✔</span>
                    </div>
                    <span style={{ color: '#ff007f', fontSize: '32px', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-1px', fontFamily: '"Arial Black", Gadget, sans-serif' }}>nike football</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;