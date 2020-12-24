const Discord = require('discord.js')

exports.run = (bot, msg, params) => {
 
  if (msg.channel.nsfw) {

   var invite = new Discord.RichEmbed()
    .setTitle("Oh you need this :) ")
    .setImage('https://cdn.discordapp.com/attachments/786294118107840552/786294193692606474/9k.png')
    .setFooter("G R Ξ Ξ N H I L L S", '')
    .setColor('RANDOM')
    msg.channel.send({embed: invite})
  }else {

    var invite2 = new Discord.RichEmbed()
    .setTitle("Error | you need to enable this option from your channel settings.")
    .setImage('https://cdn.discordapp.com/attachments/760919453327294494/786295495185137714/unknown.png')
    .setFooter("G R Ξ Ξ N H I L L S", '')
    .setColor("0x#FF0000")
    msg.channel.send({embed: invite2})

  };
     

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "boob",
  description: "get cats",
  usage: "help"
};
