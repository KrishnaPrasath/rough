let board = [
  [2, 8, 6, 7, 5, 4, 9, 3, 1],
  [9, 3, 1, 2, 8, 6, 7, 5, 4],
  [7, 5, 4, 9, 1, 3, 8, 6, 2],
  [8, 9, 2, 6, 7, 5, 4, 1, 3],
  [6, 7, 5, 4, 3, 1, 2, 9, 8],
  [4, 1, 3, 8, 9, 2, 6, 7, 5],
  [5, 6, 9, 3, 4, 8, 1, 2, 7],
  [3, 4, 7, 1, 2, 9, 5, 8, 6],
  [1, 2, 8, 5, 6, 7, 3, 4, 9]
];
window.onload = function() {
  var first = 0;
  var second = 0;
  var random;
  var max = 9;
  var min = 0;
  ///////////////////Generate dynamic <td>//////////////////////////
  for (let q = 0; q < 9; q++) {
    document.getElementById("tab").innerHTML += "<tr id=tr" + q + "> </tr>";

    for (let w = 0; w < 9; w++) {
      document.getElementById("tr" + q + "").innerHTML +=
        "<td id=" + first + "" + second + "></td>";

      if (second < 8) {
        second++;
      } else if (second === 8) {
        first++;
        second = 0;
      }
    }
  }

  ///////////////////////////////////////////////
  random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      document.getElementById("" + i + "" + j + "").innerHTML = board[i][j];
      if (
        j === Math.floor(Math.random() * (max - min + 1) + min) ||
        i === Math.floor(Math.random() * (max - min + 1) + min)
      ) {
        console.log(j);
        document.getElementById("" + i + "" + j + "").innerHTML = "";
      }
    }
  }
};
