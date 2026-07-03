import React, { useState } from 'react';

// مكون فرعي مخصص للرابط ليعطي تأثير الـ Hover الاحترافي لموقع نايكي
function FooterLink({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                color: isHovered ? '#ffffff' : '#7e7e7e',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                display: 'block',
                marginBottom: '12px'
            }}
        >
            {children}
        </a>
    );
}

function Footer() {
    return (
        <footer style={{ backgroundColor: '#000000', color: '#ffffff', padding: '40px 48px 24px 48px', fontFamily: 'Helvetica, Arial, sans-serif', borderTop: '1px solid #111111' }}>

            {/* القوائم الأربعة الرئيسية */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '60px' }}>

                {/* العمود الأول: Bronnen */}
                <div>
                    <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.5px' }}>Bronnen</h4>
                    <FooterLink>Cadeaubonnen</FooterLink>
                    <FooterLink>Zakelijke cadeaubonnen</FooterLink>
                    <FooterLink>Zoek een store</FooterLink>
                    <FooterLink>Nike Journal</FooterLink>
                    <FooterLink>Word member</FooterLink>
                    <FooterLink>Feedback</FooterLink>
                    <FooterLink>Promotiecodes</FooterLink>
                    <FooterLink>Productadvies</FooterLink>
                    <FooterLink>Running Shoe Finder</FooterLink>
                </div>

                {/* العمود الثاني: Help */}
                <div>
                    <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.5px' }}>Help</h4>
                    <FooterLink>Help</FooterLink>
                    <FooterLink>Bestelstatus</FooterLink>
                    <FooterLink>Verzending en levering</FooterLink>
                    <FooterLink>Retourzendingen</FooterLink>
                    <FooterLink>Betaalmethodes</FooterLink>
                    <FooterLink>Contact</FooterLink>
                    <FooterLink>Reviews</FooterLink>
                    <FooterLink>Hulp bij Nike promotiecodes</FooterLink>
                </div>

                {/* العمود الثالث: Bedrijf */}
                <div>
                    <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.5px' }}>Bedrijf</h4>
                    <FooterLink>Over Nike</FooterLink>
                    <FooterLink>Nieuws</FooterLink>
                    <FooterLink>Werken bij Nike</FooterLink>
                    <FooterLink>Investeerders</FooterLink>
                    <FooterLink>Duurzaamheid</FooterLink>
                    <FooterLink>Toegankelijkheid</FooterLink>
                    <FooterLink>Missie</FooterLink>
                    <FooterLink>Nike Coaching</FooterLink>
                    <FooterLink>Een Kwestie Melden</FooterLink>
                </div>

                {/* العمود الرابع: Communitykortingen والبلد */}
                <div style={{ position: 'relative' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.5px' }}>Communitykortingen</h4>
                    <FooterLink>Student</FooterLink>
                    <FooterLink>Docent</FooterLink>
                    <FooterLink>Eerstehulpverleners</FooterLink>
                    <FooterLink>Zorgprofessionals</FooterLink>

                    {/* مؤشر الدولة بأعلى اليمين متل الصورة */}
                    <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#ffffff', cursor: 'pointer' }}>
                        <span>🌐</span> Nederland
                    </div>
                </div>

            </div>

            {/* البار السفلي للحقوق والخصوصية */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', borderTop: '1px solid #111111', paddingTop: '24px' }}>

                {/* اسم الشركة وسنة 2026 الحالية */}
                <div style={{ fontSize: '11px', color: '#7e7e7e' }}>
                    © 2026 Nike, Inc. Alle rechten voorbehouden
                </div>

                {/* روابط السياسات والشروط */}
                <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                    <a href="#" style={{ color: '#7e7e7e', textDecoration: 'none', fontSize: '11px' }}>Handleidingen ▾</a>
                    <a href="#" style={{ color: '#7e7e7e', textDecoration: 'none', fontSize: '11px' }}>Gebruiksvoorwaarden</a>
                    <a href="#" style={{ color: '#7e7e7e', textDecoration: 'none', fontSize: '11px' }}>Verkoopvoorwaarden</a>
                    <a href="#" style={{ color: '#7e7e7e', textDecoration: 'none', fontSize: '11px' }}>Bedrijfsgegevens</a>
                    <a href="#" style={{ color: '#7e7e7e', textDecoration: 'none', fontSize: '11px' }}>Privacy- en cookiebeleid</a>
                    <a href="#" style={{ color: '#7e7e7e', textDecoration: 'none', fontSize: '11px' }}>Privacy- en cookie-instellingen</a>
                </div>

            </div>

        </footer>
    );
}

export default Footer;