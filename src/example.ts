
 // * 1. create a type name with a string
 let str: string;
 str = "Satya";
 console.log(str);

// * 2. create a type age with a number
let age: number = 22;
console.log(age);

// * 3. create a type isFetching with boolean
let isFetching: boolean = false;
console.log(isFetching);

// * 4. create an array of numbers
let array: number[]=[];
array.push(1);
console.log(array);

// * 5. create an array of strings (using array constructor generic type)
let arr: Array<string>=[];
arr.push("Satya");
console.log(arr);

// * 6. create a tuple , which keeps a string as the first value, and boolean as the second
let tuple: [string, boolean];
tuple=["Satya",true];
console.log(tuple);

// * 6. - create an enum, 
// it should have User, SuperUser, Admin, SuperAdmin
enum Users{
   User,
   SuperUser,
   Admin,
   SuperAdmin
}
console.log(Users.User)

// * 7. create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers

function product(x: number, y: number): number{
    return x*y;
}
console.log(product(3,4));

// * 8. create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
function divide(x: number, y: number): number{
    return x/y;
}
console.log(divide(3,4));

// * 9. create a function that takes a name and prints it without returning anything
function print(name: string){
    console.log(name);
}
print("Satya")