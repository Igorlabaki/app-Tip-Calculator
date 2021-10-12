import { createContext, useEffect, useReducer} from "react"
interface initialState {
    bill       : number,
    tip        : number,
    people     : number,
    tipAmount  : number,    
    total      : number, 
    error      : boolean
    custom      : boolean
}

export const intialState : initialState = {
    bill       : 0,
    tip        : 0,
    people     : 1,
    tipAmount  : 0,    
    total      : 0, 
    custom     : false, 
    error      : false
}

function reducer(state, action){
    switch(action.type){
        case "5":
            return {
                ...state,
               tip: 5,
            }
        case "10":
            return {
                ...state,
                tip: 10
            }
        case "15":
            return {
                ...state,
                tip: 15
                }
        case "25":
            return {
                ...state,
                tip: 25
            }  
        case "50":
            return {
                ...state,
                tip: 50
            } 
        case "Custom":
            return {
                ...state,
                custom: !state.custom
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
        case "total":
            return{
                ...state,
                tipAmount: ((state.bill * (state.tip/100))/ state.people).toFixed(2),
                total: ((state.bill + (state.bill * (state.tip/100)))/ state.people).toFixed(2)
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

    
    useEffect(() => {
        errorCount()
    }, [state.people,state.bill,state.tip])

    function onChange(e){
        const action = {
            input: e.target.name,
            value: parseInt(e.target.value),
        }
        dispatch(action)
    }

    function errorCount(){
        if(state.people == 0 || isNaN(state.people)){
            dispatch({type:"error"})
        }else{
            state.error = false
            dispatch({type:"total"})
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
