import { useState } from 'react';
import { SiJordan } from 'react-icons/si';

export default function Login() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', email);
        // هنا يمكنك إضافة منطق إرسال البيانات للسيرفر لاحقاً
    };

    return (
        <div style={{
            backgroundColor: '#ffffff',
            minHeight: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#111111',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            padding: '40px 20px'
        }}>
            <div style={{ maxWidth: '400px', width: '100%', padding: '20px' }}>

                {/* الشعارات العلوية (Nike & Jordan) */}
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '32px' }}>
                    {/* شعار نايكي الرسمي SVG */}
                    <svg height="20" width="60" viewBox="0 0 24 24" fill="#111111">
                        <path d="M21 6.5c-2.3 1.7-6.7 4.5-11 6.8C6.3 15.3 3.7 16.5 2 17c-.5.1-.9-.1-.6-.5.7-1.1 4.3-5.8 8.4-10.3 3.3-3.6 6.8-5.7 9.2-5.7.9 0 1.2.4 1 1-.5 1.6-1.5 3.6-2 5z"/>
                    </svg>
                    {/* شعار جوردان */}
                    <SiJordan size={22} fill="#111111" />
                </div>

                {/* العناوين الأساسية */}
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: 500,
                    lineHeight: '1.2',
                    margin: '0 0 8px 0',
                    letterSpacing: '-0.5px'
                }}>
                    Enter your email address to become a member or log in.
                </h1>

                <p style={{ fontSize: '14px', color: '#111111', margin: '0 0 28px 0' }}>
                    The Netherlands <span style={{ color: '#7e7e7e', textDecoration: 'underline', cursor: 'pointer', marginLeft: '4px' }}>Change</span>
                </p>

                {/* نموذج الإدخال */}
                <form onSubmit={handleSubmit}>
                    <div style={{ position: 'relative', marginBottom: '24px' }}>
                        <input
                            type="email"
                            required
                            placeholder="Email address *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '16px',
                                fontSize: '16px',
                                border: '1px solid #7e7e7e',
                                borderRadius: '8px',
                                boxSizing: 'border-box',
                                outline: 'none',
                                backgroundColor: '#ffffff',
                                color: '#111111'
                            }}
                        />
                    </div>

                    {/* الشروط والأحكام */}
                    <p style={{ fontSize: '12px', color: '#7e7e7e', lineHeight: '1.6', margin: '0 0 32px 0' }}>
                        By continuing, you agree to the{' '}
                        <span style={{ color: '#111111', textDecoration: 'underline', cursor: 'pointer' }}>Terms of Use</span>{' '}
                        and confirm that you have read Nike's{' '}
                        <span style={{ color: '#111111', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>.
                    </p>

                    {/* زر الاستمرار المحاذي لليمين تماماً كالموقع الأصلي */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#111111',
                                color: '#ffffff',
                                border: 'none',
                                padding: '14px 28px',
                                borderRadius: '24px',
                                fontSize: '15px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#444444'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
                        >
                            Continue
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}