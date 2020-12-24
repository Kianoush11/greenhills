const Discord = require('discord.js')


exports.run = (bot, msg, params) => {

    msg.delete();
  
    if(!params.join(" ")){
      return msg.channel.send(":x:  " + "| Error : Please Type Some Text To Make it news.")
    }

    var invite = new Discord.RichEmbed()

    .setTitle("**اخبار جدید**")
    .setDescription(params.join(" "))
    .setFooter("G R Ξ Ξ N H I L L S")
 



    msg.channel.send({embed: invite});
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: "news",
    description: "Highlight the text",
    usage: "highlight [TEXT]"
  };
  