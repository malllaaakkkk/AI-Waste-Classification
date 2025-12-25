import '../styles/globals.css';
import Image from 'next/image';
export const metadata = { title: 'Luxora Environmental', description: 'Luxora Environmental - نظام ذكي لإدارة النفايات وإعادة التدوير. اكسب النقاط من خلال إعادة التدوير واستبدلها بمكافآت قيمة.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <a 
                  href="/" 
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
                >
                  <Image 
                    src="/logo.jpeg" 
                    alt="Luxora Environmental Logo" 
                    width={50} 
                    height={50}
                    className="object-contain rounded-lg"
                    priority
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Luxora
                  </span>
                </a>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <a 
                  href="/" 
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  الرئيسية
                </a>
                <a 
                  href="/bins" 
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  الحاويات
                </a>
                <a 
                  href="/rewards" 
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  المكافآت
                </a>
                <a 
                  href="/redeem" 
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  استرداد
                </a>
                <a 
                  href="/wallet" 
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  المحفظة
                </a>
                <a 
                  href="/admin/dashboard" 
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  الإدارة
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="/login" 
                  className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  تسجيل الدخول
                </a>
                <a 
                  href="/register" 
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  تسجيل
                </a>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © 2024 Luxora Environmental. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-500 mt-2 text-sm">
                Luxora Environmental - Building a cleaner future together
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}