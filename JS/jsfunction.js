// function hello(user=`Guest`){
//     console.log(`Hello ${user}`);
// }
// hello(`Ankit`);
// hello();

// function sum(a=1,b=1){
//     console.log(`before Return`);
//     return (a+b);
//     console.log(`after Return`);
    
// }
// console.log(sum(23,34));
// console.log(sum());


// const hello = ()=>console.log(`Hello`);
// hello();


// Arrow  function  
const add=(a,b)=>(a+b);
add(4,6);
console.log(add(4,5));



// // IIFE
// (function(){
//     console.log(`Hello Ankit`)
// })();


function hello(user,callback){
    console.log(`hello ${user}`);
    callback();
}

hello(`admin`,function(){
    console.log(add(5,15))});
    hello(`admin`,()=>(
        console.log(add(6,5))
    ))
    

