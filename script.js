let quote = document.getElementById("quote")
let author = document.getElementById("author")

let api_url = "https://go-quote.azurewebsites.net/"

async function getquote(url) {
    let response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.text;
    author.innerHTML = data.author;
    // console.log(data);           
}
getquote(api_url)

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "   ---- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}