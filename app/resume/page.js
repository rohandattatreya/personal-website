import fs from 'node:fs';
import path from 'node:path';
import resumeData from '../../content/resume.json';

function formatDate(value) {
  if (!value) return '';
  if (/^\d{4}$/.test(value)) return value;
  if (/^\d{4}-\d{2}$/.test(value)) {
    const parsed = new Date(`${value}-01T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  return value;
}

function formatDateRange(startDate, endDate) {
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  if (start && end) return `${start} - ${end}`;
  return start || end || '';
}

function renderLabeledList(items) {
  return items.map((item, index) => {
    if (typeof item === 'string') {
      return <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>;
    }

    return (
      <li key={index} style={{ marginBottom: '0.5rem' }}>
        {item.name}
        {item.date ? (
          <span style={{ color: 'var(--text-muted)' }}> — {item.date}</span>
        ) : null}
      </li>
    );
  });
}

export default function Resume() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const hasResumePdf = fs.existsSync(path.join(process.cwd(), 'public', 'resume.pdf'));
  const resumePdfHref = `${basePath}/resume.pdf`;
  const skillSections = [
    { title: 'Modeling', items: resumeData.skills.modeling || [] },
    { title: 'Software Proficiency', items: resumeData.skills.software || [] },
    { title: 'Certifications', items: resumeData.skills.certifications || [] },
    { title: 'Professional Associations', items: resumeData.skills.associations || [] },
    { title: 'Languages', items: resumeData.skills.languages || [] }
  ].filter((section) => section.items.length > 0);

  return (
    <div style={{ padding: '2rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
        <h1 style={{ margin: 0 }}>Resume</h1>
        {hasResumePdf ? (
          <a
            href={resumePdfHref}
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
        ) : (
          <span
            className="card"
            style={{
              padding: '0.5rem 1rem',
              display: 'inline-block',
              fontSize: '0.9rem',
              color: 'var(--text-muted)'
            }}
          >
            PDF coming soon
          </span>
        )}
      </div>

      <section className="mb-4">
        <div className="card">
          <h2 className="section-title" style={{ marginTop: 0 }}>{resumeData.personal.name}</h2>
          <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-muted)' }}>{resumeData.personal.location}</p>
          <p style={{ margin: '0 0 0.5rem 0' }}>{resumeData.personal.phone}</p>
          <p style={{ margin: '0 0 0.5rem 0' }}>
            <a href={`mailto:${resumeData.personal.email}`} style={{ color: 'var(--accent-color)' }}>
              {resumeData.personal.email}
            </a>
          </p>
          <p style={{ margin: '0 0 1rem 0' }}>
            <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>
              {resumeData.personal.linkedin}
            </a>
          </p>
          <h3 style={{ marginBottom: '0.5rem' }}>Candidate Summary</h3>
          <p style={{ margin: 0 }}>{resumeData.personal.summary}</p>
        </div>
      </section>

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
                  <div>{formatDateRange(exp.startDate, exp.endDate)}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              {exp.description ? <p style={{ marginBottom: '1rem' }}>{exp.description}</p> : null}
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
                  <div>{edu.startDate || edu.endDate ? formatDateRange(edu.startDate, edu.endDate) : ''}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
              {edu.description ? <p style={{ margin: 0 }}>{edu.description}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="section-title">Skills & Certifications</h2>
        <div className="card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '2rem' }}>
            {skillSections.map((section) => (
              <div key={section.title}>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{section.title}</h4>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {renderLabeledList(section.items)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
