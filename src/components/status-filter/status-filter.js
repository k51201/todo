import React from 'react'

import './status-filter.css'

const StatusFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">Všechny</button>
            <button type="button" className="btn btn-outline-secondary">Aktivní</button>
            <button type="button" className="btn btn-outline-secondary">Dokončené</button>
        </div>
    )
}

export default StatusFilter