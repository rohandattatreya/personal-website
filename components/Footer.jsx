import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumeData from '../content/resume.json';

export default function Footer() {
  const { personal } = resumeData;

  return (
    <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--card-border)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <h4 style={{ margin: 0 }}>Let's stay in touch.</h4>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
          <a href="https://github.com/rohandattatreya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          {/* Add more icons as needed */}
        </div>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          © {new Date().getFullYear()} Rohan Dattatreya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
