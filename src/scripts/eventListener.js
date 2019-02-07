document.querySelector("#parkButton").addEventListener("click",() => {
  const searchTerm = document.querySelector("#parksSearch").value;
  var parkResults = document.querySelectorAll("#results")
  parkResults.innerHTML = getResults(searchTerm);

})

