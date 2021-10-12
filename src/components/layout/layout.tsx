import Header from "../layout/header/header"

export default function layout(props) {
    return (
        <div className="h-screen bg-lighterGrayishCyan font-spaceMono flex flex-col justify-center items-center py-24 lg:py-0 lg:border-2 lg:border-red-600">
            <Header/>
            {props.children}
        </div>
    )
}


 