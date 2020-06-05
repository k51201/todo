import React, { Component } from 'react'

import './add-item-form.css'

export default class AddItemForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({ label: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { onAddItem } = this.props
        onAddItem(this.state.label)
        this.setState({ label: '' })
    }

    render() {
        return (
            <form className="add-item-form d-flex" onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Co ještě máte udělat"
                    value={this.state.label}
                />
                <button className="btn btn-outline-secondary">
                    Přidat
                </button>
            </form>
        )
    }
}