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
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = {firstName:"ken", lastName:"nguyen"}//like an object
var user = new Student("Ken", "T.", "Nguyen");
var result = greeter(user);
console.log(result);
//this is a javascript code oh no ! Nothing new here, why it is so new to me
