import { FC, MouseEventHandler } from 'react'
import { ButtonText } from '../types/types'
import { FilterButton } from './FIlterButton'
import ITodo from '../types/types'


type FilterProps={
  setTodos: (todos: ITodo[]) => void
}
export const Filter: FC<FilterProps> = ({ setTodos }) => {
  const initialState: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  const handleShowActive: MouseEventHandler<HTMLButtonElement> = () => {
    const activeTodos: ITodo[] = initialState.filter(todo => !todo.completed);
    setTodos(activeTodos);
  };
    
  const handleShowAll: MouseEventHandler<HTMLButtonElement> = () => {
    setTodos(initialState)
  };
    
  const handleShowCompleted: MouseEventHandler<HTMLButtonElement> = () => {
    const completedTodos: ITodo[] = initialState.filter(todo => todo.completed);
    setTodos(completedTodos)
  };

  return (
    <div className="filter__btns">
        <FilterButton onClick={handleShowAll} text={ButtonText.SHOW}/>
        <FilterButton onClick={handleShowActive} text={ButtonText.ACTIVE}/>
        <FilterButton onClick={handleShowCompleted} text={ButtonText.COMPLETED}/>
    </div>
    )
}