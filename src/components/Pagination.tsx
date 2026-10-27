interface PaginationProps {
  currentPage: number;
}

export default function Pagination({ currentPage }: PaginationProps) {
  const pages = [1, 2, 3, 10];
  return (
    <nav className="pagination">
      <div className="container">
        <button className="pagination-btn pagination-prev disabled">
          ← Previous
        </button>
        <div className="pagination-numbers">
          {pages.map((page) => (
            <button
              key={page}
              className={`pagination-num ${page === currentPage ? 'active' : ''} ${page === 10 ? 'ellipsis' : ''}`}
            >
              {page === 10 ? '...' : page}
            </button>
          ))}
        </div>
        <button className="pagination-btn pagination-next">
          Next →
        </button>
      </div>
    </nav>
  );
}