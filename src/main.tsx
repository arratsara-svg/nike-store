import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// 1. استيراد BrowserRouter من المكتبة
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* 2. تغليف الـ App هنا هو الحل السحري لكل المشاكل */}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)