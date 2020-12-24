﻿const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

      .setTitle("**__Moderation Commands__**")
      .addField("**" + "Ban :no_entry_sign: : " + "**", "g.ban", true)
      .addField("**" + "Kick :warning: : " + "**", "g.kick", false)
		  .addField("**" + "Vote :bar_chart: : " + "**", "g.vote", false)
		  .addField("**" + "User Info :desktop: : " + "**", "g.userinfo", false)
		  .addField("**" + "Reminder :clock: : " + "**", "g.timer", false)
		  .addField("**" + "User's Avatar :motorway: : " + "**", "g.avatar", false)
		  .addField("**" + "WaitWut Temrs Of Service :scales: : " + "**", "g.rules", false)
		  .addField("**" + "About WaitWut :robot: : " + "**", "g.about", false)
		  
          .setColor("0x#295d7f")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mod",
  description: "Gives Moderation Info",
  usage: "mod"
};
