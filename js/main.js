//Get a dog photo from the dog.ceo api and place the photo in the DOM
let crypto = {

fetchData : function() { 
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    // .then(res => res.json())
    .then(data => this.displayData(data))
},

displayData : function(data) {
    const { chartName } = data
    document.querySelector(".coinname").innerText = chartName
}

// .catch(err => {
//     console.log(`error ${err}`)
// })

}