// 1 masala
// let Numbers = (arr) => arr.filter((n) => n % 2 === 0);
// console.log(Numbers([1, 2, 3, 4, 5, 6]));

// 2 masala
// const fn = (arr) => Math.max(...arr);
// console.log(fn ([4, 15, 2, 9]));

// 3 masala
// const fn = (arr) => arr.map((str) => str.length);
// console.log(fn(["sardor", "dunyo", "umarali"]));

// 4 masala
// const Numbers = (arr) => arr.filter((n) => n > 0);
// console.log(Numbers([3, -1, 0, 7, -5,]));

// 5 masala
// let Array = (arr) => [...arr].reverse();
// console.log(Array([1, 2, 3, 4, 5]));

// OBJECT
// 6 masala
// let fn = (user) => `${user.name} ${user.age} yosh`;
// let user = { name: "Ali", age: 25 };
// console.log(fn (user));

// 7 masala
// let Students = (student) =>
//   student.filter((s) => s.grade <= 70).map((s) => s.name);
// let students = [
//   { name: "Ali", grade: 80 },
//   { name: "Vohid", grade: 65 },
//   { name: "Sabina", grade: 70 },
//   { name: "Sardor", grade: 90 },
// ]; console.log(Students(students));

// 8 masala
// let Count = (obj) => Object.keys(obj).length;
// console.log(Count({ a: 1, b: 2, c: 3 }));

// 9 masala
// function Price(product) {
//   return product.price - (product.price * product.discount);
// } let p = { name: "Phone", price: 1200, discount: 0.1 };
// console.log(Price(p));

// 10 masala
// function Pages(arr) {
//   return arr.map(item => item.pages);
// }
// let books = [
//   { title: "Book1", pages: 150 },
//   { title: "Book2", pages: 230 },
//   { title: "Book3", pages: 90 }
// ]; console.log(Pages(books));

// STRING
// 11 MASALA
// function String(str) {
//   return str.split("").reverse().join("");
// } console.log(String("hello"));

// 12 masala
// function count(str) {
//   return str.split(" ").length - 1;
// } console.log(count("salom dunyo js"));

// 13 masala
// function toUpper(fn) {
//   return fn.toUpperCase();
// } console.log(toUpper("javaScript"));

// 14 masala
// function count(fn) {
//   return fn.split("js").length - 1;
// } console.log(count("js yaxshi js zo'r frontend js"));

// 15 masala
// function Count(fn) {
//   return fn === fn.split("").reverse().join("");
// } console.log(Count("level"));

// HOF ARRAY METHODS
// 16 masala
// function Array(arr) {
//   return arr.map((n) => n * n);
// }  console.log(Array([1, 2, 3, 4, 5]));

// 17 masala
// function count(users) {
//   return users.filter((u) => u.isAdmin === true);
// }
// let users = [
//   { name: "Ali", isAdmin: true },
//   { name: "Sabena", isAdmin: false },
//   { name: "Sardor", isAdmin: true },
// ]; console.log(count(users));

// 18 masala
// function fn(arr) {
//   return arr.some((n) => n < 0);
// }  let numbers = [3, 5, -2, 7];
// console.log(fn(numbers));

// 19 masala
// function Count(arr) {
//   return arr.every((n) => n > 0);
// } let numbers = [3, 5, 2, 7];
// console.log(Count(numbers));

// 20 masala
// function Array(arr) {
//   return arr.reduce((son, n) => son + n, 0);
// } let numbers = [3, 5, 2, 7];
// console.log(Array(numbers));

// FUNCTIONS
// 21 masala
// function max(a, b) {
//   return a > b ? a : b;
// } console.log(max(10, 7));

// 22 masalA
// function count(a, h) {
//   return (a * h) / 2;
// } console.log(count(5, 10));

// 25 masala
// function Count(n) {
//   if (n < 1) return [];
//   return [n, ...Count(n - 1)];
// }
// let result = Count(5);
// console.log(result);
