export default function Newsletter() {
  return (
    <div style={{ padding: '2rem 0', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Newsletter</h1>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
        I write weekly about Capital Markets, quantitative research, software engineering, and my personal journey.
      </p>

      <div className="card" style={{ padding: '3rem 2rem', backgroundColor: 'var(--card-bg)' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Subscribe to my Substack</h2>
        <p className="text-muted" style={{ marginBottom: '2rem' }}>
          Get new posts delivered directly to your inbox.
        </p>
        
        {/* Placeholder for Substack embed iframe */}
        <div style={{ 
          border: '1px dashed var(--card-border)', 
          padding: '2rem', 
          borderRadius: '8px',
          backgroundColor: 'rgba(0,0,0,0.2)'
        }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>
            [Substack Embed Placeholder]
          </p>
          <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            To embed your Substack, paste your embed code here in `app/newsletter/page.js`.
          </p>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block',
              padding: '0.8rem 1.5rem',
              backgroundColor: 'var(--accent-color)',
              color: '#fff',
              borderRadius: '4px',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Visit Substack Archive
          </a>
        </div>
      </div>
    </div>
  );
}
