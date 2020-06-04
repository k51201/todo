import React from 'react'

import './search-bar.css'

const SearchBar = () => {
  return (
    <input type="text"
      className="form-control search-input"
      placeholder="Napište pro vyhledávání"
    />
  )
}

export default SearchBar