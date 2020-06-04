import React, { Component } from 'react'

import './add-item-form.css'

export default class AddItemForm extends Component {
    render() {
        const { onAddItem } = this.props
        return (
            <div className="add-item-form">
                
                <button className="btn btn-outline-secondary"
                    onClick={() => onAddItem('lol')}>
                    Přidat
                </button>
            </div>
        )
    }
}