import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Timeline from '../components/Timeline';
import WorldMap from '../components/WorldMap';

// Import data
import journeyData from '../content/journey.json';
import resumeData from '../content/resume.json';

export default function Home() {
  const { personal } = resumeData;

  return (
    <div style={{ padding: '2rem 0' }}>
      {/* Hero Section */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '4rem', marginBottom: '6rem' }}>
        <div style={{ 
          width: '150px', 
          height: '150px', 
          borderRadius: '50%', 
          overflow: 'hidden',
          border: '4px solid var(--card-border)',
          marginBottom: '2rem'
        }}>
          <Image 
            src="/images/avatar.png" 
            alt={personal.name}
            width={150} 
            height={150} 
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{personal.name}</h1>
        <h2 className="text-muted" style={{ fontSize: '1.2rem', fontWeight: '400', marginBottom: '2rem' }}>
          Capital Markets • Risk Management • Research • ML
        </h2>
        
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
          <a href="https://github.com/rohandattatreya" target="_blank" rel="noopener noreferrer" className="text-muted"><FaGithub /></a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted"><FaLinkedin /></a>
          {/* Add more social links as needed */}
        </div>
      </section>

      {/* Who Am I Section */}
      <section className="mb-4">
        <h3 className="section-title">Who am I?</h3>
        <p style={{ fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.8' }}>
          {personal.summary}
        </p>
      </section>

      {/* What I Believe In Section */}
      <section className="mb-4">
        <h3 className="section-title">What I believe in</h3>
        <div className="card text-center" style={{ padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Data-driven decision making.</h2>
          <p className="text-muted">Building robust financial tools and models.</p>
        </div>
      </section>

      {/* Outside Work */}
      <section className="mb-4">
        <h3 className="section-title">Outside work?</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          In my spare time I enjoy reading, exploring new technologies, and traveling. 
          I plan to continue exploring the world and experiencing different cultures.
        </p>
        <WorldMap />
      </section>

      {/* My Journey */}
      <section className="mb-4">
        <h3 className="section-title">My journey.</h3>
        <Timeline data={journeyData} />
      </section>
    </div>
  );
}
