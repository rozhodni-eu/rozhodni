  function callEcomailAPI() {
    // Define the API endpoint and your API key
    var apiUrl = 'https://api2.ecomailapp.cz/lists/3/subscribe';
    var apiKey = '94d385413306f83c8c825e463311102de63a306d5bd820b455b1ef0a050167a7';
	
    var priezvisko = document.getElementById("Priezvisko").value;
    var meno = document.getElementById("Meno").value;
	  var email = document.getElementById("mail").value;
	
    var data = {
		
		  "subscriber_data": {
		    "name": meno,
		    "surname": priezvisko,
		    "email": email
		  },
		  "trigger_autoresponders": true
		
    };
	

	var jsonBody = JSON.stringify(data);
	console.log("Ecomail payload = " +  jsonBody);
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'key': apiKey
      },
      body: jsonBody
    })
    .then(response => {
      if (response.ok) {
        console.log('API call successful');
      } else {
        console.error('Error:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
