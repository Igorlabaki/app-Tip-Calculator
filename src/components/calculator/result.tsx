import useCalc from '../../data/hook/useCalc'
import { useEffect } from "react"


export default function result() {

    const {dispatch,state,errorCount} = useCalc()

    useEffect(() => {
        errorCount()
    }, [state.people,state.bill,state.tip])

    return (
        <div className="bg-veryDarkCyan w-full p-10 rounded-lg space-y-8 ">
            <div className="flex items-center justify-between">
                <div>
                    <p className='text-cWhite text-3xl'>Tip Amount</p>
                    <p className='text-strongCyan text-2xl'>/ person</p>
                </div>
                <p className="text-4xl font-semibold text-strongCyan">{state.tipAmount}</p>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p className='text-cWhite text-3xl'>Total</p>
                    <p  className='text-strongCyan text-2xl'>/ person</p>
                </div>
                <p className="text-4xl font-semibold text-strongCyan">{state.total}</p>
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
