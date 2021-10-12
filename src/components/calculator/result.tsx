import useCalc from '../../data/hook/useCalc'
import { useEffect } from "react"


export default function result() {

    const {dispatch,state} = useCalc()

    return (
        <div className="bg-veryDarkCyan w-full p-10 rounded-lg sm:space-y-8  lg:w-1/2 lg:flex lg:flex-col lg:justify-between">
            <div className='space-y-8'>
                <div className="flex items-center justify-between">
                    <div>
                        <p className='text-cWhite text-3xl lg:text-2xl'>Tip Amount</p>
                        <p className='text-strongCyan text-2xl lg:text-lg'>/ person</p>
                    </div>
                    <p className="text-4xl lg:text-6xl font-semibold text-strongCyan">${state.tipAmount}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className='text-cWhite text-3xl  lg:text-2xl'>Total</p>
                        <p  className='text-strongCyan text-2xl lg:text-lg'>/ person</p>
                    </div>
                    <p className="text-4xl lg:text-6xl font-semibold text-strongCyan">${state.total}</p>
                </div>
            </div>
            <button 
                className="
                    bg-strongCyan w-full rounded-lg py-4 text-3xl font-bold 
                    text-veryDarkCyan"
                    onClick={(e) => {
                        e.preventDefault
                        dispatch({type:'reset'})
                    }}
                >RESET
            </button>
        </div>
    )
}
