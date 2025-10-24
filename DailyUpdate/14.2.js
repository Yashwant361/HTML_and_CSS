let n = 4;

for (let i = 1; i <= 2 * n - 1; i++) {
  let res = "";
  let spaces, maxNum;

  // space and number conditions
  if (i <= n) {
    spaces = n - i;
    maxNum = i;
  } else {
    spaces = i - n;
    maxNum = 2 * n - i;
  }

  // print spaces
  for (let s = 1; s <= spaces; s++) {
    res += " ";
  }

  // increasing numbers
  for (let j = 1; j <= maxNum; j++) {
    res += j;
  }

  // decreasing numbers
  for (let j = maxNum - 1; j >= 1; j--) {
    res += j;
  }

  console.log(res);
}
