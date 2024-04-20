  function callFillPDF( hash, jsonString ) {
    // Define the API endpoint and your API key
    var apiUrl = 'https://fillpdf-074f41d6b1d1.herokuapp.com/download/';

	// var jsonBody = JSON.stringify(data);
	console.log("fillPdf payload = " +  jsonString);
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonString
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
