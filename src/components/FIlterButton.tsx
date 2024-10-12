import { FC, MouseEventHandler } from 'react'

type FilterBtnProps = {
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const FilterButton: FC<FilterBtnProps> = ({ text, onClick }) => {
    return (
        <button className='filter__btn' onClick={onClick}>{text}</button>
    )
}