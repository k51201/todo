import React from 'react'

import TodoListItem from '../todo-list-item'
import './todo-list.css'

const TodoList = ({ data, onRemoveItem }) => {
    const items = data.map(({ id, ...props }) => {
        return (
            <li key={id} className="list-group-item todo-list">
                <TodoListItem onRemoveItem={() => onRemoveItem(id)} {...props} />
            </li>
        )
    })

    return <ul className="list-group">{items}</ul>
}

export default TodoList