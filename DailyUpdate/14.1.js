let n = 3;

// Top half
for (let i = 1; i <= n; i++) {
  let res = "";

  // spaces
  for (let s = 1; s<= n - i; s++) {
    res += " ";
  }

  // increasing numbers
  for (let j = 1; j <= i; j++) {
    res += j;
  }

  // decreasing numbers
  for (let j = i - 1; j >= 1; j--) {
    res += j;
  }

  console.log(res);
}

// Bottom half (mirror)
for (let i = n - 1; i >= 1; i--) {
  let res = "";

  // spaces
  for (let s = 1; s <= n - i; s++) {
    res += " ";
  }

  // increasing numbers
  for (let j = 1; j <= i; j++) {
    res += j;
  }

  // decreasing numbers
  for (let j = i - 1; j >= 1; j--) {
    res += j;
  }

  console.log(res);
}

