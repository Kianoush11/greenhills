﻿const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .setTitle("**G R Ξ Ξ N H I L L S**", true)
          .addField("__**" + "Developed In : " + "**__", ":flag_ir: by Kavisho with :heart:", true)
          .addField("__**" + "Code Language : " + "**__", "Javascript <:java:785151723207393300>", false)
          .addField("__**" + "Version : " + "**__", " 1.0 :robot: ", false)
		      .addField("__**" + "Bot Status :" + "**__", "Online <:frozen:780376909451624468> ", true)
          .addField("__**" + "Support Server" + "**__", "http://discord.gg/uq99q2A4xF :envelope: ", true)
        
          .setColor("0x#FF0000")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: "about",
  description: "Bot Info",
  usage: "about"
};
