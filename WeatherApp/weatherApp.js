window.onload = function() {
  var response, cityName, url;
  disp(response);
  // function reqListener() {
  //   response = JSON.parse(this.responseText);
  //   console.log(response);

  //   document.getElementById("check").addEventListener("click", function() {
  //     console.log("inner" + response);
  //     cityName = document.getElementById("ip").value;
  //     url =
  //       "https://api.openweathermap.org/data/2.5/weather?q=" +
  //       cityName +
  //       "&APPID=19610237ae6acd5f6dbd0dc45fda71e3";
  //     console.log(url);
  //   });
  // }

  // var oReq = new XMLHttpRequest();
  // oReq.addEventListener("load", reqListener);
  // oReq.open(
  //   "GET",
  //   "https://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=19610237ae6acd5f6dbd0dc45fda71e3"
  // );
  // console.log("url");
  // oReq.send();
  console.log("url");
};

function disp(data) {
  //   document.getElementById("disp").innerHTML = "<h1>" + data.main.temp + "</h1>"
  document.getElementById("disp").innerHTML =
    "<div><a href='#'> </a>  <h4>" +
    data.name +
    "</h4>  <p>" +
    Math.floor(data.main.temp - 273.15) +
    " degree celsius</p></div>";

  function reqListener() {
    response = JSON.parse(this.responseText);
    console.log(response);

    document.getElementById("check").addEventListener("click", function() {
      console.log("inner" + response);
      cityName = document.getElementById("ip").value;
      url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&APPID=19610237ae6acd5f6dbd0dc45fda71e3";
      console.log(url);
    });
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=19610237ae6acd5f6dbd0dc45fda71e3"
  );
  console.log("url");
  oReq.send();
}

//But to make calls you need to use the real API point that listed on the documentation page as text.
// For example: https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
//"https://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=19610237ae6acd5f6dbd0dc45fda71e3",
