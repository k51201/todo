import React from 'react'

import TodoListItem from '../todo-list-item'
import './todo-list.css'

const TodoList = ({ data }) => {
    const items = data.map(({ id, ...props }) => {
        return (
            <li key={id} className="list-group-item todo-list">
                <TodoListItem {...props}/>
            </li>
        )
    })

    return <ul className="list-group">{items}</ul>
}

export default TodoList