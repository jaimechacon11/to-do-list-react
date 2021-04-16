import React from 'react'

const Todo = ({id,description,deleteTodo}) => {
    return (
        <div>
            <p>{id} - {description} <button onClick={()=>deleteTodo(id)}>Delete</button></p>
        </div>
    )
}

export default Todo
