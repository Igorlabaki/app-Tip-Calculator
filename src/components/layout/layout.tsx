import Header from "../layout/header/header"

export default function layout(props) {
    return (
        <div className="h-screen bg-lighterGrayishCyan font-spaceMono flex flex-col justify-center items-center py-24">
            <Header/>
            {props.children}
        </div>
    )
}


 