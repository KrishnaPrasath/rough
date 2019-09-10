(function isNumberOne(one) {
  function numberOne() {
    if (this !== 1) {
      throw new Error(`Oh no! I'm not number one!!!:-((((`);
    } else {
      console.log(`I'm definitely number ONE!`);
    }
  }

  numberOne.call(one);
})(1);
