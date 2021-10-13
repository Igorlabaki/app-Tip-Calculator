import { useEffect } from "react"
import useCalc from '../../data/hook/useCalc'

interface labelProps{
    text: string
    fontSize?: string
}

export default function label(props: labelProps) {

    const {state} = useCalc()

    const modePeople = props.text   == "Number of People"
    
    return (
        <div className={`${state.error && modePeople ? "flex justify-between": ""} col-span-2`}>
            <h2 className="text-darkerGrayishCyan font-semibold
             text-3xl lg:text-2xl col-span-2 lg:col-span-3 py-5 lg:py-3 flex  items-center">
             {props.text}</h2
             >
             {state.error && modePeople ? 
             <p 
                className="text-red-600 font-light
                text-3xl lg:text-lg flex justify-center items-center">
                Can`t be Zero
             </p>
             :
              false
             }
        </div>
    )
}
