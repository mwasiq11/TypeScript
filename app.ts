// console.log("Hello, TypeScript!");
// // Array//

// let arr:number[]=[1, 2, 3, 4, 5];
// console.log(arr);

// // Tuple//
// let tuple:[String,number]=["hello",12];
// console.log(tuple);

//Enums//

// enum UserRoles {
//     admin = "admin",
//     super_Admin = "super_Admin",
//     manager = "manager",
// }
// console.log(UserRoles.admin);

// enum Status {
//     aboundend = "500",
//     notFound = "404",
//     Valid = "200"
// }
// console.log(Status.Valid);

// interface//

// interface User{
//     name:string,
//     id:number,
//     position:String,
// }

// interface Admin extends User{
//     admin:true,
//     Panel_authority:true,
//     Taxation_authority:false,

// }
// function data(obj:User){

// }
// console.log(data({name:"muhammadwasiq",id:12,position:"manager"}));

// // Type Aliases
// type Value=number|string

// function abcd(a:Value) {

// }

// abcd(12)

// class Device {
//     constructor(public name: string, public cateogry: string, public fault: boolean) {

//     }
// }

// let d1 = new Device("Computer", "Digital_device", false)

// d1.fault = true
// let d2 = new Device("laptop", "digital", true)


// extend//

// class Device {
//     constructor(public name: string, public cateogry: string, public fault: boolean) {

//     }
// }

// class phone extends Device {
//     constructor(name: string, cateogry: string, fault: boolean, public camera: boolean) {
//         super(name, cateogry, fault);
//     }
// }

// let d1 = new Device("Computer", "Digital_device", false)
// console.log(d1);
// d1.fault = true
// let d2 = new Device("laptop", "digital", true)

// getter and setter//

// class User {
//     constructor(public _name: string, public _age: number) {

//     }

//     // Getter//
//     get name() {
//         return this._name

//     }
//     get age() {
//         return this._age
//     }

//     //Setter//
//     set name(Value: string) {
//         this._name = Value
//     }
//     set age(Value: number) {
//         this._age = Value

//     }

// }

// let u1 = new User("muhammad", 23);

// Static//

// class User{
//    static No_oFDeatils=1

//    static getRandomNumber(){
//     return Math.random()
//    }
// }

// function abcd(name: string, age: number, cb: (cb: string) => void) {
//    cb("ali")
// }
// abcd("ali", 34, (arg: string) => {
//    console.log(arg);


// })

// Generics//

// function abcd<T>(a: T, b: string, c: number, d: boolean) {
//    console.log(a)
// }

// abcd(2323.23, "ali", 23, true)

// function hello<T>(a: T, b: T): T {
//    return "hey" as T ;
// }
// let b1=hello("abcd", "asd")
// console.log(b1);

// instance of//

class Computer {
   compInfo() {
      console.log("computer information");
   }
}

class Mobile {
   mobileInfo() {
      console.log("mobile information");
   }
}

let comp = new Computer()
let mob = new Mobile()

function checker(device: Computer | Mobile) {
   if (device instanceof Computer) {
      device.compInfo()
   }
   else if (device instanceof Mobile) {
      device.mobileInfo()
   }
}
