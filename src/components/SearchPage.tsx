import { useSearchParams } from 'react-router-dom';

function SearchPage() {
    // قراءة الـ Query Parameters من الرابط (مثال: ?q=jordan)
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    return (
        <div style={{
            backgroundColor: '#111111',
            minHeight: '100vh',
            color: '#ffffff',
            padding: '40px 48px',
            fontFamily: 'Helvetica, Arial, sans-serif'
        }}>
            {/* عنوان البحث المقارب لتصميم نايكي الرسمي */}
            <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '24px' }}>
                Search Results for: <span style={{ fontWeight: 700 }}>"{query}"</span>
            </h2>

            {/* منطقة عرض المنتجات (هنا مستقبلاً سيتم عمل ماب للمنتجات القادمة من الباك إند) */}
            <div style={{
                border: '1px dashed #333333',
                borderRadius: '8px',
                padding: '60px',
                textAlign: 'center',
                color: '#666666',
                marginTop: '40px'
            }}>
                <p style={{ fontSize: '18px', margin: 0 }}>
                    [Frontend Ready] Here the products related to "{query}" will be displayed after connecting to the API.
                </p>
            </div>
        </div>
    );
}

export default SearchPage;