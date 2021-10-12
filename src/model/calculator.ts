export default class Calculator{

    private _bill       = 0
    private _tip        = 0
    private _people     = 0
    private _tipAmount  = 0     
    private _total      = 0 
    private _error      = false 

    constructor (bill, tip, people, tipAmount,total,error = false){
        this._bill          = bill,
        this._tip           = tip,
        this._people        = people
        this._tipAmount     = tipAmount
        this._total         = total
        this._error         = error
    }
    
    get bill(): number{
        return this._bill
    }
    set bill(value: number) {
        this._bill = value;
    }
    get tip(): number{
        return this._tip
    }
    set tip(value: number) {
        this._tip = value;
    }
    get people(): number{
        return this._people
    }
    set people(value: number){
        this._people = value
    }
    get tipAmount(): number{
        return this._tipAmount
    }
    set tipAmount(value: number){
        this.tipAmount = value
    }
    get total(): number{
        return this._total
    }
    set total(value: number){
        this._total = value
    }

    get error(): boolean{
        return this._error
    }
    set error(value: boolean){
        this._error = value
    }
}