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
        <div className="h-full w-full bg-cWhite rounded-2xl p-8">
            <div className="space-y-8">
                <div className="space-y-2">
                    <Label text="Bill"/>
                    <Input icon="icon-dollar.svg" text="bill"/>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <Label text="Select Tip %"/>
                    {renderButton()}
                </div>
                <div className="space-y-2">
                    <Label text="Number of People"/>
                    <Input icon="icon-person.svg" text="people"/>
                </div>
                <Result/>
            </div>
        </div>
    )
}
