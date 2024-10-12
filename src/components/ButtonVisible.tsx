import { FC } from 'react'

type ButtonVisibleProps = {
    text: string,
    onclick: (index: number) => void,
    index: number
}

export const ButtonVisible: FC<ButtonVisibleProps> = ({ text, onclick, index}) => {
    return (
        <button className='visible__btn' onClick={() => onclick(index)}>{text}</button>
    )
}