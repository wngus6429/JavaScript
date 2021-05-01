let score = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showstep() {
    console.log(this.step);
    //return this;
  },
};

score.up().up().up().down().showstep();
//console.log(score.up().up().up().down().showstep());
