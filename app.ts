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

interface User{
    name:string,
    id:number,
    position:String,
}

interface Admin extends User{
    admin:true,
    Panel_authority:true,
    Taxation_authority:false,

}
function data(obj:User){
   
}
console.log(data({name:"muhammadwasiq",id:12,position:"manager"}));

// Type Aliases
type Value=number|string

function abcd(a:Value) {
    
}

abcd(12)

