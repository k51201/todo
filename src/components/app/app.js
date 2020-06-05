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
    ],
    searchQuery: '',
    filter: 'all',
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

  search = searchQuery => {
    this.setState({ searchQuery })
  }

  changeFilter = filter => {
    this.setState({ filter })
  }

  visibilityPredicate = ({ label, done }) => {
    const { searchQuery, filter } = this.state

    const applyQuery = (label) => label.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1

    switch(filter) {
      case 'active': return !done && applyQuery(label)
      case 'done': return done && applyQuery(label)
      default: return applyQuery(label)
    }
  }

  render() {
    const { data, filter } = this.state
    const doneCount = data.filter(i => i.done).length
    const toDoCount = data.length - doneCount
    const visibleData = data.filter(this.visibilityPredicate)

    return (
      <div className="todo-app" >
        <Header toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchBar onSearch={this.search} />
          <StatusFilter selected={filter} changeFilter={this.changeFilter} />
        </div>
        <TodoList
          data={visibleData}
          removeItem={this.removeItem}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
        />
        <AddItemForm onAddItem={this.addItem} />
      </div>
    )
  }
}
