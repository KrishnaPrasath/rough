const command = "???";

const bomb = (function bomb() {
  let detonators = 1 | 4 | 2;
  return Object.freeze({
    valueOf: function() {
      detonators &= 4;
      return this;
    },
    toString: function() {
      detonators -= Math.ceil(detonators / 2);
      return this;
    },
    disarm: function() {
      if (detonators) {
        this.explode();
      }
      console.log("Bomb disarmed :-)");
    },
    explode: function() {
      throw new Error("BOOM!!!");
    }
  });
})();

(function sapper(bomb, command) {
  "use strict";
  try {
    eval(command + bomb.toString());
  } catch (e) {}
  bomb.disarm();
})(bomb, command);
