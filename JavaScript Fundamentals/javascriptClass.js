class CalenderDay {
    //private fields
    #day;
    #month;
    #year;

    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    //public method
    toString(){
        return `${this.day}-${this.month}-${this.year}`;
    }
}

let classObj = new CalenderDay(16, 2, 2023);
console.log(classObj.toString());