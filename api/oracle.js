export default async function handler(req, res) {
  try {

    const response = await fetch("https://gamma-api.polymarket.com/markets");
    const json = await response.json();

    // Polymarket иногда возвращает {data: [...]}
    const marketsData = Array.isArray(json) ? json : json.data;

    const markets = marketsData
      .filter(m => m.active)
      .slice(0, 10)
      .map(m => ({
        question: m.question,
        liquidity: m.liquidity,
        end: m.endDate
      }));

    res.status(200).json(markets);

  } catch (error) {

    res.status(500).json({
      error: "Oracle error",
      message: error.message
    });

  }
}
