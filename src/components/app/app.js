import React, { Component } from 'react'

import Header from '../header'
import SearchBar from '../search-bar'
import StatusFilter from '../status-filter'
import TodoList from '../todo-list'
import AddItemForm from '../add-item-form/add-item-form'

import './app.css'

export default class App extends Component {
  state = {
    data: [
      { id: 1, label: 'Nic nedělat', important: true },
      { id: 2, label: 'Jíst', important: false },
      { id: 3, label: 'Spát', important: false },
    ]
  }

  removeItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter(item => item.id !== id) }
    })
  }

  addItem = label => {
    this.setState(({ data }) => {
      const id = this.generateNewId(data)
      const newItem = { id, label, important: false }
      return { data: [...data, newItem] }
    })
  }

  generateNewId(data) {
    const ids = data.map(({ id }) => id)
    ids.push(0)
    const maxId = ids.reduce((max, i) => (i > max ? i : max))
    return maxId + 1
  }

  render() {
    const { data } = this.state

    return (
      <div className="todo-app" >
        <Header toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchBar />
          <StatusFilter />
        </div>
        <TodoList data={data} onRemoveItem={this.removeItem} />
        <AddItemForm onAddItem={this.addItem} />
      </div>
    )
  }
}
