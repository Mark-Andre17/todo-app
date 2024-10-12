import { ChangeEvent, FC } from 'react'

type ButtonHiddenProps = {
    text: string,
    onclick?: (index: number | undefined) => void,
    index?: number
}   

export const ButtonHidden: FC<ButtonHiddenProps> = ({ text, onclick, index }) => {
    return (
        <button onClick={() => onclick && onclick(index)} className="hidden__btn">{text}</button>
    )
}