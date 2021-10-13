import { useState } from 'react';
import useCalc from '../../data/hook/useCalc'


interface buttonProps{
    text?: string
}

export default function button(props: buttonProps) {

    const [select, setselect] = useState(false)

    const customMode = props.text == "Custom";

    const {dispatch,state,onChange} = useCalc()

    return (
        <>
            { state.custom && customMode ?
                <input  type="number" min="0" onChange={onChange} name="tip" 
                className="text-right text-darkerGrayishCyan col-span-1 font-bold
                py- px-8 rounded-lg text-4xl h-full w-full border-4 border-strongCyan outline-none" />
                :
                <button className={
                    `${customMode ?'bg-lightGrayishCyan text-darkGrayishCyan'  : 'bg-veryDarkCyan text-cWhite'} 
                    col-span-1 font-bold
                    py-4 rounded-lg 
                    text-4xl lg:text-3xl
                    focus:text-veryDarkCyan focus:bg-strongCyan`}
                    onClick={(e) => {
                        e.preventDefault
                        state.custom = false
                        dispatch({type: props.text})
                    }}
                    >
                { customMode ? props.text : props.text + "%"}
            </button>
            }    
        </>
    )
}
