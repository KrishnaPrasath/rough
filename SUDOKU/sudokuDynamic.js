window.onload = function() {
  var first = 0;
  var second = 0;

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
      ////////////////////////APplying random values/////////////////////////
    }
  }
  apply();
};
var max = 9;
var min = 0;
var random = 0;
function apply() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      random = Math.floor(Math.random() * (max - min + 1) + min);
      setInterval(traverse(i, j, random), 500);
    }
  }
}

function checkVertically(x, y, num) {
  for (let i = 0; i < 9; i++) {
    if (i !== x) {
      if (document.getElementById("" + i + "" + y + "").innerHTML == num) {
        console.log("vert", i, y);
        return false;
      }
    }
  }

  return true;
}

function checkHorizontally(x, y, num) {
  for (let i = 0; i < 9; i++) {
    if (!i === y) {
      if (document.getElementById("" + x + "" + i + "").innerHTML == num) {
        console.log("Hori", x, i);
        return false;
      }
    }
  }

  return true;
}

function traverse(x, y, num) {
  if (checkVertically(x, y, num) && checkHorizontally(x, y, num)) {
    document.getElementById("" + x + "" + y + "").innerHTML = num;
  } else {
    num = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("" + x + "" + y + "").innerHTML = num;
  }
}
