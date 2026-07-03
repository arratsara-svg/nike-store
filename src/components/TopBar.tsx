import { useState, useEffect, useRef } from 'react';
import { SiJordan } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();
    const [showHelpMenu, setShowHelpMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // إغلاق القائمة تلقائياً إذا ضغط المستخدم في أي مكان خارجها
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowHelpMenu(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const helpLinks = [
        "Bestelstatus",
        "Verzending en levering",
        "Retourzendingen",
        "Maattabellen",
        "Neem contact met ons op",
        "Privacybeleid",
        "Verkoopvoorwaarden",
        "Gebruiksvoorwaarden",
        "Stuur ons feedback"
    ];

    return (
        <div style={{
            backgroundColor: '#000000',
            color: '#ffffff',
            padding: '12px 48px',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: 700,
            fontFamily: 'Helvetica, Arial, sans-serif',
            position: 'relative',
            zIndex: 100 // 👈 تم تعديله ليكون أقل من واجهة البحث (99999) لضمان تغطيتها بالكامل للـ TopBar
        }}>
            {/* الأيقونات الاحترافية على اليسار */}
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                <SiJordan size={18} style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg"
                    alt="Converse"
                    style={{ height: '14px', width: 'auto', filter: 'invert(1)', cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                />
            </div>

            {/* الروابط اليمينية */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '11px' }}>
                <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/Zoek')} // التوجيه لصفحة الخرائط
                >
                    Zoek een store
                </span>
                <span style={{ color: '#333333' }}>|</span>

                {/* الحاوية الخاصة بـ Help والقائمة المنسدلة السوداء */}
                <div ref={menuRef} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                    <span
                        style={{
                            cursor: 'pointer',
                            color: showHelpMenu ? '#888888' : '#ffffff',
                            transition: 'color 0.2s',
                            padding: '4px 0'
                        }}
                        onClick={() => setShowHelpMenu(!showHelpMenu)}
                    >
                        Help
                    </span>

                    {/* القائمة المنسدلة السوداء الفاخرة */}
                    {showHelpMenu && (
                        <div style={{
                            position: 'absolute',
                            top: '28px',
                            right: '-10px',
                            backgroundColor: '#111111', // خلفية سوداء داكنة متناسقة
                            minWidth: '240px',
                            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.5)', // ظل داكن ليبرز القائمة
                            borderRadius: '0 0 8px 8px',
                            border: '1px solid #222222', // إطار خفيف جداً لتحديد الصندوق عن الخلفية
                            padding: '24px',
                            zIndex: 999, // 👈 بقيت أعلى من محتوى الصفحة العادي وأقل من واجهة البحث العظمى
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            fontWeight: 500
                        }}>
                            {/* العنوان الداخلي */}
                            <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 4px 0', color: '#ffffff' }}>Help</h3>

                            {/* الروابط باللون الرمادي وتضيء بالأبيض عند التحويم */}
                            {helpLinks.map((link, index) => (
                                <span
                                    key={index}
                                    style={{
                                        color: '#aaaaaa', // رمادي ناعم مريح للعين
                                        fontSize: '13px',
                                        cursor: 'pointer',
                                        transition: 'color 0.2s',
                                        whiteSpace: 'nowrap'
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} // يضيء بالأبيض الصافي
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#aaaaaa')}
                                    onClick={() => setShowHelpMenu(false)}
                                >
                                    {link}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <span style={{ color: '#333333' }}>|</span>

                <span
                    style={{ cursor: 'pointer', color: '#ffffff' }}
                    onClick={() => navigate('/Join')}
                >
                    Join Us
                </span>
                <span style={{ color: '#333333' }}>|</span>

                <span
                    style={{ cursor: 'pointer', color: '#ffffff' }}
                    onClick={() => navigate('/login')}
                >
                    Log in
                </span>
            </div>
        </div>
    );
}

export default TopBar;