export default async function handler(req, res) {

const response = await fetch(
"https://gamma-api.polymarket.com/markets"
)

const markets = await response.json()

const activeMarkets = markets
.filter(m => m.active)
.slice(0,20)

res.status(200).json(activeMarkets)

}
