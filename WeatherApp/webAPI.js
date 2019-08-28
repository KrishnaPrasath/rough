var cityName, url, data;
var xHttp = new XMLHttpRequest();
window.onload = function() {
  console.log("click");
  document.getElementById("check").addEventListener("click", function() {
    cityName = document.getElementById("ip").value;
    console.log(cityName);
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&APPID=19610237ae6acd5f6dbd0dc45fda71e3";

    xHttp.addEventListener("load", function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        data = JSON.parse(this.responseText);
        document.getElementById("disp").innerHTML =
          "<div><a href='#'> </a>  <h4>" +
          data.name +
          "</h4>  <p>" +
          Math.floor(data.main.temp - 273.15) +
          " degree celsius</p></div>";
      }
    });

    xHttp.open("GET", url);
    xHttp.send();
  });
};
