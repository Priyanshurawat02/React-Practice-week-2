// Basic variables
let name: string = "Priyanshu";
let age: number = 23;
let goesToGym: boolean = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Goes to Gym:", goesToGym);

// Function example
function multiply(a: number, b: number): number {
    return a * b;
}

let result = multiply(5, 4);
console.log("Multiplication Result:", result);

type Product = {
    id: number;
    name: string;
    price :number;
    inStock: boolean;
}

let products: Product[] =[
{
    id: 1,
    name: "Coke",
    price: 20,
    inStock:true
},
{
    id: 2,
    name: "Bread",
    price: 35,
    inStock:false
}
];

console.log(products
    
);

