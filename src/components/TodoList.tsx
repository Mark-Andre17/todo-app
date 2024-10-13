import { useState, FC, useEffect } from 'react'
import { Todo } from './Todo'
import { Count } from './Count'
import ITodo from '../types/types'
import { Add } from './Add'
import { Filter } from './Filter'
import { todoList } from '../models/todo.model'

export const TodoList: FC = () => {
    
    const [todo, setTodo] = useState<ITodo[] | []>([])

   
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList))
        setTodo(JSON.parse(localStorage.getItem('todos') || '[]'))
    }, [])

    return (
        <div className='todos'>
            <Add todo={todo} setTodo={setTodo}/>
            <Filter setTodos={setTodo}/>
            <Count todos={todo}/>
            <Todo setTodo={setTodo} todos={todo}/>
        </div>
    )
}
