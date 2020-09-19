const Discord = require('discord.js');
const loglar = require('../ayarlar.json');
const db = require('quick.db');


var prefix = loglar.prefix; "c!"

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Ciko Otorol Komutları`, client.user.avatarURL)
      
.addField("Otorol Ayarlamak İçin c!oto-rol-ayarla @rol #kanal")
.addField("Otorol Kapat|", "Otorol Kapatmak İçin Bunu Yazın `c!oto-rol-kapat`")
.addField("c!oto-rol-msg  Otorol Mesajını Ayarlar Normal Üyeler. İçindir. ", "Örnek: `c!oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz.`")
.addField(" Normal Kullanıcılar | ,"**-uye- Katılan Kullanıcı İsmi \n -rol- Verilecek Rol İsmi \n -server- Sunucu İsmi \n -uyesayisi- Sunucudaki Üye Sayısı Toplam \n -botsayisi- Sunucudaki Toplam Bot Sayısı \n -bolge- Sunucun Bolgesi \n -kanalsayisi- Sunucudaki Toplam Kanal Sayısı**")
          

return message.channel.sendEmbed(eğlence);
 

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otorolyardım"],
  permLevel: 0,
kategori : 'otorol'
};
  
exports.help = {
  name: 'otorol',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
//Normal Kullanıcılar
