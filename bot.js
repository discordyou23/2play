const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "S";
client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {                           
client.user.setGame(`I am ȘεɱΘ😎I Don't Care.🍻`,'https://www.twitch.tv/fofodiscord');                                                                                                                                                                                                                                                                                                                                                                                                                            
});




client.on('message', message => {
    if (message.content === 'سيمو') {
        message.reply('نعم');
      }
});





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x06DF00)
    message.channel.sendEmbed(say);
    message.delete();
  }
  });





  client.on('message', message => {
    if (message.content.startsWith("Savatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
	     }
  });









client.login(process.env.BOT_TOKEN);
