//! yazdirMerhhaba(); burada da çağırabilirm fakat  hglobale taşımış olurum

function yazdirMerhhaba() {
  console.log("merhaba fs-14");
}
yazdirMerhhaba();
// !*****************************

const yazdır = function (message) {
  console.log(message);
};
yazdır("hallo FS14");

let odenEven = function (num) {
  return num & (2 === 0) ? "even" : "odd";
};
console.log(odenEven(5));

// **********
const kareAl = (x) => x * x;
const topla = (x1, x2) => x1 + x2;

console.log(kareAl(4));
