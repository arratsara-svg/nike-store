import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ProductDetails from "./components/ProductDetails";
import Watch from "./components/watch";
import Login from "./components/Login";
import Join from "./components/Join";
import Zoek from "./components/Zoek";
import SearchPage from "./components/SearchPage";
import Cartpage from './components/Cartpage';
import FavouritesPage from './components/FavouritesPage';
function App() {
    const location = useLocation();

    // عدلنا الشرط: الآن فقط صفحة /watch هي التي ستخفي الهيدر والفوتر
    // تمت إزالة location.pathname.startsWith('/product/') لكي تظهر في صفحات المنتجات
    const isSpecialPage = location.pathname === '/watch';

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#000000', margin: 0 }}>
            {/* هذا الجزء سيظهر في جميع الصفحات ما عدا /watch */}
            {!isSpecialPage && (
                <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 9999 }}>
                    <TopBar />
                    <Navbar />
                </div>
            )}

            {/* الـ paddingTop يتغير بناءً على وجود الهيدر الثابت */}
            <main style={{ paddingTop: isSpecialPage ? '0px' : '96px' }}>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/watch" element={<Watch/>} />

                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Join" element={<Join />} />
                    <Route path="/Zoek" element={<Zoek />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/cart" element={<Cartpage />} />
                    <Route path="/favourites" element={<FavouritesPage/>} />
                </Routes>
            </main>

            {/* الفوتر سيظهر أيضاً في صفحة المنتج الآن */}
            {!isSpecialPage && <Footer />}
        </div>
    );
}

export default App;