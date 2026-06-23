import React, { useState } from 'react';

export default function SearchBar({ onSearch, placeholder = 'Search...', filters = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, selectedFilter);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
    onSearch(searchTerm, value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
      />
      {filters.length > 0 && (
        <select
          className="search-input"
          style={{ flex: '0 0 150px' }}
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">All Filters</option>
          {filters.map((filter) => (
            <option key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
