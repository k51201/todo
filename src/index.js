import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Do nothing</li>
      <li>Sleep</li>
    </ul>
  );
}

const Header = () => {
  return <h1>WOODOO list</h1>;
}

const Search = () => {
  return <input placeholder="search"/>;
}

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));