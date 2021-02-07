const {
  dollarPrice,
  euroPrice,
  petroleumPrice,
  bitcoinPrice,
  allPrices,
} = require("./messages");
const { bot } = require("./config");

bot.start((ctx) => {
  ctx.reply(`Hola! ${ctx.from.first_name} 😚, qué tal?`);
  console.log(ctx.from);
  console.log(ctx.chat);
  console.log(ctx.message);
});

bot.help((ctx) => {
  ctx.reply("Hola!, tengo muchos comandos, algunos de ellos: ");
});

bot.hears("marico", (ctx) => {
  ctx.reply("Si, en efecto, anderson es marico...");
});

bot.command("dolar", async (ctx) => {
  const message = await dollarPrice();
  ctx.reply(message);
});

bot.command("euro", async (ctx) => {
  const message = await euroPrice();
  ctx.reply(message);
});

bot.command("petroleo", async (ctx) => {
  const message = await petroleumPrice();
  ctx.reply(message);
});

bot.command("bitcoin", async (ctx) => {
   const message = await bitcoinPrice();
   ctx.reply(message);
 });

bot.command("divisas", async (ctx) => {
  const prices = await allPrices();
  const user = ctx.chat.first_name;
  ctx.reply(`Hola! ${user} 😘, el precio de las divisas hoy es:`);
  ctx.reply(prices);
});

bot.command("foto", (ctx) => {
  ctx.replyWithPhoto(
    "https://i.pximg.net/img-master/img/2021/02/08/08/04/30/87616095_p0_master1200.jpg"
  );
});

bot.launch();
