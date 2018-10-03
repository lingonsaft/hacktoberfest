function randomCat() {

	const giphyQuery = "https://api.giphy.com/v1/gifs/search?q=cats&api_key=tVu6hE7VBxXFVXlGGxUDKnF6yveaRJ7a&limit=300"
    fetch(giphyQuery)
    .then(res => res.json())
    .then(r=> {
    	let index = Math.floor(Math.random() * Math.floor(r.data.length-1));
    	let url = r.data[index].embed_url;
		document.getElementById("gif").innerHTML = "<iframe class=\"gifcat\" src=\"" + url + "\"></iframe>"
	})
}
