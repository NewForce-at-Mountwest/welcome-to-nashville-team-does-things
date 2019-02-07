const getResults = parkInput =>
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, {
  "$$app_token": "eZXarxsTtJQ2dEhBoLvhCFODS"
})

.then(response=>response.json())
.then(results => {
    for(let i = 0; i < 4; i++){
        document.querySelector("#results").innerHTML += `<li id="results${i}">${results[i].park_name}</li>`
    }
    })


