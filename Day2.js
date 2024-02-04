// //========callback function
// // function callback(data) {
// //     console.log(data);
// // }   
// // //========

const example2=()=>{
    console.log(`hello this is a call back example`);

}


// function username(()=>{
//     console.log("yadvi")
// })

// const message = function() {  
//     console.log("This message is shown after 3 seconds");
// }
 
// setTimeout(()=>{
//     console.log("This message is shown after 3 seconds")
// }, 3000);

// function example(()=>{
//     console.log("hello")
// })

// const example=()=>{
//     console.log("hello")
// }
// example()
//================================================================asynchronous/synchronous========================

// const timer=()=>{
   
//     setTimeout(()=>{
//         console.log("hello i'm async")
//     },2000)
    
// }
// const print=()=>{
//     console.log("hello i'm sync")
// }
// print()
// timer()
// console.log("hello i'm running")

// function delay_Greeting() {
//     setTimeout(function async() {
//       console.log("Hello, Ninja!");
//     }, 5000); // Wait for 5000 milliseconds (5 seconds)
//    }
   
//    console.log("Start");
//    delay_Greeting();
//    console.log("End");

   const name = "John"
const age = 25

const greeting = name === "Jon" ? "Hello" : age <25 ? "Sir" : "Ma'am"

console.log(greeting)