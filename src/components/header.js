import React from 'react'

import './header.css'

const Header = ({ toDo, done }) => {
    return (
        <div className="header d-flex">
            <h1>Seznam TODO</h1>
            <h2>Máte udělat:  {toDo}, splněné: {done}</h2>
        </div>
    )
}

export default Header