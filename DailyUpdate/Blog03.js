let n = 6;           // rows
let m = 5;           // columns

for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= m; j++) {
    if (i === 1) line += "1 ";
    else if (i === n) line += "5 ";
    else if (j === 1) line += "2 ";
    else if (j === m) line += "3 ";
    else line += "  ";
  }
  console.log(line.trimEnd());
}
