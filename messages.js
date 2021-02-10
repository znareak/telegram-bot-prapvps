const {
  getDollarPrice,
  getEuroPrice,
  getpetroleumPrice,
  getBitcointPrice,
} = require("./helpers");

async function dollarPrice() {
  const dollar = await getDollarPrice();
  return `💵 El dolár está en: ${dollar}`;
}

async function euroPrice() {
  const euro = await getEuroPrice();
  return `💶 El euro está en: ${euro}`;
}

async function petroleumPrice() {
  const petroleum = await getpetroleumPrice();
  return `🛢️ El petróleo está en: ${petroleum}`;
}

async function bitcoinPrice() {
  const bitcoin = await getBitcointPrice();
  return `₿ El bitcoin está en: ${bitcoin}`;
}

async function allPrices() {
  const promises = [
    dollarPrice(),
    euroPrice(),
    petroleumPrice(),
    bitcoinPrice(),
  ];
  const prices = await Promise.all(promises);
  let template = "";
  for (const price of prices) {
    template += price + "\n";
  }

  return template;
}

module.exports = {
  dollarPrice,
  euroPrice,
  petroleumPrice,
  bitcoinPrice,
  allPrices,
};
