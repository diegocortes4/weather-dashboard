// save input 
let city = $("#searchTerm").val();



const apiKey = "b69a5615437d3de0211a03a0a532c603";


let date = new Date();


$("#searchTerm").keypress(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});

$("#searchBtn").on("click", function() {

  $('#forecastH5').addClass('show');

// input from the user  


  city = $("#searchTerm").val();
})

function weatherApi(city){
   var url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey 
   $.ajax({
    url: url,
    type: "GET",
  
  }) .then(function(response){
      console.log(response)

      }
    }
  });

}
  

weatherApi("miami")


