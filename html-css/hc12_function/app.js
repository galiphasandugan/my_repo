// function yazdirMerhaba() {
//   console.log("Merhaba FS14");
// }
// yazdirMerhaba(name);

// function yazdirParametre(message, name) {
//   console.log(message, name);
// }
// yazdirParametre("FS14", "FS15");
// yazdirParametre("Salut", "FS16");
// yazdirParametre("Hola", "FS17");
// yazdirParametre("Hallo");
// yazdirParametre("Ehlen");
// yazdirParametre();

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name} is ${age} years old`);
//   return age;
// }
// console.log(new Date());
// calculate("Ahmet", 1990);
// calculate("İsmet", 1990);

// function isEvenOdd(num) {
//   if (num % 2 === 0) {
//     return "EVEN";
//   } else {
//     return "ODD";
//   }
// }
// const num = prompt("please enter a number");
// console.log(`${num} is ${isEvenOdd(num)}`);

function isEvenOdd(num) {
 return num%2 === 0 ? "EVEN" :"ODD"
const num = prompt("please enter a number");
console.log(`${num} is ${isEvenOdd(num)}`);