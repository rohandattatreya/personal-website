export default function Timeline({ data }) {
  return (
    <div style={{ marginTop: '2rem', position: 'relative' }}>
      <div style={{ 
        position: 'absolute', 
        left: '20px', 
        top: 0, 
        bottom: 0, 
        width: '2px', 
        backgroundColor: 'var(--card-border)' 
      }}></div>
      
      {data.map((item, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: '2rem', position: 'relative' }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            backgroundColor: 'var(--accent-color)',
            position: 'absolute',
            left: '15px',
            top: '5px'
          }}></div>
          
          <div style={{ marginLeft: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ 
                fontFamily: 'JetBrains Mono, monospace', 
                fontWeight: 'bold',
                color: 'var(--accent-color)'
              }}>{item.year}</span>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{item.event}</h4>
            </div>
            <p className="text-muted" style={{ margin: 0 }}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
