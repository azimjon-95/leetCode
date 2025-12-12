// // JavaScript Exercises Collection
// // Author: Azimjon (based on provided snippets)
// // Date: November 15, 2025
// // Description: Compilation of various JS exercises, loops, arrays, strings, LeetCode-inspired problems, and more.
// // All sections are preserved from original snippets, with minor cleanups for syntax and organization.
// // Use: Run in Node.js or browser console.

// // ===================================
// // Extract digits from a number (hundreds, tens, ones)
// // ===================================
// let a = 123;
// let on = a % 10;
// a = parseInt(a / 10);
// let ten = a % 10;
// a = parseInt(a / 10);
// let hun = a % 10;
// console.log(hun, ten, on);
// console.log(hun + ten + on);

// // ===================================
// // Swap two variables without extra temp (but using temp here)
// // ===================================
// let a = 3;  // Becomes 2
// let b = 2;  // Becomes 3
// let tem;
// tem = a;
// a = b;
// b = tem;
// console.log(a, b);

// // ===================================
// // Check if number is even or odd
// // ===================================
// let a = 2;
// console.log(a % 2 === 0 && "Juft son" || "Toq son");

// // ===================================
// // Floating point precision check
// // ===================================
// let sum = (0.1 + 0.2).toFixed(1);
// console.log(+sum === 0.3);

// // ===================================
// // Check if value is a number
// // ===================================
// let num = 2;
// console.log(typeof num === "string" && "Son emas" || "Son");

// // ===================================
// // Count characters excluding spaces in string
// // ===================================
// let str = "Azimjon Aka Dasturchi Uz";
// // console.log(str.trim().split('').filter(s => s !== ' ').length);
// let emptySpaseCount = 1;
// for (let letter of str) {
//     if (letter === " ") {
//         emptySpaseCount += letter.length;
//     }
// }
// console.log(emptySpaseCount);

// // ===================================
// // Count letters vs digits in string (lowercase normalized)
// // ===================================
// let str = "azimjon34Aka6 7d0asturchi67uz";
// let strRes = 0;
// let numRes = 0;
// for (let i of str.toLowerCase()) {
//     if (i === " ") continue;
//     if (i === i.toUpperCase()) {
//         numRes += i.length
//     } else {
//         strRes += i.length
//     }
// }
// console.log(`String-${strRes}, Number-${numRes}`);

// // ===================================
// // Filter falsy values from array
// // ===================================
// let array = ["WEB", false, "PDP", 4, "", 0, true, 1, null, "NT", undefined];
// let arr = array.filter((val) => !val)
// let newArr = [];
// for (let i = 0; i <= array.length; i++) {
//     if (!array[i]) {
//         newArr.push(array[i]);
//     }
// }
// console.log(newArr);

// // ===================================
// // Find max in array
// // ===================================
// let arr = [1, 2, 4, 33, 3, 5, 6, 7, 11, 8, 9, 10, 44];
// let res = arr[0]
// for (let i of arr) {
//     if (i > res) {
//         res = i
//     }
// }
// console.log(res);

// // ===================================
// // Find longest string in array
// // ===================================
// let arr = ["Azimjon", "Alisher", "MuhammadDior", "Nematjon", "MuhammadAlijon", "Nodir", "Nodirjon", "Bahrom", "Bekmurodjon"];
// let res = arr[0].length;
// for (let val of arr) {
//     if (val.length > res) {
//         res = val
//     }
// }
// console.log(res);

// // ===================================
// // Remove duplicates from array (sorted)
// // ===================================
// let arr = [1, 44, 2, 4, 33, 2, 5, 6, 7, 11, 1, 8, 9, 10, 7, 44];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//         res.push(arr[i]);
//     }
// }
// console.log(res);

// // ===================================
// // Sum numbers in nested array (recursive)
// // ===================================
// let arr = [[2, [0, [5], 1], 3], 5, 1]; // Expected sum: 17
// const getCount = (a) => {
//     let res = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (Array.isArray(a[i])) {
//             let o = getCount(a[i]);
//             console.log(o);
//             res += o;
//         } else {
//             res += a[i];
//         }
//     }
//     return res;
// }
// let res = getCount(arr);
// console.log(res);

