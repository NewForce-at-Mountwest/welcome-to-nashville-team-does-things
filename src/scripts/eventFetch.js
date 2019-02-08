fetch("https://www.eventbriteapi.com/v3/events/search/?q=nashville_coding&token=YNYWXAM4XRQXRPS65ZCV", {
 headers: {
   "Authorization": "Bearer YNYWXAM4XRQXRPS65ZCV",
   "Accept": "application/json"
 }
})
.then(events => events.json())
.then(results =>{
    console.log(results)})
