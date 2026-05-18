import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StockTicker from '../components/StockTicker';

export const metadata = {
  title: 'Rohan Dattatreya | Personal Website',
  description: 'Capital Markets, Risk Management, Research & Machine Learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <StockTicker />
        <Navbar />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