// // ===================================
// // Generate sequence from min to max of array
// // ===================================
// let arr = [2, 4, 5, 8, 10, 15, 20];
// let start = arr[0];
// let end = arr[arr.length - 1];
// let res = [];
// for (let i = start; i <= end; i++) {
//     res.push(i)
// }
// console.log(res);

// // ===================================
// // Merge two arrays, sort, and print
// // ===================================
// let arr1 = [2, 4, 5, 8, 10, 15, 20, 4, 17, 18,];
// let arr2 = [1, 3, 6, 7, 9, 11, 12, 13, 14, 16, 19];
// let array = [...arr1, ...arr2];
// array.sort((a, b) => a - b);
// for (let i = 0; i <= array.length; i++) {
//     console.log(array[i]);
// }

// // ==================-LeetCode-=====================
// // Union-Find for connected components (processQueries)
// // ==================-LeetCode-=====================

// var processQueries = function (c, connections, queries) {
//     const parent = Array.from({ length: c }, (_, i) => i);
//     const rank = Array(c).fill(1);

//     const find = (u) => {
//         if (parent[u] !== u) {
//             parent[u] = find(parent[u]);
//         }
//         return parent[u];
//     };

//     const union = (u, v) => {
//         const rootU = find(u);
//         const rootV = find(v);

//         if (rootU !== rootV) {
//             if (rank[rootU] > rank[rootV]) {
//                 parent[rootV] = rootU;
//             } else if (rank[rootU] < rank[rootV]) {
//                 parent[rootU] = rootV;
//             } else {
//                 parent[rootV] = rootU;
//                 rank[rootU]++;
//             }
//         }
//     };

//     for (const [u, v] of connections) {
//         union(u, v);
//     }

//     const result = [];
//     for (const [u, v] of queries) {
//         result.push(find(u) === find(v) ? 1 : 0);
//     }
//     return result
// };

// processQueries(5, [[0, 1], [0, 2], [1, 3], [1, 4]], [[0, 1], [1, 0], [0, 1], [0, 1], [1, 0]]);

// // ==========================================================================================
// // For...of loop on array
// // ==========================================================================================
// const fruits = ["apple", "banana", "cherry"];
// for (let i of fruits) {
//     console.log(i);
// }

// // ==========================================================================================
// // Print even numbers from array
// // ==========================================================================================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i of numbers) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// // ==========================================================================================
// // Sum odd numbers
// // ==========================================================================================
// const nums = [3, 7, 2, 8, 5, 9];
// let res = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//         res += nums[i]
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Find max
// // ==========================================================================================
// const arr = [4, 9, 2, 7, 5, 2, 8];
// let res = arr[0];
// for (let i of arr) {
//     if (i > res) {
//         res = i
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Find min
// // ==========================================================================================
// const numbers = [11, 3, 7, 2, 9, 5];
// let res = numbers[0];
// for (let i of numbers) {
//     if (i < res) {
//         res = i
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Sum evens
// // ==========================================================================================
// const arr = [4, 9, 2, 7, 6, 3, 8];
// let res = 0;
// for (let i of arr) {
//     if (i % 2 === 0) {
//         res += i
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Double each element
// // ==========================================================================================
// const arr = [5, 10, 15, 20, 25];
// for (let i of arr) {
//     console.log(i + i);
// }

// // ==========================================================================================
// // Square each element
// // ==========================================================================================
// const arr = [2, 4, 6, 8, 10];
// for (let i of arr) {
//     console.log(i * i);
// }

// // ==========================================================================================
// // Double and collect in new array
// // ==========================================================================================
// const arr = [1, 2, 3, 4, 5];
// let newArr = []
// for (let i of arr) {
//     let res = i * 2;
//     newArr.push(res)
// }
// console.log(newArr);

// // ==========================================================================================
// // Filter evens
// // ==========================================================================================
// const arr = [3, 8, 12, 5, 6, 15, 20];
// let res = [];
// for (let i of arr) {
//     if (i % 2 === 0) res.push(i)
// }
// console.log(res);

