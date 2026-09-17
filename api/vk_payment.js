export default function handler(req, res) {
  const items = {
    "Five_Hearts_Pack": { title: "Заряд Силы 5 жизней.", price: 3 },
    "Infinite Life Hearts — One Day": { title: "Бесконечные жизни — Один день", price: 10 },
    "Vivienne's New Friend Starter Kit": { title: "Стартовый набор Нового Друга Вивьен", price: 9 },
    "Gemstones50": { title: "Самоцветы50", price: 5 },
    "Gemstones165": { title: "Самоцветы165", price: 15 },
    "Gemstones360": { title: "Самоцветы360", price: 30 },
    "Gemstones780": { title: "Самоцветы780", price: 60 },
    "Gemstones1680": { title: "Самоцветы1680", price: 120 },
    "Gemstones3750": { title: "Самоцветы3750", price: 250 },
    "booster_magic_wand": { title: "бустер_волшебная палочка", price: 3 },
    "Wizard's Super Set": { title: "Супер набор Чародея", price: 60 },
    "booster_miracle_broom": { title: "бустер_чудо-метла", price: 3 },
    "booster_vivienne_glove": { title: "бустер_Перчатка Вивьен", price: 3 },
    "booster_magic_feather": { title: "бустер_Магическое Перо", price: 3 }
  };

  const body = req.body || {};
  const query = req.query || {};
  const type = body.notification_type || query.notification_type || '';
  const itemId = body.item || query.item || '';

  if (type === 'get_item' && items[itemId]) {
    return res.status(200).json({
      response: {
        item_id: itemId,
        title: items[itemId].title,
        price: items[itemId].price
      }
    });
  }

  return res.status(200).json({ response: { status: 1 } });
}