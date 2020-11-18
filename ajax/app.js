var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let output = "";
		var data = JSON.parse(this.response);
		console.log(data);

		for(var i = 0; i < data.length; i++){
			output += '<li>' + data[i] + '</li>';
		}
		console.log(output);
	document.getElementById('list').innerHTML = output;
	}
};

xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&appid=befb83bbddacf33f9ecfc1a5125d7201", true);
xhttp.send();