// // ==========================================================================================
// // Triple evens
// // ==========================================================================================
// const arr = [1, 3, 4, 6, 7, 8, 10];
// let res = [];
// for (let i of arr) {
//     if (i % 2 === 0) {
//         let val = i * 3;
//         res.push(val)
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Double odds
// // ==========================================================================================
// const arr = [2, 5, 7, 8, 10, 12];
// let res = [];
// for (let i of arr) {
//     if (i % 2 !== 0) {
//         let val = i * 2;
//         res.push(val)
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Square evens
// // ==========================================================================================
// const arr = [1, 3, 4, 6, 7, 8, 10];
// let res = [];
// for (let i of arr) {
//     if (i % 2 == 0) {
//         let val = i * i;
//         res.push(val)
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Sum elements > 10
// // ==========================================================================================
// const arr = [5, 10, 15, 20, 25, 30];
// let res = 0;
// for (let i of arr) {
//     if (i > 10) {
//         res += i;
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Find max and min
// // ==========================================================================================
// const arr = [12, 5, 8, 130, 44, 2];
// let max = arr[0];
// let min = arr[0];
// for (const i of arr) {
//     if (i > max) {
//         max = i;
//     }
//     if (i < min) {
//         min = i;
//     }
// }
// console.log("Eng katta:", max);
// console.log("Eng kichik:", min);

// // ==========================================================================================
// // Sum odds and square them
// // ==========================================================================================
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = 0;
// let newArr = [];
// for (const i of arr) {
//     if (i % 2 !== 0) {
//         res += i;
//         newArr.push(i * i);
//     }
// }
// console.log("Yig‘indisi:", res);
// console.log("Kvadratlari:", newArr);

// // ==========================================================================================
// // Conditional multiply (x2 if >10, x3 else)
// // ==========================================================================================
// const arr = [5, 10, 15, 20, 25];
// let newArr = [];
// for (let i of arr) {
//     if (i > 10) {
//         newArr.push(i * 2);
//     }
//     else {
//         newArr.push(i * 3);
//     }
// }
// console.log(newArr);

// // ==========================================================================================
// // Uppercase strings longer than 5 chars
// // ==========================================================================================
// const arr = ["apple", "banana", "cherry", "date", "fig", "grape"];
// let res = [];
// for (let i of arr) {
//     let val = i.length > 5;
//     if (val) {
//         let toUp = i.toUpperCase();
//         res.push(toUp)
//     } else res.push(i)
// }
// console.log(res);

// // ==========================================================================================
// // Print square roots
// // ==========================================================================================
// const numbers = [4, 9, 16, 25, 36, 49, 64];
// let res = [];
// for (let i of numbers) {
//     console.log(Math.sqrt(i));
// }

// // ==========================================================================================
// // Nested array traversal
// // ==========================================================================================
// const arr = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
// ];
// for (let i = 0, j = 0; i < arr.length;) {
//     console.log(arr[i][j]);
//     j++;
//     if (j === arr[i].length) {
//         i++;
//         j = 0;
//     }
// }

// // ==========================================================================================
// // Filter unique elements (non-duplicates)
// // ==========================================================================================
// const arr = [2, 4, 5, 2, 3, 4, 7, 8, 8];
// console.log(arr.filter((item, inx, array) => {
//     return array.indexOf(item) === array.lastIndexOf(item);
// }));

// // ==========================================================================================
// // Student grades: sum and average
// // ==========================================================================================
// const students = [
//     { name: "Ali", grade: 85 },
//     { name: "Vali", grade: 92 },
//     { name: "Gul", grade: 78 },
//     { name: "Sara", grade: 90 }
// ];
// let res = 0;
// for (let i of students) {
//     res += i.grade
// }
// console.log("Yig‘indi:", res);
// console.log("O‘rtacha:", res / students.length);

// // ==========================================================================================
// // Students with grade >=90
// // ==========================================================================================
// const students = [
//     { name: "Ali", grade: 85 },
//     { name: "Vali", grade: 92 },
//     { name: "Gul", grade: 78 },
//     { name: "Sara", grade: 90 },
//     { name: "Olim", grade: 67 }
// ];
// let res = [];
// for (let i of students) {
//     if (i.grade >= 90) {
//         res.push(i.name)
//     }
// }
// console.log(res);

// // ==========================================================================================
// // Average grades with loop counter
// // ==========================================================================================
// const students = [
//     { name: "Ali", grades: [85, 90, 78] },
//     { name: "Vali", grades: [92, 88, 95] },
//     { name: "Gul", grades: [78, 81, 74] },
//     { name: "Sara", grades: [90, 91, 89] }
// ];
// let iter = 0;
// for (let i of students) {
//     iter++;
//     let val = 0;
//     let res = i.grades;
//     for (let j of res) {
//         iter++;
//         val += j
//     }
//     let dar = val / i.grades.length;
//     console.log(`Loop ${iter}: ${i.name}, ${dar.toFixed(2)}`);
// }

