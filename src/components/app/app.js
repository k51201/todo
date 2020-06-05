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
      this.createItem(1, 'Nic nedělat'),
      this.createItem(2, 'Jíst'),
      this.createItem(3, 'Spát'),
    ]
  }

  createItem(id, label) {
    return { id, label, important: false, done: false }
  }

  removeItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter(item => item.id !== id) }
    })
  }

  addItem = label => {
    this.setState(({ data }) => {
      const id = this.generateNewId(data)
      return { data: [...data, this.createItem(id, label)] }
    })
  }

  generateNewId(data) {
    const ids = data.map(({ id }) => id)
    ids.push(0)
    const maxId = ids.reduce((max, i) => (i > max ? i : max))
    return maxId + 1
  }

  toggleImportant = id => {
    this.modifyElement(id, item => {
      return { ...item, important: !item.important }
    })
  }

  toggleDone = id => {
    this.modifyElement(id, item => {
      return { ...item, done: !item.done }
    })
  }

  modifyElement = (id, f = (i => i)) => {
    this.setState(({ data }) => {
      const newData = data.map(item => {
        if (item.id === id)
          return f(item)
        else
          return item
      })
      return { data: newData }
    })
  }

  render() {
    const { data } = this.state
    const doneCount = data.filter(i => i.done).length
    const toDoCount = data.length - doneCount

    return (
      <div className="todo-app" >
        <Header toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchBar />
          <StatusFilter />
        </div>
        <TodoList
          data={data}
          removeItem={this.removeItem}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
        />
        <AddItemForm onAddItem={this.addItem} />
      </div>
    )
  }
}
