import Label from "./label"
import Input from "./input"
import Button from "./button"
import Result from "./result"

export default function calculator() {
  
    const tipPorcent = [{number: "5" },{number: '10'},{number: '15'},{number: '25'},{number: '50'},{number: "Custom"}]

    function renderButton(){
        return tipPorcent.map( (e,i) => {
            return (
                <Button text={e.number} key={i}/>
            )
        })
    }

    return (
        <div className="h-full w-full bg-cWhite rounded-3xl p-8 lg:p-10 lg:w-4/6 lg:h-auto mb-20">
            <div className="lg:flex h-full">
                <div className="lg:w-1/2 p-5 space-y-2">
                    <div className="space-y-2">
                        <Label text="Bill"/>
                        <Input icon="icon-dollar.svg" text="bill"/>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
                        <Label text="Select Tip %"/>
                        <div className="col-span-1 sm:hidden lg:inline-block"></div>
                        {renderButton()}
                    </div>
                    <div className="space-y-2">
                        <Label text="Number of People"/>
                        <Input icon="icon-person.svg" text="people"/>
                    </div>
                </div>
                <Result/>
            </div>
        </div>
    )
}
