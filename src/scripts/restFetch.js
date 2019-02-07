// const getRestName = restName => {
//     return (`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchTerm}`, {
//         headers: {
//             "Accept": "application/json",
//             "user-key": "13e43e5dabae83e9a30fed5925e7d1b7"
//         }
//  });
// }


const getFood = searchTerm =>
// fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchTerm}`, {
//          headers: {
//              "Accept": "application/json",
//              "user-key": "13e43e5dabae83e9a30fed5925e7d1b7"
//          }
//     })
fetch("http://localhost:8088/restaurants")
    .then(r => r.json())
    .then(results => {
        console.log(results)
        results.forEach(singleRest => {
                console.log(singleRest.restaurant.name)
            })
        });

   document.querySelector("#foodButton").addEventListener("click", () =>{
   const searchTerm= document.querySelector("#restSearch").value;
   var searchResults = document.querySelectorAll(".resultsSingle")
   searchResults.innerHTML = getFood(searchTerm);
   })

