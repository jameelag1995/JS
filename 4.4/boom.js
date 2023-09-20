function boom(n) {
    msg = ""
  for (let i = 1; i <= n; i++) {
    if (i % 7 == 0 && i.toString().includes("7")) {
      msg += "Boom-Boom";
    } else if (i % 7 == 0) {
      msg += "Boom";
    } else {
      msg += i;
    }
    if (i != n){
        msg += ',';
  }
}
console.log(msg);
}
boom(77);
