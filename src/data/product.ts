// تعريف واجهة المنتج (Interface)
export interface Product {
    id: string;
    title: string;
    price: string;
    description: string;
    images: string[];
}

// إنشاء المصفوفة بشكل صحيح مع تحديد النوع
export const productsData: Record<string, Product> = {};

for (let i = 1; i <= 20; i++) {
    productsData[i.toString()] = {
        id: i.toString(),
        title: `Nike Mercurial Model ${i}`,
        price: `£${(150 + i * 5).toFixed(2)}`,
        description: `This is the high-performance model number ${i}, designed for professional athletes.`,
        images: [
            `https://picsum.photos/seed/${i}/600/600`, // رابط صور مستقر
            `https://picsum.photos/seed/${i + 20}/600/600`,
            `https://picsum.photos/seed/${i + 40}/600/600`
        ]
    };
}