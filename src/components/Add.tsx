import { FC, FormEvent } from 'react'
import ITodo from '../types/types'
import {v4 as uuidv4} from 'uuid'

type AddProps = {
    todo: ITodo[],
    setTodo: (todos: ITodo[]) => void
}

export const Add: FC<AddProps> = ({ todo, setTodo }) => {


    const submitForm  = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newTitle = e.currentTarget.elements[0] as HTMLInputElement
        if (!newTitle.value) return alert('Поле не должно быть пустым')
        const newTodo = {
                id: uuidv4(),
                title: newTitle.value,
                completed: false
            }
        setTodo([...todo, newTodo]);
        newTitle.value = '';
        localStorage.setItem('todos', JSON.stringify([...todo, newTodo]))
    }
    

    return (
        <form className='todo__form' onSubmit={submitForm}>
            <input type="text" placeholder="Todo" maxLength={100} className='todo__input'/>
            <button type='submit' className='todo__btn'>Add</button>
        </form>
    )
}