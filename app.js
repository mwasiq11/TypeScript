"use strict";
// console.log("Hello, TypeScript!");
// // Array//
// let arr:number[]=[1, 2, 3, 4, 5];
// console.log(arr);
// // Tuple//
// let tuple:[String,number]=["hello",12];
// console.log(tuple);
//Enums//
var UserRoles;
(function (UserRoles) {
    UserRoles["admin"] = "admin";
    UserRoles["super_Admin"] = "super_Admin";
    UserRoles["manager"] = "manager";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.admin);
var Status;
(function (Status) {
    Status["aboundend"] = "500";
    Status["notFound"] = "404";
    Status["Valid"] = "200";
})(Status || (Status = {}));
console.log(Status.Valid);
