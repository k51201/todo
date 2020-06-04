import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import SearchBar from './components/search-bar'
import TodoList from './components/todo-list'

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));