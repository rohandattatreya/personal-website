import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '../../content/projects.json';

// In a real app with SSG, we would fetch repo data in page component or server component
// Since this is static export, we'll just mock the repo display for now or fetch client-side.
// Next.js App Router Server Components allow fetching data at build time for static export.

async function getGithubRepos(repoNames) {
  // Mock data for static export since we don't have a real GitHub token here
  // and fetching unauthenticated might rate-limit during build.
  // We'll just return placeholders for now.
  return repoNames.map(name => ({
    name: name,
    description: `Placeholder description for GitHub repo ${name}.`,
    html_url: `https://github.com/rohandattatreya/${name}`,
    language: 'JavaScript',
    stargazers_count: Math.floor(Math.random() * 100),
    forks_count: Math.floor(Math.random() * 50)
  }));
}

export default async function Projects() {
  const repos = await getGithubRepos(projectsData.repos);

  return (
    <div style={{ padding: '2rem 0', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ marginTop: '2rem', marginBottom: '3rem' }}>Projects</h1>

      {/* Featured Projects */}
      <section className="mb-4">
        <h2 className="section-title">Featured Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {projectsData.featured.map((project, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{project.name}</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{project.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} style={{ 
                      background: 'rgba(255, 255, 255, 0.1)', 
                      padding: '0.2rem 0.8rem', 
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem' }}>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaGithub /> <span style={{ fontSize: '0.9rem' }}>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaExternalLinkAlt /> <span style={{ fontSize: '0.9rem' }}>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Repositories */}
      <section className="mb-4">
        <h2 className="section-title">GitHub Repositories</h2>
        <p className="text-muted" style={{ marginBottom: '2rem' }}>
          Select repositories fetched from GitHub. You can configure which ones to show in <code>content/projects.json</code>.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {repos.map((repo, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {repo.name}
                  </a>
                  <FaGithub style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }} />
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                  {repo.description}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ 
                    width: '10px', height: '10px', borderRadius: '50%', 
                    backgroundColor: repo.language === 'JavaScript' ? '#f1e05a' : repo.language === 'Python' ? '#3572A5' : 'var(--accent-color)' 
                  }}></span>
                  {repo.language || 'Unknown'}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
