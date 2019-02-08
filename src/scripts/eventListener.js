document.querySelector("#parkButton").addEventListener("click",() => {
  document.querySelector("#results").innerHTML= "";
  const searchTerm = document.querySelector("#parksSearch").value;
  const formatedsearchPhrase = searchTerm.replace(" ","_")
  var parkResults = document.querySelectorAll("#results")
  parkResults.innerHTML = getResults(formatedsearchPhrase);
})
document.querySelector("#Button0").addEventListener("click", () =>{
  const saveItin = document.querySelector("#results0").textContent;
  document.querySelector("#itinList").innerHTML +=`<li>${saveItin}</li>`;
 })
 document.querySelector("#Button1").addEventListener("click", () =>{
     const saveItin = document.querySelector("#results1").textContent;
     document.querySelector("#itinList").innerHTML +=`<li>${saveItin}</li>`;
 })
 document.querySelector("#Button2").addEventListener("click", () =>{
     const saveItin = document.querySelector("#results2").textContent;
     document.querySelector("#itinList").innerHTML +=`<li>${saveItin}</li>`;
 })
document.querySelector("#Button3").addEventListener("click", () =>{
     const saveItin = document.querySelector("#results3").textContent;
     document.querySelector("#itinList").innerHTML +=`<li>${saveItin}</li>`;
 })
