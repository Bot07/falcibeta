

const embed = require('discord.js'); 



const Discord = require('discord.js'); 



const client = new Discord.Client(); 







var prefix = 'fb!' 







client.on("ready", () => {client.user.setGame('Yapım Aşamasında' , 'https://twitch.tv/FalcıBeta') 



}); 

client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + `loto`) { 


let embed = new Discord.RichEmbed() 


.addField("Loto Tercihinizi Yapın:"
          "1. 837716834 \n2. 40865312 \n3. 316262469 \n4. 301095132 \n5. 857869261")
  .setDescription("Tahmininizi fb!loto-tahmini 'tahmin' şeklnde yazın.")
  .setDescription("Loto her gün güncellenir. Günde 1 tahmin yapınız.")
                .setFooter("Falcı kumar oynamanızı önermez. Bu bir oyundur gerçek para kazanamazsınız eğlence amaçlıdır.")
msg.channel.send({embed: embed})	


} 



});

client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + `loto-tahmin 837716834`) { 

let embed = new Discord.RichEmbed() 
.setDescription("Kaybettiniz! Yarın tekrar deneyin!")



msg.channel.send({embed: embed})



} 



});


client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + `loto-tahmin 40865312`) { 

let embed = new Discord.RichEmbed() 
.setDescription("Kaybettiniz! Yarın tekrar deneyin!")



msg.channel.send({embed: embed})



} 



});
client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + `loto-tahmin 301095132`) { 

let embed = new Discord.RichEmbed() 
.setDescription("Kaybettiniz! Yarın tekrar deneyin!")



msg.channel.send({embed: embed})



} 



});
client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + `loto-tahmin 857869261`) { 

let embed = new Discord.RichEmbed() 
.setDescription("Kaybettiniz! Yarın tekrar deneyin!")



msg.channel.send({embed: embed})



} 


});
client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + `loto-tahmin 316262469`) { 

let embed = new Discord.RichEmbed() 
.setDescription("Tebrikler! Günün loto kazananlarındansınız!")



msg.channel.send({embed: embed})



} 



});






client.login(process.env.BOT_TOKEN)
