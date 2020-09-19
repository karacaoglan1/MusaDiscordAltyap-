const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );
  if (message.guild)
    var prefix =
      (await db.fetch("prefix_" + message.guild.id)) || ayarlar.prefix;
  else
    var prefix =
      (await db.fetch("prefix_" + message.author.id)) || ayarlar.prefix;
  let rol = message.mentions.roles.first();
  let kanal = message.mentions.channels.first();

  if (!rol)
    return message.channel
      .send(`<a:red:707557564992323714> Ayarlamam İçin Bir Rol Etiketlemeilisin. 
<a:red:707557564992323714> Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
<a:red:707557564992323714> Örnek Kullanım : ${prefix}otorol @rol #kanal 

 Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)`);
  if (!kanal)
    return message.channel.send(
      ":iptal: Ayarlamam İçin Bir Kanal Etiketlemeilisin."
    );

  message.channel.send(`<a:onay_2:707557478937657394> Otorol Aktif Edildi 
<a:onay_2:707557478937657394> '${rol}' Olarak Güncelledim! 
<a:onay_2:707557478937657394> Kayıt Kanalını '${kanal}' Olarak Güncelledim!
❔ Unutma Otorol Mesaj ayarlamazsan Otorol Çalışmaz!!`);

  db.set(`otok_${message.guild.id}`, kanal.id);
  db.set(`otorol_${message.guild.id}`, rol.id);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "otorol"
};

exports.help = {
  name: "otorol-ayarla",
  description: "oto-rol-ayarla",
  usage: "oto-rol-ayarla"
};
