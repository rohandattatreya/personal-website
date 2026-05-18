export default function WorldMap() {
  // A generic world map embed using Google Maps. 
  // To highlight specific countries, one usually uses a custom Google My Maps embed,
  // but for a generic world view, a simple maps embed without query works.
  return (
    <div style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
      <iframe 
        width="100%" 
        height="400" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight="0" 
        marginWidth="0" 
        src="https://maps.google.com/maps?q=World&t=&z=2&ie=UTF8&iwloc=&output=embed"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
