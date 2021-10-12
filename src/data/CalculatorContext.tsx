import Calculator from '../model/calculator'
import { createContext, useReducer} from "react"

interface CalculatorProps {
    state:          any
    dispatch:       any
    onChange(e: any): void
}

export const intialState = {
    bill       : 0,
    tip        : 0,
    people     : 0,
    tipAmount  : 0,    
    total      : 0, 
    error      : false
}

function reducer(state, action){
    switch(action.type){
        case "5":
            return {
                ...state,
               tip: state.tip = 0.05,
            }
        case "10":
            return {
                ...state,
                tip: state.tip = 10
            }
        case "15":
            return {
                ...state,
               tip: state.tip = 0.15
                }
        case "25":
            return {
                ...state,
               tip: state.tip = 0.25
            }  
        case "50":
            return {
                ...state,
               tip: state.tip = 0.50
            }   
        case "reset":
            return{
                ...intialState
            }  
        case "error":
            return{
                ...state,
                error: !state.error
            }
        case "tipAmount":
            return{
                ...state,
                tipAmount: (state.bill * state.tip)/ state.people
            }
        case "totalAmount":
            return{
                ...state,
                total: (state.bill + (state.bill * state.tip))/ state.people
            }
        default:
            return {
                ...state,
                [action.input] : action.value
            }
    }
}

const CalculatorContext = createContext({})

export function CalculatorProvider(props) {

    const [state, dispatch] = useReducer(reducer, intialState)

    function onChange(e){
        const action = {
            input: e.target.name,
            value: e.target.value,
        }
        dispatch(action)
    }
   
    return (
        <CalculatorContext.Provider value={{
            state,
            dispatch,
            onChange
        }}>
            {props.children}
        </CalculatorContext.Provider>
    ) 
}  

export default CalculatorContext
