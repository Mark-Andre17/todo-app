import { useState } from 'react'
import { Todo } from './Todo'
import { Count } from './Count'
import ITodo from '../types/types'
import { Add } from './Add'
import { Filter } from './Filter'
import { todoList } from '../models/todo.model'

export const TodoList = () => {

    const initialState: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]');

    if (initialState.length === 0) {
        localStorage.setItem('todos', JSON.stringify(todoList))
    }
    const [todo, setTodo] = useState<ITodo[]>(initialState)
    
    return (
        <div className='todos'>
            <Add todo={todo} setTodo={setTodo}/>
            <Filter setTodos={setTodo}/>
            <Count todos={todo}/>
            <Todo setTodo={setTodo} todos={todo}/>
        </div>
    )
}
