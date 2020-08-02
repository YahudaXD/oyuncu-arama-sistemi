const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "+";
const talkedRecently = new Set()

var reklam1 = 'discord.gg'
var reklam2 = 'discord.me'
var reklam3 = 'discordapp.com/invite/'
var reklam4 = 'youtube.com/channel/'
var reklam5 = 'twitch.tv'
var reklam6 = 'free-gg.com'
var ys1 = 'gfycat.com'
var lol1 = 'lol'
var lol2 = 'Lol'
var lol3 = 'LoL'
var lol4 = 'LOL'
var csgo1 = 'csgo'
var csgo2 = 'cs'
var pubg1 = 'pubg'
var pubg2 = 'Pubg'
var pubg3 = 'PUBG'
var fort1 = 'fortnite'
var fort2 = 'Fortnite'
var fort3 = 'FORTNITE'
var gta1 = 'gta'
var gta2 = 'Gta'
var gta3 = 'GTA'
var km1 = 'kayit ol'
var km2 = 'kayit ol'
var budm1 = 'dogrulan'
var budm2 = 'doğrulan'
var kt1 = 'kayit tamamdir'
var kt2 = 'kayit tamamdir'
var hg1 = 'Önemli Notlar'
var gs1 = 'gladyator sence'
var gs2 = 'gladyatör sence'
var lolnick1 = 'lol nick'
var loloyna1 = 'lol oyna'


client.on('ready', () => {
  console.log(`Bot Durumu: ${client.user.tag} Aktif!`);
  
  client.user.setStatus('dnd')
  client.user.setActivity(`🔥v1.3.1🔥 | YAHUDA 😈`, { type: 'PLAYING' });

});