// // ==========================================================================================
// // Grade classification
// // ==========================================================================================
// const students = [
//     { name: "Ali", grades: [85, 90, 78] },
//     { name: "Vali", grades: [92, 88, 95] },
//     { name: "Gul", grades: [78, 81, 74] },
//     { name: "Sara", grades: [90, 91, 89] },
//     { name: "Olim", grades: [67, 70, 72] }
// ];
// for (let i of students) {
//     let arr = i.grades;
//     let num = 0;
//     for (let j of arr) {
//         num += j
//     }
//     let b = num / i.grades.length;
//     if (b >= 90) console.log(`${i.name}: ${b.toFixed(2)} - Excellent`);
//     else if (b >= 80 && b < 90) console.log(`${i.name}: ${b.toFixed(2)} - Good`);
//     else if (b >= 70 && b < 80) console.log(`${i.name}: ${b.toFixed(2)} - Needs Improvement`);
//     else if (b >= 60 && b < 70) console.log(`${i.name}: ${b.toFixed(2)} - Poor`);
// }

// // ==========================================================================================
// // Students with avg >80
// // ==========================================================================================
// const students = [
//     { name: "Ali", grades: [85, 90, 78] },
//     { name: "Vali", grades: [92, 88, 95] },
//     { name: "Gul", grades: [78, 81, 74] },
//     { name: "Sara", grades: [90, 91, 89] },
//     { name: "Olim", grades: [67, 70, 72] }
// ];
// let newArr = [];
// for (let i of students) {
//     let arr = i.grades;
//     let num = 0;
//     for (let j of arr) {
//         num += j
//     }
//     let count = num / i.grades.length;
//     if (count.toFixed(2) > 80) {
//         newArr.push(
//             {
//                 name: i.name,
//                 avg: count.toFixed(2)
//             }
//         );
//     }
// }
// console.log(newArr);

// // ==========================================================================================
// // Students >80 with first/last grade
// // ==========================================================================================
// const students = [
//     { name: "Ali", grades: [85, 90, 78] },
//     { name: "Vali", grades: [92, 88, 95] },
//     { name: "Gul", grades: [78, 81, 74] },
//     { name: "Sara", grades: [90, 91, 89] },
//     { name: "Olim", grades: [67, 70, 72] }
// ];
// let newArr = [];
// for (let i of students) {
//     let num = i.grades.reduce((a, b) => a + b, 0);
//     let count = num / i.grades.length;
//     if (count.toFixed(2) > 80) {
//         let start = i.grades[0];
//         let end = i.grades[i.grades.length - 1];
//         newArr.push(
//             {
//                 name: i.name,
//                 avg: count.toFixed(2),
//                 max: start,
//                 min: end,
//             }
//         );
//     }
// }
// console.log(newArr);

// // ==========================================================================================
// // Products profit
// // ==========================================================================================
// const products = [
//     { name: "Phone", buy: 500, sell: 650 },
//     { name: "Laptop", buy: 1000, sell: 1200 },
//     { name: "Tablet", buy: 300, sell: 280 },
//     { name: "TV", buy: 800, sell: 950 }
// ];
// let res = [];
// for (let i of products) {
//     let b = i.sell - i.buy;
//     res.push({
//         name: i.name,
//         profit: b
//     })
// }
// console.log(res);

// // ==========================================================================================
// // Total profit per product from multiple sells (single loop)
// // ==========================================================================================
// // Mahsulotlar ro‘yxati
// const products = [
//     { name: "Phone", buy: 500, sells: [650, 700, 680] },
//     { name: "Laptop", buy: 1000, sells: [1200, 1300] },
//     { name: "Tablet", buy: 300, sells: [280, 310, 330, 300] },
//     { name: "TV", buy: 800, sells: [950, 970] }
// ];
// // Natijani saqlash uchun bo‘sh array
// let result = [];
// // Indekslar
// let j = 0;  // ichki sells uchun
// // Har bir mahsulotning jami foydasi
// let total = 0;
// // 🔥 Faqat bitta for ishlatamiz
// for (let i = 0; i < products.length;) {
//     console.log(products[i].sells[j]);
//     // Har bir sotilgan narxdan buy narxni ayiramiz
//     total += products[i].sells[j] - products[i].buy;
//     // Ichki sells indeksini oshiramiz
//     j++;
//     // Agar shu productdagi barcha sells tugasa:
//     if (j >= products[i].sells.length) {
//         // Natijani result massiviga qo‘shamiz
//         result[result.length] = {
//             name: products[i].name,
//             totalProfit: total
//         };
//         // Keyingi productga o‘tamiz
//         i++;
//         // j ni 0 ga qaytaramiz, chunki yangi mahsulotning sells boshi
//         j = 0;
//         // totalni tozalaymiz, chunki yangi mahsulot uchun foyda yana hisoblanadi
//         total = 0;
//     }
// }
// // Yakuniy natijani ko‘rsatamiz
// console.log(result);

