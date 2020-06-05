import React, { Component } from 'react'

import './status-filter.css'

export default class StatusFilter extends Component {
    state = {
        selected: 'all'
    }

    selectFilter = (selected) => {
        const { changeFilter } = this.props
        this.setState({selected})
        changeFilter(selected)
    }

    renderButton = ({ key, label }) => {
        const { selected } = this.state
        const className = 'btn' + (selected === key ? ' btn-info' : ' btn-outline-secondary')
        return (
            <button type="button" key={key}
                className={className}
                onClick={() => this.selectFilter(key)}
            >
                {label}
            </button>
        )
    }

    render() {
        const buttons = [
            { key: 'all', label: 'Všechny' },
            { key: 'active', label: 'Aktivní' },
            { key: 'done', label: 'Dokončené' },
        ]
        return <div className="btn-group">{buttons.map(this.renderButton)}</div>
    }
}
