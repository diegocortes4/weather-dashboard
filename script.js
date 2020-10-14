// save input 
let city = $("#searchTerm").val();



const apiKey = "";


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
]