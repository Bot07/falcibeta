

const embed = require('discord.js'); 



const Discord = require('discord.js'); 



const client = new Discord.Client(); 







var prefix = 'fb!' 







client.on("ready", () => {client.user.setGame('fb!loto | Yapım Aşamasında' , 'https://twitch.tv/FalcıBeta') 



}); 





const talkedRecently = new Set();
client.on('message', msg => {


if (msg.content.toLowerCase().match(/(fb!loto-tahmin 1)/g)) {
            
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

                
msg.channel.send({embed: embed})	

talkedRecently.add(msg.author.id);
        setTimeout(() => {

          talkedRecently.delete(msg.author.id);
                    
        }, 7200000);
            
    }

} 



});
const talkedRecently = new Set();
client.on('message', msg => {


if (msg.content.toLowerCase().match(/(fb!loto-tahmin 2)/g)) {
            
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

                
msg.channel.send({embed: embed})	

talkedRecently.add(msg.author.id);
        setTimeout(() => {

          talkedRecently.delete(msg.author.id);
                    
        }, 7200000);
            
    }

} 



});
const talkedRecently = new Set();
client.on('message', msg => {


if (msg.content.toLowerCase().match(/(fb!loto-tahmin 3)/g)) {
            
if (talkedRecently.has(msg.author.id)) {
             let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 
              .setDescription("Bu komutu 12 saat sonra kullanabilirsin!");
       msg.channel.send({embed: embed})	
            
    } else {




     let embed = new Discord.RichEmbed() 
.setColor(Math.floor(Math.random() * (0xFFFFFF + 5))) 

.addField("Tebrikler",
          "Günün kazananlarındansınız!")

               
msg.channel.send({embed: embed})	

talkedRecently.add(msg.author.id);
        setTimeout(() => {

          talkedRecently.delete(msg.author.id);
                    
        }, 7200000);
            
    }

} 



});
const talkedRecently = new Set();
client.on('message', msg => {


if (msg.content.toLowerCase().match(/(fb!loto-tahmin 4)/g)) {
            
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

                
msg.channel.send({embed: embed})	

talkedRecently.add(msg.author.id);
        setTimeout(() => {

          talkedRecently.delete(msg.author.id);
                    
        }, 7200000);
            
    }

} 



});
const talkedRecently = new Set();
client.on('message', msg => {


if (msg.content.toLowerCase().match(/(fb!loto-tahmin 5)/g)) {
            
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

                
msg.channel.send({embed: embed})	

talkedRecently.add(msg.author.id);
        setTimeout(() => {

          talkedRecently.delete(msg.author.id);
                    
        }, 7200000);
            
    }

} 



});




client.login(process.env.BOT_TOKEN)
