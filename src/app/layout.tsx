
import "./globals.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
            {children}
          <Footer/>
        </Container>
      </body>
    </html>
  );
}
