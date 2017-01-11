$(document).ready(function() {
  var searchValue;
   $("#button").click(function() {
       searchValue = $('#search').val()
       console.log(searchValue)
   });
   $.getJSON(  
      "https://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=dc6zaTOxFJmzC",
     
      function(response) {
        
        console.log(response.data[0].images);
          
        for (var i = 1; i < 6; i++) {
          console.log(i);
          $("#gif").append("<img src=" + response.data[i].images.fixed_width_downsampled.url + ">");
        }
      }); 
  });