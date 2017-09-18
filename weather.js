$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position)
    
     
  }
});

function position(pos){
  
  var lat = pos.coords.latitude;
  var lon = pos.coords.longitude;
  var countryUnits = "imperial"
  
  
   
  $.getJSON(" https://cors.5apps.com/?uri=http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&APPID=e4e711b2e03f6d6f10720f84421ba475&lon=" + lon + "&units=" + countryUnits, function(data){
    
    
    
    
    $("#city").html("County: " + data.name);
    
  $("#forecast").html("Forecast: " + data.weather[0].description);
    $("#humidity").html("Humidity: " + data.main.humidity);
    $("#windSpeed").html("Windspeed: " + data.wind.speed);
    $("#temp").html(Math.round(data.main.temp) + " &#8457");
    $("#tempmin").html("Min: " + Math.round(data.main.temp_min) + " &#8457");
    $("#tempmax").html("Max: " + Math.round(data.main.temp_max) + " &#8457");
    
    
    var weatherid = data.weather[0].id;
    
    switch(weatherid){
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/11d.png' class='mark'>";
        $('body').css('background-image', 'url(http://cdn.wallpapersafari.com/98/80/3iAclX.jpg)');
        break;
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/09d.png' class='mark'>";
        $('body').css('background-image', 'url(https://ak8.picdn.net/shutterstock/videos/4198687/thumb/1.jpg?i10c=)');
        break;
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/10d.png' class='mark'>";
        $('body').css('background-image', 'url(https://illuminateddandelion.files.wordpress.com/2016/09/rain.jpg)')
        break;
      case 511:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/13d.png' class='mark'>";
        $('body').css('background-image', 'url(http://media.zuza.com/9/f/9feb78d8-edfd-435e-8779-901742e8f299/888_Outage_Update_1___Monster___Gallery.jpg')
        break;
      case 520:
      case 521:
      case 522:
      case 531:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/09d.png' class='mark'>";
        $('body').css('background-image', 'url(https://illuminateddandelion.files.wordpress.com/2016/09/rain.jpg')
        break;
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/13d.png' class='mark'>";
        $('body').css('background-image', 'url(https://i.ytimg.com/vi/ea1GMrjjJ1A/maxresdefault.jpg')
        break;
      case 701:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
      case 761:
      case 762:
      case 771:
      case 781:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/50d.png' class='mark'>";
        $('body').css('background-image', 'url(https://i.ytimg.com/vi/ea1GMrjjJ1A/maxresdefault.jpg)')
        break;
      case 800:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/01d.png' class='mark'>";
        $('body').css('background-image', 'url(http://allswalls.com/images/clear-sky-wallpaper-1.jpg');
        
        break;
      case 801:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/02d.png' class='mark'>";
        $('body').css('background-image', 'url(http://allswalls.com/images/clear-sky-wallpaper-1.jpg');
      case 802:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/03d.png' class='mark'>";
        $('body').css('background-image', 'url(http://www.publicdomainpictures.net/pictures/60000/velka/cloudy-sky-1376239377cOW.jpg');
        break;
      case 803:
      case 804:
        document.getElementById("tempIcon").innerHTML = "<img src='http://openweathermap.org/img/w/04d.png' class='mark'>";
        $('body').css('background-image', 'url(http://www.publicdomainpictures.net/pictures/60000/velka/cloudy-sky-1376239377cOW.jpg');
        break;
        
                    }
    
    
    var FtoC = 0
    var temp = data.main.temp;
    
    
    $("#units").on("click", function(){
     if(FtoC === 0){
      $("#temp").html(Math.round((temp -32) * 5 / 9) + "&#8451");
      $("#tempmin").html("Min: " + Math.round((data.main.temp_min - 32) * 5 / 9) + " &#8451");
    $("#tempmax").html("Max: " + Math.round((data.main.temp_max - 32) * 5 / 9) + " &#8451");
       $("#units").html("Change to &#8457")
       FtoC = 1;
        
     }else if(FtoC === 1){
       $("#temp").html(Math.round(data.main.temp) + " &#8457");
    $("#tempmin").html("Min: " + Math.round(data.main.temp_min) + " &#8457");
    $("#tempmax").html("Max: " + Math.round(data.main.temp_max) + " &#8457");
       $("#units").html("Change to &#8451")
       FtoC = 0;
     }
      
      
      
      
    });
    
    
    
    
    
    
  }); 
  
    
  
   
  
  
}
