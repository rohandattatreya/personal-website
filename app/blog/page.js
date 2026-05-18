import Link from 'next/link';
import { getAllPosts } from '../../lib/mdx';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div style={{ padding: '2rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginTop: '2rem', marginBottom: '3rem' }}>Blog</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{ padding: '2rem', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--accent-color)' }}>{post.meta.title}</h2>
                <span className="text-muted" style={{ fontSize: '0.9rem', fontFamily: 'JetBrains Mono, monospace' }}>
                  {post.meta.date}
                </span>
              </div>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                {post.meta.excerpt}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {post.meta.tags?.map((tag) => (
                  <span key={tag} className="text-muted" style={{ 
                    fontSize: '0.8rem', 
                    padding: '0.2rem 0.5rem', 
                    borderRadius: '4px',
                    border: '1px solid var(--card-border)'
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
