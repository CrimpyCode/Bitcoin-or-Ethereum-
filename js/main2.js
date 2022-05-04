//Get a dog photo from the dog.ceo api and place the photo in the DOM
let crypto = {
    fetchData : function(input) { 
        fetch(`https://api.coinpaprika.com/v1/coins/${input}`)
            .then(res => res.json())
            .then(data => this.displayCoinInfo(data))

        fetch(`https://api.coinpaprika.com/v1/coins/${input}/ohlcv/today`)
            .then(res => res.json())
            .then(data => this.displayCurrent(data))
    },

    displayCoinInfo : function(data) {
        const { id, name, description } = data;
        document.querySelector(".coinname").innerText = `${name}`
        document.querySelector(".id").innerText = `Coin ID: ${id}`
        document.querySelector(".description").innerText = description
    },    
    
    displayCurrent : function (data) {
        const { close,high,low,market_cap,time_close,time_open,volume } = data[0];
        document.querySelector(".price").innerText = `${close.toFixed(2)} USD`
        document.querySelector(".otherFinInfo").innerText = 
        `Market Cap: ${market_cap.toLocaleString("en-US")}

        24H High: ${high.toFixed(2)}
        24H Low: ${low.toFixed(2)} 

        24H Volume: ${volume.toLocaleString("en-US")}

        Close Time: ${time_close}
        `
    },

    clickBitcoin : function() {
        let input = "btc-bitcoin"
        this.fetchData(input)
        document.body.style.background = `url(./images/capture2.jpg)`
        ducument.querySelector(".body").style.color ="red"
    },
    
    clickEthereum : function() {
        let input = "eth-ethereum"
        this.fetchData(input)
        document.body.style.background = `url(./images/capture.jpg)`
    }

}

document.querySelector(".bitcoin").addEventListener("click", function() {
    crypto.clickBitcoin()
})

document.querySelector(".ethereum").addEventListener("click", function() {
    crypto.clickEthereum()
})


// crypto.fetchData()


// .catch(err => {
//     console.log(`error ${err}`)
// })

