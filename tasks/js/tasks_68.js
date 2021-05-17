






//			tasks № 70

const url = location.pathname;

function urlUser (url) {
	if (url.substr(-4) == ".php") {
		url = "Да строка заканчивается на .php";
	} else {
		url = "Not a string of .php";
	}
	return url;
}

console.log(urlUser(url));