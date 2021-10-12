import Calculator from '../model/calculator'
import { createContext, useReducer} from "react"

interface CalculatorProps {
    state:          any
    dispatch:       any
    onChange(e: any): void
}
interface initialState {
    bill       : number,
    tip        : number,
    people     : number,
    tipAmount  : number,    
    total      : number, 
    error      : boolean
}


export const intialState : initialState = {
    bill       : 0,
    tip        : 0,
    people     : 1,
    tipAmount  : 0,    
    total      : 0, 
    error      : false
}

function reducer(state, action){
    switch(action.type){
        case "5":
            return {
                ...state,
               tip: 0.05,
            }
        case "10":
            return {
                ...state,
                tip: 0.10
            }
        case "15":
            return {
                ...state,
                tip: 0.15
                }
        case "25":
            return {
                ...state,
                tip: 0.25
            }  
        case "50":
            return {
                ...state,
                tip: 0.50
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
                tipAmount: ((state.bill * state.tip)/ state.people).toFixed(2)
            }
        case "totalAmount":
            return{
                ...state,
                total: ((state.bill + (state.bill * state.tip))/ state.people).toFixed(2)
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
            value: parseInt(e.target.value),
        }
        dispatch(action)
    }

    function errorCount(){
        if(state.people == 0){
            dispatch({type:"error"})
        }else{
            dispatch({type:"tipAmount"})
            dispatch({type:"totalAmount"})
        }
    }
   
    return (
        <CalculatorContext.Provider value={{
            state,
            dispatch,
            onChange,
            errorCount
        }}>
            {props.children}
        </CalculatorContext.Provider>
    ) 
}  

export default CalculatorContext
