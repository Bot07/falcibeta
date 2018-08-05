

const embed = require('discord.js'); 



const Discord = require('discord.js'); 



const client = new Discord.Client(); 







var prefix = 'fb!' 







client.on("ready", () => {client.user.setGame('Yapım Aşamasında' , 'https://twitch.tv/FalcıBeta') 



}); 





client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + "loto-tahmin 837716834") { 

let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.setDescription("Kaybettiniz! Yarın tekrar deneyin!")



msg.channel.send({embed: embed})



} 



});


client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + "loto-tahmin 40865312") { 

let embed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.setDescription("Kaybettiniz! Yarın tekrar deneyin!")



msg.channel.send({embed: embed})



} 



});
client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + "loto-tahmin 301095132") { 

let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.setDescription("Kaybettiniz! Yarın tekrar deneyin!")



msg.channel.send({embed: embed})



} 



});
client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + "loto-tahmin 857869261") { 

let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.setDescription("Kaybettiniz! Yarın tekrar deneyin!")



msg.channel.send({embed: embed})



} 


});
client.on('message', msg => {



if (msg.content.toLowerCase() === prefix + "loto-tahmin 316262469") { 

let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
.setDescription("Tebrikler! Günün loto kazananlarındansınız!")



msg.channel.send({embed: embed})



} 



});




client.login(process.env.BOT_TOKEN)
