import React, { useState } from 'react'
import Todo from './components/Todo'
import {nanoid} from "nanoid"

const initialState = [
    {id : "0",description: "leer pdf"},
    {id : "1",description: "leer pdf 1"},
    {id : "2",description: "leer pdf 2"}
]

const App = () => {
    const [todos, setTodos] = useState(initialState)
    const [todo, setTodo] = useState("")

    const HandleChange = (e) =>{
        setTodo(e.target.value)
    }

    const HandleSubmit = (e) =>{
        e.preventDefault();
        setTodos([...todos,{id:nanoid(3),description:todo}])
        setTodo("")
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo)=>(todo.id !== id)))
    }

    return (
        <main>
            <form onSubmit={HandleSubmit}>
                <input value={todo} type="text" onChange={HandleChange}/>
            </form>
            <section>
                {todos.map(({id,description}) =>(
                    <Todo key ={id} id={id} description={description} deleteTodo={deleteTodo}/>
                ))}
            </section>
        </main>
    )
}

export default App

