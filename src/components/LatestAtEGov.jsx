import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import rawData from '../data/latestItems.json';

const CATEGORIES = [
  { id: 'all',             label: "All" },
  { id: 'whats-new',       label: "What's New" },
  { id: 'articles',        label: 'Articles' },
  { id: 'whitepapers',     label: 'Whitepapers' },
  { id: 'case-studies',    label: 'Case Studies' },
  { id: 'strategy-papers', label: 'Strategy Papers' },
  { id: 'news-media',      label: 'News & Media' },
];

const LatestAtEGov = () => {
  const [allItems]           = useState(rawData);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery]         = useState('');

  // Simulate async data fetch on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setFiltered(allItems);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [allItems]);

  const applyFilters = useCallback(
    (category, query) => {
      setLoading(true);
      const timer = setTimeout(() => {
        let result = allItems;
        if (category !== 'all') {
          result = result.filter(item => item.category === category);
        }
        if (query.trim()) {
          const q = query.toLowerCase();
          result = result.filter(
            item =>
              item.title.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q) ||
              item.tags.some(t => t.toLowerCase().includes(q))
          );
        }
        setFiltered(result);
        setLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    },
    [allItems]
  );

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    applyFilters(catId, searchQuery);
  };

  const handleSearchChange = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    applyFilters(activeCategory, q);
  };

  return (
    <section className="latest-section" id="latest">
      <div className="container">
        <div className="section-header">
          <div className="row align-items-end g-3">
            <div className="col-lg-6">
              <h2 className="section-title">Latest at <span>eGov</span></h2>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end">
              <div className="search-wrap w-100" style={{ maxWidth: '420px' }}>
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search articles, whitepapers, case studies..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  aria-label="Search latest content"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="category-tabs" role="tablist" aria-label="Content categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {!loading && (
          <p style={{ color: 'var(--egov-text-light)', fontSize: '14px', marginBottom: '20px' }}>
            {filtered.length === 0
              ? 'No results'
              : `Showing ${filtered.length} result${filtered.length !== 1 ? 's' : ''}`}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        )}

        {loading && (
          <div className="loading-wrap">
            <div className="egov-spinner" role="status" aria-label="Loading content" />
            <p className="loading-text">Loading content, please wait…</p>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔎</div>
            <h5>No results found</h5>
            <p>
              We couldn't find any content matching{' '}
              {searchQuery ? <strong>"{searchQuery}"</strong> : 'your filters'}.
              <br />
              Try a different keyword or browse a different category.
            </p>
            <button
              className="btn-egov-primary mt-3"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                applyFilters('all', '');
              }}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="row g-4">
            {filtered.map((item, i) => (
              <div className={`col-12 col-sm-6 col-lg-4 fade-in-up`} key={item.id} style={{ animationDelay: `${i * 0.06}s` }}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="text-center mt-5">
            <a href="#" className="btn-egov-outline" style={{ padding: '10px 15px', fontSize: '15px',background:'#4bb5c3',borderRadius:'50px',color:'#fff',border:'1px solid #4bb5c3' }}>
              See All Resources
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestAtEGov;
