

const embed = require('discord.js'); 



const Discord = require('discord.js'); 



const client = new Discord.Client(); 







var prefix = 'fb!' 







client.on("ready", () => {client.user.setGame('Yapım Aşamasında' , 'https://twitch.tv/FalcıBeta') 



}); 
client.login(process.env.BOT_TOKEN)
