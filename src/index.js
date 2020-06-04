import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import SearchBar from './components/search-bar'
import StatusFilter from './components/status-filter'
import TodoList from './components/todo-list'

import './index.css'

const App = () => {
  const data = [
    { id: 1, label: 'Nic nedělat', important: true },
    { id: 2, label: 'Jíst', important: false },
    { id: 3, label: 'Spát', important: false },
  ]

  return (
    <div className="todo-app">
      <Header toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchBar/>
        <StatusFilter/>
      </div>
      <TodoList data={data} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));