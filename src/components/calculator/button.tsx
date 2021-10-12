import useCalc from '../../data/hook/useCalc'


interface buttonProps{
    text?: any
}

export default function button(props: buttonProps) {

    const customMode = props.text == "Custom";

    const {dispatch} = useCalc()

    return (
        <button className={
            `${customMode ?'bg-lightGrayishCyan text-darkGrayishCyan'  : 'bg-veryDarkCyan text-cWhite'} 
             col-span-1 font-bold
            py-4 rounded-lg text-4xl
            focus:text-veryDarkCyan focus:bg-strongCyan`}
            
            onClick={(e) => {
                e.preventDefault
                dispatch({type: props.text})
            }}
            >
            { customMode ? props.text : props.text + "%"}
        </button>
    )
}
