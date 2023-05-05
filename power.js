let n = process.argv[2];
n = parseInt(n);

for (let i = 0; i <= n; i++) {
  console.log("2^" + i + " = " + Math.pow(2, i));
}
