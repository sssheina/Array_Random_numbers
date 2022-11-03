let arr = [];

function processArray()
{
	arr = [];
	let random_number;
	
	for(let i = 0; i < 10; i++){
		random_number = Math.floor(Math.random() * 20 - 10);
		arr.push(random_number);
	}
	
	document.getElementById("displayArray").textContent = arr.join(" ");
	document.getElementById("displayMin").textContent = Math.min(...arr);
	document.getElementById("displayMax").textContent = Math.max(...arr);
	document.getElementById("displayAverage").textContent = arr.reduce((a, b) => a + b, 0) / arr.length;
	document.getElementById("displaySum").textContent = arr.reduce((a, b) => a + b, 0);
	document.getElementById("displayProduct").textContent = arr.reduce((a, b) => a * b, 1);
}