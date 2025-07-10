// console.log("Hello, TypeScript!");
// // Array//

// let arr:number[]=[1, 2, 3, 4, 5];
// console.log(arr);

// // Tuple//
// let tuple:[String,number]=["hello",12];
// console.log(tuple);

//Enums//

enum UserRoles {
    admin = "admin",
    super_Admin = "super_Admin",
    manager = "manager",
}
console.log(UserRoles.admin);

enum Status {
    aboundend = "500",
    notFound = "404",
    Valid = "200"
}
console.log(Status.Valid);