// function searchForCity() {
//   const button = document.querySelector('button');

// $(document).on(click, '#button', function(event) {
//   document.querySelector(user-form)
    
var cityName =  document.getElementById("enteredCity");  


var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=29db3e39166d9e6cd66b3d8c676736da";
  
searchForCity = function(CityName) {

  // make a get request to url
 // make a get request to url
 fetch(apiUrl)
 .then(function(response) {
   // request was successful
   if (response.ok) {
     console.log(response);
     response.json().then(function(data) {
       console.log(data);
       displayRepos(data, user);
     });
   } else {
     alert("Error: " + response.statusText);
   }
 })
 .catch(function(error) {
   alert("Unable to connect to GitHub");
 });

          

searchByCityForm.addEventListener("submit", form-inputHandler);        

searchForCity();
