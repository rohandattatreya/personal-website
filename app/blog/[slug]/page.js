import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs } from '../../../lib/mdx';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

// Custom components for MDX
const components = {
  h1: (props) => <h1 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }} {...props} />,
  h2: (props) => <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
  h3: (props) => <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }} {...props} />,
  p: (props) => <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }} {...props} />,
  a: (props) => <a style={{ color: 'var(--accent-color)', textDecoration: 'underline' }} {...props} />,
  ul: (props) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }} {...props} />,
  ol: (props) => <ol style={{ marginBottom: '1.5rem', paddingLeft: '2rem' }} {...props} />,
  li: (props) => <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }} {...props} />,
  pre: (props) => <pre style={{ padding: '1.5rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--card-border)', overflowX: 'auto', marginBottom: '2rem' }} {...props} />,
  code: (props) => <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem' }} {...props} />,
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <article style={{ padding: '2rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/blog" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--text-muted)' }}>
        ← Back to all posts
      </Link>
      
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{post.meta.title}</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <time className="text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            {post.meta.date}
          </time>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {post.meta.tags?.map((tag) => (
              <span key={tag} style={{ 
                fontSize: '0.8rem', 
                padding: '0.2rem 0.5rem', 
                borderRadius: '4px',
                background: 'var(--accent-color)',
                color: '#fff'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mdx-content">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
