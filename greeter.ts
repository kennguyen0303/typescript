/*
let strArr: string[]; //an array of string 
strArr=["ken", "Kennny"];

//number arrya
let numbArr: number[];
let booArr: boolean[];
*/
let strArr: Array<string>;
let numArr: Array<number>;
let booArr: Array<boolean>;

//tuple
let strNumTuple: [string, number];
strNumTuple=["Kes",2];
interface Person{ //defining an interface
    firstName: string; 
    lastName: string;
};


//creating a class now
class Student {
    fullName: string;//by default what type is it ?
    //public on argument as the shorthand to automatically create properties of that name
    //are properties here mean the attributes ? 
    constructor(public firstName: string, public middleInitial: string,
        public lastName:string){
            this.fullName=firstName + " "+middleInitial+" "+lastName;
        
        }

}
function greeter(person: Person){//implementing an interface
    return "Hello, "+person.firstName+" "+person.lastName;
}

//let user = {firstName:"ken", lastName:"nguyen"}//like an object
let user = new Student("Ken","T.","Nguyen");
let result=greeter(user);
console.log(strArr)

//this is a javascript code oh no ! Nothing new here, why it is so new to me
