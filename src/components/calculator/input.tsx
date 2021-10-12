import route from 'next/router'
import { useEffect } from 'react'
import useCalc from '../../data/hook/useCalc'

interface inputProps{
    icon: string
    text: string
    value?: number
}

export default function input(props: inputProps) {

    const {state,onChange} = useCalc()

    const modeBill   = props.icon   == "icon-dollar.svg"
    const modePeople = props.icon   == "icon-person.svg"

    useEffect(() => {
    }, [state.people])

    return (
        <>
        <div className={`${state.error && modePeople ? "border-2 border-red-600" : ""}
                flex items-center bg-lightGrayishCyan p-5 rounded-lg `}
            >
            <img src={`/images/${props.icon}`} alt="" className="h-8" />
            <input 
                name={props.text}
                type="number" 
                min="0"
                onChange={onChange}
                value={ modeBill ? state.bill : state.people}
                className={`
                    outline-none
                    bg-transparent
                    text-right
                    text-4xl 
                    w-11/12
                    font-bold
                    ${modePeople && state.people  == 0 ? "text-lightGrayishCyan" : "text-veryDarkCyan"}
                    ${modeBill   && state.bill    == 0 ? "text-lightGrayishCyan" : "text-veryDarkCyan"}`}
            />
        </div>
        </>
    )
}
