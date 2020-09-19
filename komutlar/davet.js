const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const davet = new Discord.RichEmbed()
    .setColor(0x00ae86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(
      `Bot Davet: [Tıkla](BOTUN DAVET LİNKİ) \n Bot Destek Sunucu: [Tıkla!](DESTEK SUNUCUSU VARSA DAVET LİNKİ)`
    );
  message.channel.send(davet);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 //ALAST����#2838 TARAFINDAN YAPILMIŞTIR
};

exports.help = {
  name: "davet",
  description: "Botun Davetini Atar.",
  usage: "davet"
};
