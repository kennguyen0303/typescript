/*
let strArr: string[]; //an array of string
strArr=["ken", "Kennny"];

//number arrya
let numbArr: number[];
let booArr: boolean[];
*/
var strArr;
var numArr;
var booArr;
//tuple
var strNumTuple;
strNumTuple = ["Kes", 2];
;
//creating a class now
var Student = /** @class */ (function () {
    //public on argument as the shorthand to automatically create properties of that name
    //are properties here mean the attributes ? 
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.register = function () {
        return this.fullName + "is registered";
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = {firstName:"ken", lastName:"nguyen"}//like an object
var user = new Student("Ken", "T.", "Nguyen");
var result = greeter(user);
console.log(user.register());
//note: user.register = return the type is function; user.register() will call the method.
//this is a javascript code oh no ! Nothing new here, why it is so new to me
