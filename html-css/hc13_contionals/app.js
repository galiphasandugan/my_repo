// console.log("hello")

// * short-circuit 

// const n1 = +prompt("please enter your number");
// const n2 = +prompt("please enter your number");
// const n3 = +prompt("please enter your number");
// !tek durumlu koşullandırmada kullnaılmak zorundadır
// // grade >= 50 ? console.log("succeed") : console.log("");

// const result = grade  >= 50 && "aferin";
// console.log(result);
// * girilen sayının çift mi tek mi olduğuu sorgulayan code?
// const result = sayı%2 == 0 ? "Çift sayıdır" : "tek sayıdır"
// console.log(result);

// if(n1> n2 && n1 > n3){
//     console.log("biggest number is " ,n1);
// }else if(n3> n2 && n3 > n2){
//     console.log("biggest number is " ,n3);
// }else if(n2> n1 && n2 > n3){
//     console.log("biggest number is " ,n2);
// }
// if(n1< n2 && n1 < n3){
//     console.log("en kucuk number is " ,n1);
// }else if(n3<n2 && n3 < n2){
//     console.log("en kücük number is " ,n3);
// }else if(n2 <n1 && n2 < n3){
//     console.log("en kücuk number is " ,n2);
// }

// let biggest = n1;
// if(n2 >= biggest){
//     biggest= n2
// }
// if(n3 >= biggest){
//     result= n3
// }
// console.log(`${biggest} is biggest`);

// const not = +prompt("please enter your number");

// if(not > 91 && not <=100){
//     result ="AA"
// }else if(not> 76 && not <=91){
//     result = "BA"
// }else if(not> 65 && not <=76){
//     result = "BB"
// }else if(not> 46 && not <=65){
//     result = "CC"
// }else if(not> 26 && not <=46){
//     result = "DD"
// }else if(not>= 0 && not <=26){
//     result = "FF"
// }

// console.log(result);
///! fahrenheit sorusu
// const degree = +prompt("please enter your degree");
// const fahr = +prompt("please enter your fahrenheit");


// if(degree){
//     result= degree * 33.8
// }else if(fahr){
//     result = fahr/33.8 
// }
// console.log(Math.round(result));

const n = prompt("enter a number btw grather than 3 ");
for (let i = 2; i < n; i++){
    if (n % i == 0) {
        i = n;
        console.log(`${n} is not a prime`);
        break;
    } else if ( i == n -1) {
        console.log(`${n} is a prime number`);
    }
}