// // ==========================================================================================
// // LeetCode: Length of Longest Substring Without Repeating Characters
// // ==========================================================================================
// function lengthOfLongestSubstring(str) {
//     let seen = {};
//     let start = 0;
//     let max = 0;
//     for (let i = 0; i < str.length; i++) {
//         const ch = str[i];
//         if (seen[ch] >= start) {
//             start = seen[ch] + 1;
//         }
//         seen[ch] = i;
//         const length = i - start + 1;
//         if (length > max) {
//             max = length;
//         }
//     }
//     return max;
// }
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // 3
// console.log(lengthOfLongestSubstring("abba"));     // 2
// console.log(lengthOfLongestSubstring("dvdf"));     // 3
// console.log(lengthOfLongestSubstring(""));         // 0

// // ==========================================================================================
// // Find max (buggy original, fixed below)
// // ==========================================================================================
// function findMax(arr) {
//     let res = arr[0];
//     for (let i = 0; i <= arr.length; i++) {
//         console.log(arr[i] >= res);
//     }
//     return res;
// }
// console.log(findMax([3, 7, 2, 9, 4, 1, 5])); // 9

// // ==========================================================================================
// // Arguments length
// // ==========================================================================================
// var argumentsLength = function (...args) {
//     return args.length
// };
// console.log(argumentsLength(5));     // 1 ta argument
// console.log(argumentsLength({}, null, "3")); // 3 ta argument

// // ==========================================================================================
// // Debounce function
// // ==========================================================================================
// var debounce = function (fn, t) {
//     return function (...args) {
//         clearTimeout(timer)
//         timer = setTimeout(() => fn(...args), t)
//     }
// };
// const dlog = debounce(console.log, 100);
// dlog("Salom", 123);

// // ==========================================================================================
// // Add two promises (async)
// // ==========================================================================================
// var addTwoPromises = async function (promise1, promise2) {
//     promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));
//     promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));
//     return promise1, promise2
// };

// // ==========================================================================================
// // Cancellable function
// // ==========================================================================================
// var cancellable = function (fn, args, t) {
//     console.log(fn, args, t);
// };
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// // keyinchalik tashqarida:
// setTimeout(cancelFn, 50); // 50ms da cancelFn chaqiriladi

// // ==========================================================================================
// // ArrayWrapper sum (buggy, fixed: sum all elements)
// // ==========================================================================================
// var ArrayWrapper = function (nums) {
//     let res = 0;
//     for (let i of nums.flat()) {  // Fixed: flatten nested
//         res += i
//     }
//     return res;
// };
// console.log(ArrayWrapper([[1, 2], [3, 4, 5]])); // 15

// // ==========================================================================================
// // Reverse string
// // ==========================================================================================
// // Input: "hello" → Output: "olleh"
// const reverseStr = (str) => {
//     let res = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         res += str[i];
//     }
//     return res;
// }
// console.log(reverseStr("hello"));
// console.log(reverseStr("azimjon"));

// // Print odds from 1 to 20
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// // ==========================================================================================
// // Pyramid pattern (8 rows)
// // ==========================================================================================

// let rows = 8;
// for (let i = 1; i <= rows; i++) {
//     let line = "";
//     for (let j = 1; j <= rows + i - 1; j++) {
//         if (j <= rows - i) {
//             line += " ";
//         } else {
//             line += "*";
//         }
//     }
//     console.log(line);
// }


