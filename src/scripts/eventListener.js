document.querySelector("#parkButton").addEventListener("click",() => {
  const searchTerm = document.querySelector("#parksSearch").value;
  var parkResults = document.querySelectorAll("#results")
  parkResults.innerHTML = getResults(searchTerm);
})
document.querySelector("#Button0").addEventListener("click", () =>{
  const saveItin = document.querySelector("#results0").textContent;
  document.querySelector("#itinList").innerHTML =saveItin;
 })
 document.querySelector("#Button1").addEventListener("click", () =>{
     const saveItin = document.querySelector("#results1").textContent;
     document.querySelector("#itinList").innerHTML =saveItin;
 })
 document.querySelector("#Button2").addEventListener("click", () =>{
     const saveItin = document.querySelector("#results2").textContent;
     document.querySelector("#itinList").innerHTML =saveItin;
 })
document.querySelector("#Button3").addEventListener("click", () =>{
     const saveItin = document.querySelector("#results3").textContent;
     document.querySelector("#itinList").innerHTML =saveItin;
 })