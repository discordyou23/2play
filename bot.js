const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "S";
client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {                           
client.user.setGame(`I am ȘεɱΘ😎I Don't Care.🍻`,'https://www.twitch.tv/fofodiscord');                                                                                                                                                                                                                                                                                                                                                                                                                            
});










client.login(process.env.BOT_TOKEN);
