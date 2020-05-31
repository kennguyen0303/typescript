var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//inheritance
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(university, firstName, middleInitial, lastName) {
        var _this = _super.call(this, firstName, middleInitial, lastName) || this;
        _this.firstName = firstName;
        _this.middleInitial = middleInitial;
        _this.lastName = lastName;
        _this.university = university;
        return _this;
    }
    GraduateStudent.prototype.toString = function () {
        console.log(this.fullName + " is graduated from " + this.university);
    };
    return GraduateStudent;
}(Student));
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = {firstName:"ken", lastName:"nguyen"}//like an object
var user = new Student("Ken", "T.", "Nguyen");
var user2 = new GraduateStudent("Concordia University", "Kien ", "T.", "nguyen ");
var result = greeter(user);
console.log(user.register());
user2.toString();
//note: user.register = return the type is function; user.register() will call the method.
//this is a javascript code oh no ! Nothing new here, why it is so new to me
