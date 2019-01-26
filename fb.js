const embed = require('discord.js'); 
const Discord = require('discord.js');
const client = new Discord.Client(); 
var prefix = 'fb!' 
client.on("ready", () => {client.user.setGame('fb!loto | Yapım Aşamasında' , 'https://twitch.tv/FalcıBeta') 
}); 

const talkedRecently = new Set();
client.on('message', msg => {
if (msg.content.toLowerCase().match(/(fb!loto-tahmini)/g)) {
if (talkedRecently.has(msg.author.id)) {
             let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
              .setDescription("Bu komutu 12 saat sonra kullanabilirsin!");
       msg.channel.send({embed: embed})	
      } else {
     let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("Kaybettiniz!",
          "12 Saat sonra tekrar deneyin!")
                .setFooter("Falcı kumar oynamanızı önermez. Bu bir oyundur gerçek para kazanamazsınız eğlence amaçlıdır.")
msg.channel.send({embed: embed})	
talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
                  }, 7200000);
    }
} 
});

client.on('message', msg => {
if(msg.content === prefix + 'loto') {
     let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.addField("Loto Tercihinizi Yapın:",
          "1. 837716834 \n2. 40865312 \n3. 316262469 \n4. 301095132 \n5. 857869261")
  .setDescription("Tahmininizi fb!loto-tahmini 'tahmin' şeklinde yazın. (Örneğin; fb!loto-tahmini 5) Loto her gün güncellenir. Günde 1 tahmin yapınız.")
                .setFooter("Falcı kumar oynamanızı önermez. Bu bir oyundur gerçek para kazanamazsınız eğlence amaçlıdır.")
msg.channel.send({embed: embed})	
}
});

client.on('message', msg => { 
if(msg.content === prefix + 'loto-tahmini 3') { 
 msg.channel.bulkDelete(2)
let embed = new Discord.RichEmbed()  
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  
.addField("Tebrikler " + msg.author.username + "!", 
"Günün kazananlarından oldun!") 
msg.channel.send({embed: embed})  
} 
});

client.login(process.env.BOT_TOKEN)
