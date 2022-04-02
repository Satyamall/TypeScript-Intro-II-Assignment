// * 1. create a type name with a string
var str;
str = "Satya";
console.log(str);
// * 2. create a type age with a number
var age = 22;
console.log(age);
// * 3. create a type isFetching with boolean
var isFetching = false;
console.log(isFetching);
// * 4. create an array of numbers
var array = [];
array.push(1);
console.log(array);
// * 5. create an array of strings (using array constructor generic type)
var arr = [];
arr.push("Satya");
console.log(arr);
// * 6. create a tuple , which keeps a string as the first value, and boolean as the second
var tuple;
tuple = ["Satya", true];
console.log(tuple);
// * 6. - create an enum, 
// it should have User, SuperUser, Admin, SuperAdmin
var Users;
(function (Users) {
    Users[Users["User"] = 0] = "User";
    Users[Users["SuperUser"] = 1] = "SuperUser";
    Users[Users["Admin"] = 2] = "Admin";
    Users[Users["SuperAdmin"] = 3] = "SuperAdmin";
})(Users || (Users = {}));
console.log(Users.User);
// * 7. create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
function product(x, y) {
    return x * y;
}
console.log(product(3, 4));
// * 8. create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
function divide(x, y) {
    return x / y;
}
console.log(divide(3, 4));
// * 9. create a function that takes a name and prints it without returning anything
function print(name) {
    console.log(name);
}
print("Satya");
