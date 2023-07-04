import React from 'react'
import { useGetTodosQuery } from './slices/apis/todoApi'

export const TodoApp = () => {
    const {data: todos, isLoading} = useGetTodosQuery()
  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading...</h4>
        <pre>...</pre>

        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))

            }
        </ul>
        <button>Next Todo</button>
    </>
  )
}
