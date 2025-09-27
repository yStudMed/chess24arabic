
import "./globals.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'موقع Chess24Arabic هو موقع رياضي إخباري إلكتروني لمتابعي لعبة الشطرنج العربية والعالمية، يوفر لك العديد من الخدمات المهمة مثل: الأخبار اليومية المتعلقة بالشطرنج. نتائج وملخصات البطولات والمباريات. الجداول الخاصة بأهم البطولات العالمية والإقليمية. معلومات عن اللاعبين وترتيبهم وأبرز إنجازاتهم. وغيرها من الخدمات المتنوعة.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header/>
          <div className="content">
            <div className="page-container">
              <section className="upper-ad"></section>
              <section>
                {children}
              </section>
            </div>
            <div className="ads"></div>
          </div>
          <Footer/>
        </Container>
      </body>
    </html>
  );
}
