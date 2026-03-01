import fetch from "node-fetch"

const API = "https://gamma-api.polymarket.com/markets"

async function getMarkets(){

const res = await fetch(API)

const markets = await res.json()

return markets.slice(0,20)

}

async function run(){

const markets = await getMarkets()

console.log(markets.map(m=>m.question))

}

run()
