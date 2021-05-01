let calculator = {
  read() {
    read1 = Number(prompt("값1"));
    read2 = Number(prompt("값2"));
  },
  sum() {
    return read1 + read2;
  },
  mul() {
    return read1 * read2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

