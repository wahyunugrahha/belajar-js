let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

//Cntoh Lain

// Mengubah nilai variabel global
let count = 0;
function increment() {
  count++;
}
 
// Mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
 
// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}
 
// Menulis ke berkas
const fs = require('fs');
 
function writeToFile(data) {
  fs.writeFileSync('data.txt', data);
}