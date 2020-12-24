const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .setTitle("**WaitWut**", true)
          .addField("**" + "Talking by bot <a:737627724411043851:740144265228845057> : " + "**", " <a:737628504040144936:740130327371972658> $speak", false)
        .addField("**" + "شیر یا خط <a:436677458339823636:740135780575477871> : " + "**", " <a:737628504040144936:740130327371972658> $coin", false)
		    .addField("**" + "Your Love to that thing <a:665626030345551891:739840005119279126> : " + "**", " <a:737628504040144936:740130327371972658> $love", false)
		    .addField("**" + "Your Rank :page_facing_up: : " + "**", " <a:737628504040144936:740130327371972658> $rank", false)
		    .addField("**" + "Your Rank with details :bookmark_tabs: : " + "**", " <a:737628504040144936:740130327371972658> $rank -d", false)
		  
          

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "fff",
  description: "Bot Info",
  usage: "abouttttt"
};







