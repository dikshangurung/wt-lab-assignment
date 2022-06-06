/* Sum of all numbers in an array*/
let a = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log("The total sum is " + sum);

/*Reversing array*/
let rev = [1, 2, 3, 4, 5, 6];
let rev2 = [];
let b = 0;
// console.log(rev2[0]);
for (let i = rev.length - 1; i >= 0; i--) {
  rev2[b] = rev[i];
  ++b;
}
// console.log(rev2[0]);
console.log(rev2);
/*Prime numbers in array*/
let p = [3, 6, 7, 8, 9, 13];
let factor = 0;
console.log("Prime numbers are:");
for (let i = 0; i < p.length; i++) {
  for (j = 1; j < p[i]; j++) {
    if (p[i] % j == 0) {
      factor++;
    }
  }
  if (factor < 2) {
    console.log(p[i]);
  }
  factor = 0;
}

/*Array sorting (ascending order)*/
let num = [5, 4, 8, 1, 3];
let temp = 0;
for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] > num[j]) {
      temp = num[j];
      num[j] = num[i];
      num[i] = temp;
    }
  }
}
console.log("The array after sorting it in ascending order is " + num);

/*Array sorting (decending order)*/
let n = [5, 4, 8, 1, 3];
let t = 0;
for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    // console.log(j);
    if (num[i] < num[j]) {
      temp = num[j];
      num[j] = num[i];
      num[i] = temp;
    }
  }
}
console.log("The array after sorting it in ascending order is " + num);

/*Reversing array using 1 array*/
let h = [1, 2, 3, 4, 5, 7, 8, 9];
let te = 0;
let m = 0;
for (let i = 1; i <= h.length / 2; i++) {
  te = h[h.length - i];
  h[h.length - i] = h[m];
  h[m] = te;
  m++;
}
console.log("The array is " + h);
