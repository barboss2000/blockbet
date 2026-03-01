import fetch from "node-fetch"

const POLYMARKET_API = "https://gamma-api.polymarket.com/markets"

async function getMarkets(){

console.log("Fetching Polymarket markets...")

const res = await fetch(POLYMARKET_API)

const markets = await res.json()

const activeMarkets = markets.filter(m => m.active)

return activeMarkets.slice(0,10)

}

async function run(){

try{

const markets = await getMarkets()

console.log("Markets loaded:", markets.length)

markets.forEach(m=>{

console.log("-----")
console.log("Question:", m.question)
console.log("End:", m.endDate)
console.log("Liquidity:", m.liquidity)

})

}catch(e){

console.error("Oracle error:",e)

}

}

run()
