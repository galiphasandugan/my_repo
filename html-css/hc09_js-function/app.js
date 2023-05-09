// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

console.log("****** CONDITIONS *******");

//? 2 kosullu
// if (calismaSuresi >= 10) {
//   // maas = Math.trunc(maas * 1.1)
//   maas = Math.round(maas * 1.1)
//   console.log("Zamli maasiniz:", maas)
//   console.log(`Zamli maasiniz: ${maas}`)
// } else {
//   console.log("Uzgunuz maasinaza zam yapamayirouz", maas)
// }
// console.log("Güle güle")

//? Tek kosullu
// let sayı = prompt("Bir sayı girniz");
// console.log(typeof sayı);

// console.log(Number(""));
// console.log(Number("0"));
// console.log(Number(null));
// console.log(Number("25"));
// console.log(Number("25"));
// console.log(Number(25));
// const a = "a";
// let b = Number(a);
// console.log(b);

// const dolar = "1000";
// const dolarInt = parseInt(dolar);
// console.log(typeof dolarInt);
// console.log(parseFloat);

// //? Cok kosullu
// const grade = prompt("Please enter your grade:");

// let result = null;
// // let result = ""
// if (grade < 0) {
//   console.log("Grade can not be smaller than zero");
// } else if (grade < 40) {
//   result = "FF";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "CC";
// } else if (grade <= 89) {
//   result = "BB";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("Grade can not be bigger than 100");
// }

// if (result != null) {
//   console.log(`Your score:${result}`);
// }
// // //? Kısa yol
// if (result) {
//   console.log(`Your score:${result}`);
// }

// // console.log(typeof yas);

// if (yas > 0 && yas <= 4) {
//   console.log("bebek");
// } else if (yas > 4 && yas <= 15) {
//   console.log("cocuk");
// } else if (yas > 15 && yas <= 39) {
//   console.log("genc");
// } else if (yas > 39 && yas < 150) {
//   console.log("yaslı");
// }
// if (yas >= 150) {
//   console.log("sonuc bulunamadı");
// }

// console.log(`sonuc:${yas}`);

// // console.log("sonuc:", yas);

// ! ternary ile yapalım....
const yas = Number(prompt("yası giriniz"));

// yas > 0 && yas < 4 ? console.log("bebek") : ;
// yas > 5 && yas < 15 ? console.log("cocuk") : );
// yas > 15 && yas < 40 ? console.log("genc") : console.log("genc değil");
// yas > 40 && yas < 150 ? console.log("yaslı") : console.log("yaslı değil");

yas < 4
  ? "bebek"
  : yas < 15
  ? "cocuk"
  : yas < 40
  ? "genc"
  : yas < 150
  ? "yaslı"
  : "yas bulunamadı";

yas < 4
  ? console.log("bebek")
  : yas < 15
  ? console.log("cocuk")
  : yas < 40
  ? console.log("genc")
  : yas < 150
  ? console.log("yaslı")
  : "yas bulunamadı";
