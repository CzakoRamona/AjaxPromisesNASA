const baseUrl="https://api.nasa.gov/planetary/apod";
var key="eNOpuzl4uLSF0apZlDvsDc5GUrgTizqXlTT9TeZG";

var url=new URL(baseUrl);
url.searchParams.set("key",key);

function getAstronomicPhotoDayPromise(){
    return new Promise(function(resolve,reject){
        fetch(url.href)
        .then(function(response){
            if(response.status===200){
                resolve(response)
            }else{
                response.json().then(function(reason){
                    reject(reason)
                });
            }
        })
        .catch(function(error){
            return new Error("Please try again!")
        })
    })
}
