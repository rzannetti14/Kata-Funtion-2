// KATA 01
function add (x , y) {
    return x + y
}
console.log(add(6 ,8))

// KATA 02 
function  multiply (x , y) {
    let total = 0
    for (let index = 0; index < y ; index += 1 ){
        total = add(x , total)
    }
    return total
} 
console.log(multiply(5 , 5))

//KATA 03 
function power (x ,y){
    let total = 1
    for (let index = 0; index < y; index +=1) {
        total = multiply(x , total)
    }
return total 
}
console.log(power(4 ,4))
console.log(power(3 ,4))

// KATA 04 
function factorial(x) {
    if (x===0)
    return 1 ;
    for (let index = x -1; index >= 1; index--) {
        x *= index;
    }
        return(x);
}