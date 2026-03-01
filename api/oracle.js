export default async function handler(req,res){

  const url="https://gamma-api.polymarket.com/markets"

  try{

    const r=await fetch(url)
    const data=await r.json()

    const markets=data
      .filter(m=>m.active)
      .slice(0,10)
      .map(m=>({
        question:m.question,
        liquidity:m.liquidity,
        end:m.endDate
      }))

    res.status(200).json(markets)

  }catch(e){

    res.status(500).json({error:"oracle error"})

  }

}
