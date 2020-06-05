import React, { Component } from 'react'

import './status-filter.css'

export default class StatusFilter extends Component {
    buttons = [
        { key: 'all', label: 'Všechny' },
        { key: 'active', label: 'Aktivní' },
        { key: 'done', label: 'Dokončené' },
    ]

    renderButton = ({ key, label }) => {
        const { selected, changeFilter } = this.props

        const className = 'btn' + (selected === key ? ' btn-info' : ' btn-outline-secondary')
        return (
            <button type="button" key={key}
                className={className}
                onClick={() => changeFilter(key)}
            >
                {label}
            </button>
        )
    }

    render() {
        return <div className="btn-group">{this.buttons.map(this.renderButton)}</div>
    }
}
