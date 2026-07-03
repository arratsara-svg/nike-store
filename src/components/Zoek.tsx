import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { BiSliderAlt } from 'react-icons/bi';

export default function Stores() {
    const [searchQuery, setSearchQuery] = useState('');

    // بيانات الفروع المأخوذة من صورة image_bca042.jpg
    const storesList = [
        {
            name: "Nike Store Amsterdam (Partnered)",
            address: "Kalverstraat 185-187",
            city: "AMSTERDAM, North Holland, 1012 XC, NL",
            status: "Open",
            closeTime: "Sluit om 20:00",
            mapUrl: "https://maps.google.com/maps?q=Nike%20Store%20Amsterdam%20Kalverstraat&t=&z=13&ie=UTF8&iwloc=&output=embed"
        },
        {
            name: "Nike Factory Store Amsterdam Osdorp",
            address: "58-60 Zuidermolenweg",
            city: "AMSTERDAM, North Holland, 1069 CG, NL",
            status: "Open",
            closeTime: "Sluit om 18:00",
            mapUrl: "https://maps.google.com/maps?q=Nike%20Factory%20Store%20Amsterdam%20Osdorp&t=&z=13&ie=UTF8&iwloc=&output=embed"
        }
    ];

    const [activeMap, setActiveMap] = useState(storesList[0].mapUrl);

    return (
        <div style={{ display: 'flex', width: '100%', height: 'calc(100vh - 40px)', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#111111' }}>

            {/* القائمة الجانبية اليسارية للبحث والفروع */}
            <div style={{ width: '320px', minWidth: '320px', borderRight: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', boxSizing: 'border-box' }}>

                {/* قسم البحث العلوي */}
                <div style={{ padding: '24px 16px', borderBottom: '1px solid #e5e5e5' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 500, margin: '0 0 16px 0' }}>Zoek een Nike Store</h2>

                    {/* حقل الإدخال */}
                    <div style={{ position: 'relative', marginBottom: '16px' }}>
                        <IoSearchOutline size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#757575' }} />
                        <input
                            type="text"
                            placeholder="Zoek locatie"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ width: '100%', padding: '12px 12px 12px 40px', fontSize: '14px', border: '1px solid #cccccc', borderRadius: '8px', boxSizing: 'border-box', outline: 'none' }}
                        />
                    </div>

                    {/* الفلتر والعدد */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', color: '#757575' }}>15 stores bij jou in de buurt</span>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#ffffff', border: '1px solid #cccccc', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}>
                            Filter <BiSliderAlt size={16} />
                        </button>
                    </div>
                </div>

                {/* قائمة المتاجر القابلة للتمرير */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
                    {storesList.map((store, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveMap(store.mapUrl)}
                            style={{ padding: '16px', borderBottom: '1px solid #f5f5f5', cursor: 'pointer', transition: 'background-color 0.2s', backgroundColor: activeMap === store.mapUrl ? '#f9f9f9' : '#ffffff' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeMap === store.mapUrl ? '#f9f9f9' : '#ffffff'}
                        >
                            <h3 style={{ fontSize: '14px', fontWeight: 600, margin: '0 0 4px 0' }}>{store.name}</h3>
                            <p style={{ fontSize: '13px', color: '#757575', margin: '0 0 2px 0' }}>{store.address}</p>
                            <p style={{ fontSize: '13px', color: '#757575', margin: '0 0 8px 0' }}>{store.city}</p>
                            <p style={{ fontSize: '13px', margin: 0 }}>
                                <span style={{ color: '#008000', fontWeight: 600 }}>{store.status}</span>
                                <span style={{ color: '#757575' }}> • {store.closeTime}</span>
                            </p>
                        </div>
                    ))}

                    <div style={{ padding: '16px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Bekijk alle stores</span>
                    </div>
                </div>
            </div>

            {/* قسم الخريطة التفاعلية الحية والشغالة 100% */}
            <div style={{ flex: 1, height: '100%', backgroundColor: '#e5e5e5' }}>
                <iframe
                    title="Nike Stores Map"
                    src={activeMap}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                />
            </div>

        </div>
    );
}