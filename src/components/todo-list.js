import React from 'react'

import TodoListItem from './todo-list-item'

const TodoList = ({ data }) => {
    const items = data.map(({ id, ...props }) => {
        return <li key={id}><TodoListItem {...props}/></li>
    })

    return <ul>{items}</ul>
}

export default TodoList