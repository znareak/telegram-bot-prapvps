const fetch = require("node-fetch");
const { api_dolartoday, api_bitcoint } = require("./config");
function formatNumber(num) {
  num = parseInt(num);
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function toBs(number) {
  return formatNumber(number) + " bs";
}

function to$(number) {
  return "$" + formatNumber(number);
}

async function getData() {
  const xhr = await fetch(api_dolartoday);
  const data = await xhr.json();
  return data;
}
async function getDataBitcointPrices() {
  const xhr = await fetch(api_bitcoint);
  const data = await xhr.json();
  return data;
}

async function getDollarPrice() {
  const priceDollar = await getData();
  return toBs(priceDollar.USD.promedio);
}

async function getEuroPrice() {
  const priceDollar = await getData();
  return toBs(priceDollar.EUR.promedio);
}

async function getpetroleumPrice() {
  const priceDollar = await getData();
  return to$(priceDollar.MISC.petroleo);
}

async function getBitcointPrice() {
  const priceBitcoin = await getDataBitcointPrices();
  let price = priceBitcoin.bpi.USD.rate.replace(",", ".");
  
  price = price.substring(0, price.lastIndexOf("."));
  return "$" + price;
}

module.exports = {
  formatNumber,
  getDollarPrice,
  getEuroPrice,
  getpetroleumPrice,
  getBitcointPrice,
};
