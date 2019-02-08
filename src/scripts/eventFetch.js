// This the script file to pull information for the API for Nashville Events and then display results in the "Here's what we found"

const eventKeywords = searchEventKeyword =>
fetch("https://www.eventbriteapi.com/v3/events/search/?q=nashville_coding&token=YNYWXAM4XRQXRPS65ZCV", {
 headers: {
   "Authorization": "Bearer YNYWXAM4XRQXRPS65ZCV",
   "Accept": "application/json"
 }
})
// This will loop through until it applies the first 4 results to the results container.
.then(events => events.json())
.then(results =>{  
  for(let i = 0; i < 4; i++){
    console.log(results.events[i])  
    document.querySelector("#results").innerHTML += `<li id ="results${i}">${results.events[i].name.text}</li>`
    }
  })
document.querySelector("#eventButton").addEventListener("click", () =>{
  const searchEventKeyword= document.querySelector("#eventsSearch").nodeValue;
  var searchResults = document.querySelectorAll("#results")
  searchResults.innerHTML = eventKeywords(searchEventKeyword)})