import Image from 'next/image';
import booksData from '../../content/books.json';

const BookCard = ({ book }) => (
  <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
    <div style={{ 
      width: '80px', 
      height: '120px', 
      backgroundColor: 'var(--bg-color)', 
      border: '1px solid var(--card-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px'
    }}>
      {/* Fallback if no cover image is available */}
      <span style={{ fontSize: '2rem' }}>📚</span>
    </div>
    <div>
      <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent-color)' }}>{book.title}</h3>
      <p className="text-muted" style={{ margin: '0.5rem 0' }}>{book.author}</p>
      {book.rating && (
        <div style={{ color: '#fbbf24', letterSpacing: '2px' }}>
          {'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}
        </div>
      )}
    </div>
  </div>
);

export default function Books() {
  return (
    <div style={{ padding: '2rem 0', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ marginTop: '2rem', marginBottom: '3rem' }}>Books</h1>
      
      <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '3rem' }}>
        A collection of books I have read or plan to read.
      </p>

      <section className="mb-4">
        <h2 className="section-title">Currently Reading / To Read</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {booksData.toRead.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </section>

      <section className="mb-4" style={{ marginTop: '4rem' }}>
        <h2 className="section-title">Already Read</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {booksData.alreadyRead.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
