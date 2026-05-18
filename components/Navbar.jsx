'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Books', path: '/books' },
    { name: 'Newsletter', path: '/newsletter' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="nav-brand">
          <span style={{ fontSize: '1.5rem' }}>🧑‍💻</span> Rohan Dattatreya
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`nav-link ${pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
