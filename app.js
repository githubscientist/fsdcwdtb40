// Date of Birth: 6 Feb 2026
// custom data types -> classes
// class -> custom data type or a template or a blueprint
var DOB = /** @class */ (function () {
    // constructor: method -- special method -- has same name as that of the class
    // and called whenever we create an object to the class
    function DOB(day, month, year) {
        // to initialize variables (member variables)
        this.day = day;
        this.month = month;
        this.year = year;
        console.log(this); // this -> dob1
    }
    return DOB;
}());
// dob1 -> object
// object: it is an instance of a class
var dob1 = new DOB(6, 'Feb', 2026);
// this keyword -> current instance referring to the current object of the class
// implicitly passed to the class'es constructor or methods
// explicitly passed to the method
// dob1.printObject(dob1);
/*
    dob1 = DOB {
        day: 6,
        month: 'Feb',
        year: 2026
    }
*/ 
