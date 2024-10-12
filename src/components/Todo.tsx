import { ChangeEvent, FC } from 'react'
import ITodo from '../types/types'
import { ButtonVisible } from './ButtonVisible'
import { ButtonText } from '../types/types'
import { ButtonHidden } from './ButtonHidden'

type TodoProps = {
    todos: ITodo[],
    setTodo: (todos: ITodo[]) => void
}

export const Todo: FC<TodoProps> = ({ todos, setTodo }) => {

    const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedTodos = todos.map((item) => {
            if (item.id === event.target.id) {
                return {
                    ...item, 
                    completed: !item.completed 
                }
            }
            return item
        })
        setTodo(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    const handleDelete = (deleteIndex: number | undefined) => {
        const deleteTodo = todos.filter((item, index) => {
            if (index === deleteIndex) {
                return false
            }
            return true
        }) 
        setTodo(deleteTodo)
        localStorage.setItem('todos', JSON.stringify(deleteTodo))
    }

    const handleToggleVisible = (toggleIndex: number | undefined) => {
        const visibleTodo = todos.map((item, index) =>{
            if(index === toggleIndex) {
                return {
                    ...item, 
                    visible: !item.visible 
                }
            }
            return item
        })
        setTodo(visibleTodo)
        localStorage.setItem('todos', JSON.stringify(visibleTodo))
    }

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedTodos = todos.map((item) => {
            if (item.id === event.target.id) {
                return {
                   ...item, 
                    title: event.target.value
                }
            }
            return item
        })
        setTodo(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    const handleSaveClick = (saveIndex: number | undefined) => {
        const visibleTodo = todos.map((item, index) =>{
            if(index === saveIndex) {
                return {
                    ...item, 
                    visible: !item.visible 
                }
            }
            return item
        })
        setTodo(visibleTodo)
        localStorage.setItem('todos', JSON.stringify(visibleTodo))
    }

    return (
        <ul className='todo__items'>
            {todos.map((todo, index) => (
                <li key={todo.id} className='todo__item'>
                    {!todo.visible ? 
                        <div className="visible__btns">
                            <input className='visible__input' type="checkbox" id={todo.id} onChange={handleChangeCheckbox} checked={todo.completed}/>
                            <p className='visible__text'>{todo.title}</p>
                            <ButtonVisible text={ButtonText.EDIT} index={index} onclick={handleToggleVisible}/>
                            <ButtonVisible text={ButtonText.DELETE} index={index} onclick={handleDelete}/>
                        </div>:
                        <div className="hidden__btns">
                            <input className='hidden__input' type='text' id={todo.id} value={todo.title} onChange={handleChangeValue}/>
                            <ButtonHidden text={ButtonText.SAVE} index={index} onclick={handleSaveClick}/>
                            <ButtonHidden index={index} text={ButtonText.CANCEL} onclick={handleToggleVisible}/>
                        </div>
                    }
                </li> 
            ))}
        </ul>
    )
}


