'use client';

import { useEffect, useRef } from 'react';

export default function StockTicker() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Check if the script is already injected
    if (containerRef.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
        { proName: 'FOREXCOM:NSXUSD', title: 'Nasdaq 100' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR/USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'BTC/USD' },
        { proName: 'BITSTAMP:ETHUSD', title: 'ETH/USD' },
        { description: 'VIX', proName: 'CBOE:VIX' },
        { description: 'Gold', proName: 'OANDA:XAUUSD' },
        { description: 'Crude Oil', proName: 'TVC:USOIL' },
        { description: 'Russell 2000', proName: 'RUSSELL:RUT' },
        { description: 'Dow Jones', proName: 'DJ:DJI' }
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en'
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="ticker-wrap" style={{ height: '46px', overflow: 'hidden' }}>
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}
