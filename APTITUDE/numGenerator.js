//////////////////324,361,400,441...../////////////////////
let square = function(x, num) {
  let y = Math.sqrt(x);
  let res = 0;
  for (let i = 0; i < num; i++) {
    res += Math.pow(y + i, 2);
    console.log(res);
    res = 0;
  }
};

// square(324, 5);
/////////////////512 729 1000 .../////////////////////

///////////////////4 9 14 19 24 ....////////////////////////
let plusFive = function(x, num) {
  let res = x;
  for (let i = 0; i < num; i++) {
    console.log(res);
    res += 5;
  }
};

plusFive(4, 6);

let sumOfPrev = function(x,y,num){
    let arr = [x,y];
    let res = 0;
    let temp =0;
    for (let i = 0; i < num; i++) {
        res += 
      }

}
