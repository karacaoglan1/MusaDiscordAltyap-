const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 

{

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:red:707557564992323714> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  {
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `c!oto-rol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('<a:onay_2:707557478937657394> Oto-Rol mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`otomesaj_${message.guild.id}`, mesaj)  
};
  }
}
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['oto-rol-msg'], 
  permLevel: 0,
kategori : 'otorol'
};

exports.help = {
  name: 'otorol-msj',
  description: 'Bu komutu kullanmak için gold üye olmalısınız.', 
  usage: 'oto-rol-msg'
};
