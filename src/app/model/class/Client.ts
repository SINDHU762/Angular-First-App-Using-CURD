export class Client{
    ID : string;
    ComboName : string;
    ComboType : string;
    SubTotal : number;
    Total : number;
    ComboPrice : number;
    SpecialPrice : number;
    GSTTaxValue : number;
    ActualSellingPrice : number;
    CategoryName : string;
    Start_Date : string;
    End_Date : string;
    Start_Time : String;
    End_Time : string;
    WeekdayIds : string;


    constructor(){
        this.ID = '';
        this.ComboName = '';
        this.ComboType = '';
        this.SubTotal = 0;
        this.Total = 0;
        this.ComboPrice = 0;
        this.SpecialPrice = 0;
        this.GSTTaxValue = 0;
        this.ActualSellingPrice = 0;
        this.CategoryName = '';
        this.Start_Date = '';
        this.End_Date = '';
        this.Start_Time = '';
        this.End_Time = '';
        this.WeekdayIds = '';
    }

}