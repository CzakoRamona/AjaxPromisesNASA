const baseUrl="https://api.nasa.gov/planetary/apod";
var api_key="GfCbpF06jvrNc6smoDiwj7Vxt6pstaBJf9W5IhxO";

var url=new URL(baseUrl);
url.searchParams.set("api_key",api_key);

async function getAstronomicPhotoDayPromise(){
    let response= await fetch("https://api.nasa.gov/planetary/apod?api_key=GfCbpF06jvrNc6smoDiwj7Vxt6pstaBJf9W5IhxO");
    let json=await response.json();
    console.log(json)
    
}

function showPhoto(photoUrl){
    var img=document.getElementById("photo")
    img.src=photoUrl;
}

function showTitle(photoTitle){
    var title=document.getElementById("title");
    
}

getAstronomicPhotoDayPromise()
showPhoto()
showTitle()  