// // ==========================================================================================
// // Reverse and print lowercase
// // ==========================================================================================
// const reverseStr = (str) => {
//     let res = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         res += str[i]
//     }
//     let newStr = res.toLowerCase()
//     // console.log(newStr);
//     // console.log(newStr[j - newStr.length + 1]);
//     for (let j = 0; j < newStr.length; j++) {
//         if (newStr[j]) {
//             console.log(newStr[j]);
//         }
//     }
//     return res;
// }
// // console.log(reverseStr("Hello"));
// // console.log(reverseStr("Azimjon"));
// reverseStr("Hello");
// reverseStr("Azimjon");

// // ==========================================================================================
// // Find max
// // ==========================================================================================
// const arr = [10, 20, 322, 40, 5];
// let b = arr[0];
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > b) {
//         b = arr[i];
//     }
// }
// console.log(b);

// // ==========================================================================================
// // Find min
// // ==========================================================================================
// const arr = [10, 1, 20, 322, 40, 5];
// let b = arr[0];
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] < b) {
//         b = arr[i];
//     }
// }
// console.log(b);

// // ==========================================================================================
// // Find duplicates (original buggy)
// // ==========================================================================================
// const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// let b = arr[0];
// let i = 0;
// let j = 0;
// for (i, j; i < arr.length; i++) {
//     j++
//     if (arr[i] === arr[j]) {
//         console.log(arr[i]);
//     }
// }

// // ==========================================================================================
// // Reverse string
// // ==========================================================================================
// // "hello"  => "olleh"
// const revorseStr = (str) => {
//     let res = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         res += str[i]
//     }
//     return res
// }
// console.log(revorseStr("hello"));

// // ==========================================================================================
// // Palindrome check
// // ==========================================================================================
// const palindromStr = (str) => {
//     let revorse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revorse += str[i]
//     }
//     return str === revorse;
// }
// console.log(palindromStr("level"));
// console.log(palindromStr("test"));
// console.log(palindromStr("ohho"));

// // ==========================================================================================
// // FizzBuzz 1-99
// // ==========================================================================================
// for (let i = 1; i < 100; i++) {
//     let fizz = i % 3 === 0;
//     let buzz = i % 5 === 0;
//     let fizzbuzz = i % 3 === 0 && i % 5 === 0;
//     if (fizz) console.log("Fizz");
//     else if (buzz) console.log("Buzz");
//     else if (fizzbuzz) console.log("FizzBuzz");
//     else console.log(i);
// }

// // ==========================================================================================
// // Sum array
// // ==========================================================================================
// const arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
// }
// console.log(res);

// // ==========================================================================================
// // Remove duplicates (fixed version from conversation)
// // ==========================================================================================

// const arr = [1, 2, 4 ,3, 4, 5, 2];
// let i = 0, j = 0;
// let result = [];

// for (i, j; i < arr.length; i++) {
//     j++;
//     let b = 0;
//     if (arr[i] !== arr[j]) b = arr[i];


//     if (b !== 0 && arr[i] !== arr[i - 1]) {
//         result.push(b);
//     }
// }
// console.log(result);

// // ==========================================================================================
// // Massivni flatten (ichma-ich massivlarni tekislash)
// // ==========================================================================================
// let a = [1, [2, 3], [4, [5]]];

// let result = [];
// function getCount(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) getCount(arr[i]);

//         else if (arr[i] !== undefined) {
//             result.push(arr[i]);
//         }
//     }
// }
// getCount(a);
// console.log(result);

// // ==========================================================================================
// // Object ichidagi key-sonni sanang
// // ==========================================================================================

// const obj = { a: 1, b: 2, c: 3 }
// console.log(Object.keys(obj).length);

// // ==========================================================================================
// // Beshta eng ko‘p uchraydigan harfni toping
// // ==========================================================================================
// let str = "javascript";

// let count = {};

// for (let i = 0; i < str.length; i++) {
//     const current = str[i];

//     if (count[current]) {
//         count[current] = count[current] + 1;
//     }
//     else {
//         count[current] = 1
//     }
// }

// let maxCount = 0;
// let maxChar = "";

// for (const key in count) {
//     if (count[key] > maxCount) {
//         maxCount = count[key];
//         maxChar = key;
//     }
// }

// let result = {};
// result[maxChar] = maxCount;


// console.log(result);

// // ==========================================================================================
// // Objectlarni chuqur klonlash
// // ==========================================================================================

// let userInfo = {
//     fullname: "Azimjon Mamutaliyev",
//     age: 30,
//     address: "Namangan Pop",
//     phone: 998944324454,
//     specialization: "Front-End Developer",
//     skills: ["HTML", "CSS", "JavaScript", "React Js", "Github", "Redux", "Redux-toolkit"]
// };

// function deepClone(obj) {
//     if (typeof obj === "object") return obj;

//     let current = {};
//     for (const key in obj) {
//         current[key] = obj[key]
//     }
//     return current;
// }

// let newObj = deepClone(userInfo);

// console.log(newObj);

// // ==========================================================================================
// // Array ichidagi objectlarni value bo‘yicha sort qiling
// // ==========================================================================================

// let arr = [{ age: 30 }, { age: 20 }, { age: 25 }];

// let res = arr.sort((a, b) => a.age - b.age, 0);

// let newObj = [];
// for (const i of arr) {
//     newObj.push(i);
// }
// console.log(newObj);

// // ==========================================================================================
// // Har bir elementni kvadratga ko‘paytiring
// // ==========================================================================================

// let arr = [1, 2, 3];

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     let res = element * element;
//     newArr.push(res);

// }
// console.log(newArr);

// // ==========================================================================================
// // Function debouncer yozing
// // ==========================================================================================

// // Debouncer ni input eventga bog'lash
// const input = document.getElementById('searchInput');
// const debouncedSearch = debounce(searchAPI, 500); // 500ms kutish

// // ==========================================================================================
// // Throttle function yozing
// // ==========================================================================================

//  window.removeEventListener('scroll', throttledScroll.current);

// // ==========================================================================================
// // Massiv ichidagi eng ko‘p takrorlangan elementni toping
// // ==========================================================================================

// let arr = [1, 1, 2, 3, 3, 3];

// let counts = {};
// for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];

//     if (counts[value]) {
//         counts[value]++
//     } else {
//         counts[value] = 1;
//     }
// }
// let maxCount = 0;
// let maxNumber = null;
// for (let key in counts) {
//     if (counts[key] > maxCount) {
//         maxCount = counts[key];
//         maxNumber = key;
//     }
// }

// console.log(maxNumber);

// // ==========================================================================================
// // String ichidagi so‘zlar sonini hisoblang
// // ==========================================================================================

// let str = "I love JavaScript and PHP";

// let count = 1;
// for (const i in str) {
//     if (str[i] === " ") {
//         count++
//         count += str[i]
//     }
// }
// console.log(count);

// // ==========================================================================================
// // Promise qaytaradigan funksiyani yozing
// // ==========================================================================================


// const myComp = async (data) => {
//     try {
//         return data;
//     } catch (err) {
//         console.log(err);
//     }
// };

// myComp([1, 1, 2, 3, 3, 3])
//     .then(res => {
//         console.log("Natija:", res);
//     })
//     .catch(err => {
//         console.log("Xato:", err);
//     })
//     .finally(() => {
//         console.log("Tugadi");
//     });



// // ==========================================================================================
// // Massivni faqat unique qiymatlar bilan qaytaring (deep uniqueness)
// // ==========================================================================================

// function uniqueDeep(arr) {
//     const seen = new Set();
//     const result = [];

//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             const uniqueInner = [...new Set(item)];
//             result.push(uniqueInner);
//         } else {
//             if (!seen.has(item)) {
//                 seen.add(item);
//                 result.push(item);
//             }
//         }
//     }

//     return result;
// }

// let arr = [1, 2, 2, 3, [3, 4], [4, 4]];
// console.log(uniqueDeep(arr));

// // ==========================================================================================
// // MakeCounter funksiyasini yozing.
// // ==========================================================================================

// function makeCounter() {
//     let count = 0;

//     return function () {
//         count += 1;
//         return count;
//     }
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// // ==========================================================================================
// // Vowel count (unli harflar sanash).
// // ==========================================================================================
// vowels = a, e, i, o, u, A, E, I, O, U

// const Vowel = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
//             count++
//         }
//     }
//     return count;
// }
// console.log(Vowel("Hello"));
// console.log(Vowel("JavaScript"));

// // ==========================================================================================
// // Faktoriyal (n!)
// // ==========================================================================================

// const factorial = (n) => {
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i
//     }
//     return res;
// }

// console.log(factorial(5));

// ==========================================================================================
// Prime number tekshirish
// ==========================================================================================

const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true
}

console.log(isPrime(7));
