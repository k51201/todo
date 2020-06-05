import React, { Component } from 'react'

import './search-bar.css'

export default class SearchBar extends Component {
  state = {
    query: ''
  }

  clear = () => {
    const { onSearch } = this.props
    this.setState({ query: '' })
    onSearch('')
  }

  onTypeQuery = e => {
    const { onSearch } = this.props
    this.setState({ query: e.target.value })
    onSearch(e.target.value)
  }

  render() {
    const { query } = this.state
    return (
      <div className="d-flex input-group search-bar">
        <input type="text"
          className="form-control"
          placeholder="Napište sem pro vyhledávání"
          onChange={this.onTypeQuery}
          value={query}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary"
            onClick={this.clear}
          >
            <i className="fa fa-times" />
          </button>
        </div>
      </div>
    )
  }
}
