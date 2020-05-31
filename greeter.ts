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

//an interface
interface Person{ //defining an interface
    firstName: string; 
    lastName: string;
};


//creating a class now
class Student implements Person{
    fullName: string;//by default what type is it ?
    //public on argument as the shorthand to automatically create properties of that name
    //are properties here mean the attributes ? 
    constructor(public firstName: string, public middleInitial: string,
        public lastName:string){
            this.fullName=firstName + " "+middleInitial+" "+lastName;
        
        }
    public register(): string{
        return this.fullName+"is registered";
    }

}
//inheritance
class GraduateStudent extends Student{
    private university: string;
    constructor(university:string, public firstName: string, public middleInitial: string,
        public lastName:string){
            super(firstName, middleInitial,lastName);
            this.university=university;
        }
        public toString(){
            console.log(this.fullName+" is graduated from "+ this.university);
        }
}


function greeter(person: Person){//implementing an interface
    return "Hello, "+person.firstName+" "+person.lastName;
}

//let user = {firstName:"ken", lastName:"nguyen"}//like an object
let user = new Student("Ken","T.","Nguyen");
let user2 = new GraduateStudent("Concordia University", "Kien ","T.","nguyen ");
let result=greeter(user);

console.log(result);
console.log(user.register());
user2.toString();
//note: user.register = return the type is function; user.register() will call the method.
//this is a javascript code oh no ! Nothing new here, why it is so new to me
