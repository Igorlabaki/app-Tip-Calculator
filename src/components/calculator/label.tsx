import { useEffect } from "react"
import useCalc from '../../data/hook/useCalc'

interface labelProps{
    text: string
    fontSize?: string
}

export default function label(props: labelProps) {

    const {state} = useCalc()

    const modePeople = props.text   == "Number of People"

    useEffect(() => {
    }, [state.people == 0])

    return (
        <div className={`${state.error && modePeople ? "flex justify-between": ""} col-span-2`}>
            {console.log(state.error)}
            <h2 className="text-darkerGrayishCyan font-semibold
             text-3xl col-span-2">
             {props.text}</h2
             >
             {state.error && modePeople ? 
             <p 
                className="text-red-600 font-light
                text-3xl">
                Can`t be Zero
             </p>
             :
              false
             }
        </div>
    )
}
