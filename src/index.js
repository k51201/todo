import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import SearchBar from './components/search-bar'
import TodoList from './components/todo-list'

const App = () => {
  const data = [
    { id: 1, label: 'Do nothing', important: true },
    { id: 2, label: 'Eat', important: false },
    { id: 3, label: 'Sleep', important: false },
  ]

  return (
    <div>
      <Header />
      <SearchBar />
      <TodoList data={data} />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));