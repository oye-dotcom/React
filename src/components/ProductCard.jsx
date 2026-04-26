import React from 'react';

const categoryBadgeMap = {
  'whats-new':       { label: "What's New",      className: 'badge-whats-new' },
  'articles':        { label: 'Article',          className: 'badge-articles' },
  'whitepapers':     { label: 'Whitepaper',       className: 'badge-whitepapers' },
  'case-studies':    { label: 'Case Study',       className: 'badge-case-studies' },
  'strategy-papers': { label: 'Strategy Paper',   className: 'badge-strategy-papers' },
  'news-media':      { label: 'News & Media',     className: 'badge-news-media' },
};

const ProductCard = ({ item }) => {
  const badge = categoryBadgeMap[item.category] || { label: item.category, className: 'badge-articles' };

  return (
    <div className="product-card h-100">
      <div className="product-card-img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="product-card-body">
        <span className={`card-category-badge ${badge.className}`}>{badge.label}</span>
        <h3 className="product-card-title">{item.title}</h3>
        <p className="product-card-desc">{item.description}</p>
        <div className="card-meta">
          <span>📅 {item.date}</span>
          <span>⏱ {item.readTime}</span>
          <a href="#" className="read-more-link ms-auto">
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
