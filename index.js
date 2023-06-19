// --for loop
// 1. Print the square of numbers from 1 to 5

console.log("first task below")

let x=0;

for(let i=1; i<=5; i++){
    x=i*i;
    console.log(x)
}

console.log("second task below")
// 2. Print the sum of numbers from 1 to 10

let y=0;

for(let i=1; i<=10; i++){
    y=y+i     
}
console.log(y)

console.log("third task below")

// 3. Print average from 1 to 10;
let z=0;
let a=0; 

for(let i=1; i<=10; i++){
    z=z+i;
    a=z/10; 
}
console.log(a)

console.log("forth task below")
// 4. Reverse the string then Convert each character in a string to uppercase.

let s="elisabeth"
let es=""
let str=""

for(let i=s.length-1; i>=0; i--){
    es+=s[i]
    str = es.toUpperCase()
    
}console.log(s, "-" , es , "-" , str)

// --while loop
// FizzBuzz
console.log("-------FizzBuzz-----")



let i=1;

while(i<100){
     
    if(i%3===0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%5===0){
        console.log("buzz")
    }
    else if(i%3===0){
        console.log("Fizz")
    }
    else{
        console.log(i)
    }

    i++
}
console.log(i)