client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if (message.content.startsWith('..')) {
    if (message.channel.name == undefined) return;
    if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Kayıt Yapman İçin Yetkin Yok!");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Böyle Bir Kullanıcı Mevcut Değil!");
    let aRole = message.guild.roles.find(`name`, "Kayıtlı Üye");
    let bRole = message.guild.roles.find(`name`, "Kayıtsız Üye");
    if (rMember.roles.has(aRole.id)) return message.reply("Üye Zaten Kayıtlı!");
    (rMember.addRole(aRole.id));
    (rMember.removeRole(bRole.id));
    message.channel.send(`${rMember} Kayıt Tamamdır Dostum.Aramıza Hoşgeldin! :hugging:`);
  }

  if (message.content.toLowerCase() === '+katıl') {
    if (message.channel.name == undefined) return;
    let katilacakuye = message.member
    let oaderolu = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
    let oadddrolu = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Devre Dışı");
    let oadze = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/attachments/518240012253396993/519167376500195340/291201.png`)
      .setColor('#0eea53')
      .addField(`Hey ${message.author.username}!`, `Senin Oyuncu Arama Durumun Zaten Etkin!`)
      .setTimestamp()
      .setFooter(`Gladyatör | Oyuncu Arama Sistemi`)
    let oadebasarili = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/attachments/518240012253396993/519167376500195340/291201.png`)
      .setColor('#0eea53')
      .addField(`Tebrikler ${message.author.username}!`, `Oyuncu Arama Durumun Başarılı Bir Şekilde`)
      .addField(`Etkinleştirildi!`, `Artık Birisi Oyuncu Aradığında Sana da Bildirim **Gelicek**`)
      .setTimestamp()
      .setFooter(`Gladyatör | Oyuncu Arama Sistemi`)
    if (katilacakuye.roles.has(oaderolu.id)) return message.channel.send(oadze);
    (katilacakuye.addRole(oaderolu.id));
    (katilacakuye.removeRole(oadddrolu.id));
    message.channel.send(oadebasarili);
  }
  
  if (message.content.toLowerCase() === '+ayrıl') {
    if (message.channel.name == undefined) return;
    let ayrilacakuye = message.member
    let oadddrolu = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Devre Dışı");
    let oaderolu = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
    let oadzdd = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/attachments/518240012253396993/519167376164519936/631681.png`)
      .setColor('#e8180d')
      .addField(`Hey ${message.author.username}!`, `Senin Oyuncu Arama Durumun Zaten Devre Dışı!`)
      .setTimestamp()
      .setFooter(`Gladyatör | Oyuncu Arama Sistemi`)
    let oadddbasarili = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/attachments/518240012253396993/519167376164519936/631681.png`)
      .setColor('#e8180d')
      .addField(`Tebrikler ${message.author.username}!`, `Oyuncu Arama Durumun Başarılı Bir Şekilde`)
      .addField(`Devre Dışı Bırakıldı!`, `Artık Birisi Oyuncu Aradığında Sana Bildirim **Gelmicek**`)
      .setTimestamp()
      .setFooter(`Gladyatör | Oyuncu Arama Sistemi`)
    if (ayrilacakuye.roles.has(oadddrolu.id)) return message.channel.send(oadzdd);
    (ayrilacakuye.removeRole(oaderolu.id));
    (ayrilacakuye.addRole(oadddrolu.id));
    message.channel.send(oadddbasarili);
  }

  if (message.content.startsWith(lol1)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**LoL**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }

  if (message.content.startsWith(lol2)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**LoL**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }

  if (message.content.startsWith(lol3)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**LoL**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }
  
  if (message.content.startsWith(lol4)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**LoL**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }

  if (message.content.startsWith(csgo1)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**CS:GO**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }

  if (message.content.startsWith(csgo2)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**CS:GO**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }

  if (message.content.startsWith(pubg1)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**PUBG**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }

  if (message.content.startsWith(pubg2)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**PUBG**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }

  if (message.content.startsWith(pubg3)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**PUBG**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }
    
  if (message.content.startsWith(fort1)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**Fortnite**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }
    
  if (message.content.startsWith(fort2)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**Fortnite**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }
    
  if (message.content.startsWith(fort3)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**Fortnite**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }
    
  if (message.content.startsWith(gta1)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**GTA**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }
    
  if (message.content.startsWith(gta2)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**GTA**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }
    
  if (message.content.startsWith(gta3)) {
    if (message.author.bot) return;
    if (message.content.startsWith(lolnick1)) return;
    if (message.content.startsWith(loloyna1)) return;
    if (talkedRecently.has(message.author.id)) return message.reply('Bu Özelligi Yeniden Denemek Için 15 Dakika Beklemelisin\n**Not: Odalardaki Arkaslara Oyun Giricekler Mi Diye Sor Veya Oyun Arkadasi Bulana Kadar Herhangi Odaya Girip Bekle**');
      var oade = message.guild.roles.find(`name`, "Oyuncu Arama Durumu: Etkin");
      message.channel.send(`${message.author} :sparkles:**GTA**:sparkles: Oynamak Için Birilerini Ariyor! :video_game: | Oto Etiket: :speaking_head: ` + oade);
      message.reply('**Oyun Oynamak İsteyen Herkese Bildirim Gönderdim! Seninle Oynamak İsteyenlerin Sana Kolayca Ulaşabilmesi İçin Odalardan Birine Girip Bekle**');
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 900000);
  }

  if (message.author.id === '501873884824469512') {
    if (command === 'gel') {
      const channel = message.member.voiceChannel;
      channel.join()
      .then(connection => console.log('Odaya Giris Yaptim!'))
      message.reply('Odaya Giris Yaptim! :white_check_mark:')
      .catch(console.error);
    }
  }
  
  if (message.content.toLowerCase() === '+bilgi') {
    message.channel.send(`Gladyatör Suan Toplam **${client.guilds.size}** Sunucuya ve **${client.users.size}** Üyeye Hizmet Ediyor!`)
  }
  
  if (message.author.id === '501873884824469512') {
    if(command === "y"){
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
    }
  }

  if (message.content.toLowerCase() === 'sa') {
    if (message.author.id === '501873884824469512') {
      message.reply('Aleyküm Selam **Fuad Bey**!');
    }
  }

  if (message.content.toLowerCase() === 'fuad') {
    message.reply('Ben Yardimci Olayim. Sorun Nedir?');
  }

  if (message.content.toLowerCase() === `<@501873884824469512>`) {
    message.reply('Ben Yardimci Olayim. Sorun Nedir?');
  }
   
  if (message.content.toLowerCase() === 'gladyatör') {
    message.reply('Efendim :slight_smile:');
  }
  
  if (message.content.toLowerCase() === 'gladyator') {
    message.reply('Efendim :slight_smile:');
  }
  
  if (message.content.toLowerCase() === 'hey') {
    message.reply('Efendim :slight_smile:');
  }
  
  if (message.content.toLowerCase() === 'eyw') {
    message.reply('Rica Ederim :wink:');
  }
  
  if (message.content.toLowerCase() === 'eyv') {
    message.reply('Rica Ederim :wink:');
  }
  
  if (message.content.toLowerCase() === 'eywallah') {
    message.reply('Rica Ederim :wink:');
  }

  if (message.content.toLowerCase() === 'eyvallah') {
    message.reply('Rica Ederim :wink:');
  }

  if (message.content.toLowerCase() === '+v') {
    let v = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/avatars/512304014453637150/1ca02e984c3d2d808a80ef9684d565b0.png?size=2048`)
      .setColor('#0eea53')
      .addField(`:fleur_de_lis: Şuanki Versiyonum: 1.3 :fleur_de_lis:`, `:diamond_shape_with_a_dot_inside: Yapımcım: <@501873884824469512> :diamond_shape_with_a_dot_inside:`)
      .setTimestamp()
      .setFooter(`Gladyatör`)
    message.channel.send(v);
  }

  if (message.content.toLowerCase() === '+versiyon') {
    let versiyon = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/avatars/512304014453637150/1ca02e984c3d2d808a80ef9684d565b0.png?size=2048`)
      .setColor('#0eea53')
      .addField(`:fleur_de_lis: Şuanki Versiyonum: 1.3 :fleur_de_lis:`, `:diamond_shape_with_a_dot_inside: Yapımcım: <@501873884824469512> :diamond_shape_with_a_dot_inside:`)
      .setTimestamp()
      .setFooter(`Gladyatör`)
    message.channel.send(versiyon);
  }
  
  if (message.content.match(km1)) {
    message.channel.send('Sunucuya Kayit Için **Adini [Yasini] Nickini** Buraya Yaz')
  }
  
  if (message.content.match(budm1)) {
    message.channel.send('Sunucudaki Tüm Kız Hesapları **Fake Hesap** Korumasından Geçmek İçin Kıdemli Ve Üzeri Yetkililerden Herhangi Birine Ses Teyiti Vermek Zorundadır')
  }

  if (message.content.match(budm2)) {
    message.channel.send('Sunucudaki Tüm Kız Hesapları **Fake Hesap** Korumasından Geçmek İçin Kıdemli Ve Üzeri Yetkililerden Herhangi Birine Ses Teyiti Vermek Zorundadır')
  }
  
  
  if (message.content.match(km2)) {
    message.channel.send('Sunucuya Kayıt İçin **Adını**, **Yaşını** Ve **Nickini** Buraya Yaz')
  }

});

client.on('guildMemberAdd', member => {
  setTimeout(function(){
    client.channels.get("360116813859651594").send(`Hoşgeldin ${member}`)
  }, 2500);
});

client.login(process.env.BOT_TOKEN);
client.on('error', console.error);
