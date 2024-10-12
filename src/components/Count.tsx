import { FC } from 'react'
import ITodo from '../types/types'

type CountProps = {
    todos: ITodo[]
}

export const Count: FC<CountProps> = ({ todos }) => {

    return (
        <div>
            <p className='count__text'>{todos.length} tasks remaining</p>
        </div>
    )
}