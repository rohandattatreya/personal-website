import resumeData from '../../content/resume.json';

export default function Resume() {
  return (
    <div style={{ padding: '2rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
        <h1 style={{ margin: 0 }}>Resume</h1>
        <a 
          href="/resume.pdf" 
          className="card"
          style={{ 
            padding: '0.5rem 1rem', 
            display: 'inline-block', 
            fontSize: '0.9rem',
            color: 'var(--accent-color)'
          }}
        >
          Download PDF
        </a>
      </div>

      <section className="mb-4">
        <h2 className="section-title" style={{ marginTop: '2rem' }}>Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--accent-color)' }}>{exp.title}</h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>{exp.company}</div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <div>{exp.startDate} - {exp.endDate}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <p style={{ marginBottom: '1rem' }}>{exp.description}</p>
              {exp.bullets && exp.bullets.length > 0 && (
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="section-title">Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--accent-color)' }}>{edu.degree}</h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>{edu.institution}</div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <div>{edu.startDate} - {edu.endDate}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
              <p style={{ margin: 0 }}>{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="section-title">Skills</h2>
        <div className="card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Languages</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {resumeData.skills.languages.map((skill, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Frameworks</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {resumeData.skills.frameworks.map((skill, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Tools</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {resumeData.skills.tools.map((skill, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Domains</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {resumeData.skills.domains.map((skill, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
