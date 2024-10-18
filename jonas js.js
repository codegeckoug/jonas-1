"use strict";
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForcast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} in ${i + 1} days ... `;
  }
  console.log("... " + str);
}

printForcast(data1);
printForcast(data2);
