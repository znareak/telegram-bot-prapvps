const { Telegraf } = require("telegraf");
const api_dolartoday = "https://s3.amazonaws.com/dolartoday/data.json";
const api_bitcoint = "http://api.coindesk.com/v1/bpi/currentprice.json";
const api_cat_gif = "https://api.thecatapi.com/v1/images/search?mime_types=gif";

const bot_token = "1619547368:AAGDo9tyY2R5G4UUHgtx_OHizjPvn-Y3Edo";
const bot = new Telegraf(bot_token);

module.exports = {
  bot,
  api_dolartoday,
  api_bitcoint,
  api_cat_gif,
  bot_token,
};
