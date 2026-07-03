import { useRef } from 'react';

export default function Join() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
            sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    // بيانات كروت الأعضاء (القسم الثالث) حسب الصورة image_bbb879.jpg
    const memberBenefits = [
        {
            tag: "★ Membership",
            subTag: "► Member Product",
            title: "Jouw exclusieve toegang",
            description: "Producten voor members",
            btnText: "Shop",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600"
        },
        {
            tag: "★ Membership",
            subTag: "► Member Rewards",
            title: "Ons bedankje aan jou",
            description: "Beloningen voor members",
            btnText: "Geniet",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600"
        },
        {
            tag: "★ Membership",
            subTag: "► Sport & Wellness",
            title: "Bewegen op jouw niveau",
            description: "Sport en welजijn",
            btnText: "Beweeg",
            img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600"
        }
    ];

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#111111', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', width: '100%', minHeight: '100vh' }}>

            {/* 1️⃣ القسم الأول: فيديو الهيرو الأساسي مع النص والزر الدائري */}
            <div style={{ width: '100%', height: '70vh', position: 'relative', overflow: 'hidden' }}>
                <video
                    src="/videos/hero-video3.mp4"
                    autoPlay loop muted playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.15)' }} />

                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '90%', color: '#ffffff', zIndex: 2 }}>
                    <h1 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '64px', fontWeight: 900, margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        MEMBERS KRIJGEN MEER
                    </h1>
                    <p style={{ fontSize: '16px', fontWeight: 500, margin: '0 0 24px 0' }}>
                        Bewegen, shoppen, customizen en beleven doe je met het beste van Nike.
                    </p>
                    <button style={{ backgroundColor: '#ffffff', color: '#111111', border: 'none', padding: '12px 28px', borderRadius: '24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                        Meld je aan
                    </button>
                </div>
            </div>

            {/* 2️⃣ القسم الثاني: كروت المزايا الدوارة (Voordelen voor members) */}
            <div style={{ padding: '60px 48px 20px 48px', maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 500, margin: 0 }}>Voordelen voor members</h2>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button onClick={() => scrollSlider('left')} style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f5f5f5', border: 'none', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>◀</button>
                        <button onClick={() => scrollSlider('right')} style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f5f5f5', border: 'none', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>▶</button>
                    </div>
                </div>

                <div ref={sliderRef} style={{ display: 'flex', gap: '16px', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: '20px' }}>
                    {memberBenefits.map((benefit, i) => (
                        <div key={i} style={{ flex: '0 0 calc(33.333% - 11px)', minWidth: '320px', position: 'relative', aspectRatio: '4/5', borderRadius: '4px', overflow: 'hidden' }}>
                            <img src={benefit.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: '#e54d26', color: '#ffffff', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                <span>{benefit.tag}</span>
                                <span>{benefit.subTag}</span>
                            </div>

                            <div style={{ position: 'absolute', bottom: '32px', left: '32px', color: '#ffffff', textAlign: 'left' }}>
                                <p style={{ fontSize: '13px', fontWeight: 500, margin: '0 0 4px 0' }}>{benefit.description}</p>
                                <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 20px 0', lineHeight: 1.2 }}>{benefit.title}</h3>
                                <button style={{ backgroundColor: '#ffffff', color: '#111111', border: 'none', padding: '10px 24px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                                    {benefit.btnText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3️⃣ القسم الثالث: أيقونات المزايا الإضافية (Als member krijg je ook) */}
            <div style={{ padding: '60px 48px', maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 500, marginBottom: '60px' }}>Als member krijg je ook:</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e54d26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                            <line x1="3" y1="3" x2="21" y2="21" stroke="#e54d26" strokeWidth="2"></line>
                        </svg>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '24px 0 8px 0' }}>Retourneren zonder bon</h3>
                        <p style={{ fontSize: '14px', color: '#555555', maxWidth: '340px', margin: 0, lineHeight: 1.5 }}>
                            Gebruik de Nike app om producten te retourneren of te ruilen zonder bon.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e54d26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '24px 0 8px 0' }}>Memberevents</h3>
                        <p style={{ fontSize: '14px', color: '#555555', maxWidth: '340px', margin: 0, lineHeight: 1.5 }}>
                            Doe samen met je community mee aan live evenementen, exclusief voor members.
                        </p>
                    </div>
                </div>
            </div>

            {/* 4️⃣ القسم الرابع (image_bc9142.png): قسم البار البرتقالي وتطبيقات نايكي المتصلة */}
            <div style={{ borderTop: '1px solid #eeeeee', paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#ffffff' }}>
                <div style={{ backgroundColor: '#e54d26', color: '#ffffff', padding: '12px 0', display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '60px' }}>
                    <div style={{ display: 'flex', gap: '60px', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' }}>
                        {[...Array(6)].map((_, i) => (
                            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>✔</span> Nike Membership
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 500, marginBottom: '50px', textAlign: 'left' }}>Verbonden door membership</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '24px', textAlign: 'center' }}>
                        {/* App 1 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src="https://www.nike.com/favicon.ico" alt="" style={{ width: '48px', height: '48px', objectFit: 'contain', marginBottom: '16px', border: '1px solid #eee', padding: '4px', borderRadius: '8px' }} />
                            <h4 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 8px 0' }}>Nike app</h4>
                            <p style={{ fontSize: '13px', color: '#555555', margin: '0 0 16px 0', height: '54px', lineHeight: 1.4 }}>Blijf dagelijks op de hoogte van het beste van Nike, helemaal afgestemd op jou.</p>
                            <span style={{ fontSize: '14px', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Ontdek</span>
                        </div>
                        {/* App 2 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: '#111111', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 'bold', marginBottom: '16px' }}>NRC</div>
                            <h4 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 8px 0' }}>Nike Run Club</h4>
                            <p style={{ fontSize: '13px', color: '#555555', margin: '0 0 16px 0', height: '54px', lineHeight: 1.4 }}>Loop met Nike in de Nike Run Club app.</p>
                            <span style={{ fontSize: '14px', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Ontdek</span>
                        </div>
                        {/* App 3 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', border: '1px solid #111', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111', fontSize: '10px', fontWeight: 'bold', marginBottom: '16px' }}>NTC</div>
                            <h4 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 8px 0' }}>Nike Training Club</h4>
                            <p style={{ fontSize: '13px', color: '#555555', margin: '0 0 16px 0', height: '54px', lineHeight: 1.4 }}>Train met de besten in de Nike Training Club app.</p>
                            <span style={{ fontSize: '14px', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Ontdek</span>
                        </div>
                        {/* App 4 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '48px', height: '48px', backgroundColor: '#e54d26', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '9px', fontWeight: 'bold', marginBottom: '16px' }}>SNKRS</div>
                            <h4 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 8px 0' }}>SNKRS</h4>
                            <p style={{ fontSize: '13px', color: '#555555', margin: '0 0 16px 0', height: '54px', lineHeight: 1.4 }}>Ontdek de nieuwste producten in de SNKRS app.</p>
                            <span style={{ fontSize: '14px', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Ontdek</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5️⃣ القسم الخامس والأخير: الفيديو الرابع الخاص بك حصرياً بعد قسم التطبيقات وبكامل العرض الفاخر */}
            <div style={{ width: '100%', height: '70vh', backgroundColor: '#000000', overflow: 'hidden', paddingBottom: '40px' }}>
                <video
                    src="/videos/hero-video4.mp4"
                    autoPlay loop muted playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

        </div>
    );
}