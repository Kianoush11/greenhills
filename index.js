const Discord = require("discord.js");
const bot     = new Discord.Client({fetchAllMembers: true});
const fs      = require("fs");
const moment  = require("moment");

var settings  = './settingsConfig/settings.json';
var file = require(settings)


const log = (msg) => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${msg}`);
};

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./cmd/", (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    log(`Loading Command: ${props.help.name}`);
    bot.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.on("guildMemberAdd", member => {

 const embre = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Welcome To G R Ξ Ξ N H I L L S !')
 .addField('سلام! حتما قوانین مارو بخون', member.nickname)
 .setImage(member.user.avatarURL)

 member.guild.channels.get('787718236799893521').send(embre);

});

bot.on("message", msg => {

  var prefix = ("g.");

  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  if (msg.channel.type == "dm") return;

  let command = msg.content.split(" ")[0].slice(prefix.length);
  let params = msg.content.split(" ").slice(1);
  let perms = bot.elevation(msg);
  let cmd;

  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command);
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return msg.channel.send("You not have permissions to use this command");
     cmd.run(bot, msg, params, perms, prefix);
  }
  
});

bot.on("message",message=>{
  //DMALL
  if(message.author.equals(bot.user)) return;
  if (message.author.bot) return; 
  let MessageArr = message.content.split(" ");
  let cmd = MessageArr[0];
  let args = MessageArr.slice(1);
  if(cmd == "g.9393902"){
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: | You not have enough Permission to do that.");
      let messagee = args.join(" ");
      if(!messagee) return message.channel.send(":x: | Cannot Send Blank Message");
      else{
          message.guild.members.forEach(member=>{
              member.send(messagee).then(()=>{
                  console.log("sent mesasge to: "+member.user.tag+" Successfully");
              }).catch(function(){
                  console.log("An error occured to dm: "+member.user.tag+".");
              });
          })
      }
  }
});



bot.on('message', (message) => {

  if (!message.guild) return;

if (message.content.startsWith('g.kick')) {
//KICK
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You Need __Kick Members__ or __Admin__ permission <:black:779272945830199296> ");

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .kick()

          .then(() => {

            const kick = new Discord.RichEmbed()

           .setDescription(`${user.tag} Kicked. <:sheytan:765582689109409802>  `)

            message.channel.send(kick);

          })

          .catch(err => {

            

            const kick_err_1 = new Discord.RichEmbed()

           .setColor('#ff0000')

          .setDescription("Cannot Kick This User <:sad:780378414832943114> ")
          .setColor('RANDOM')

            message.channel.send(kick_err_1);

            console.error(err);

          });

      } else {

        

        const kick_err_2 = new Discord.RichEmbed()

       .setColor('#ff0000')

      .setDescription("User Could not find <:black:779272945830199296> ")
      .setColor('RANDOM')

        message.channel.send(kick_err_2);

      }

    } else {

      message.reply("Please Mention a user to kick it <:black:779272945830199296> ");

    }

  }

});

//bot.on('message', message => {
//if (message.content.startsWith('g.warn')) {
//let targetmember = message.members.mentions.first();
//if(!targetmember) return message.reply('Mention a member to warn him')
 
  //message.channel.send(`${user.toString()}, Warned ! `)

//}


//})

bot.on('message', (message) => {

  if (!message.guild) return;

if (message.content.startsWith('g.ban')) {
//BAN
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You Need __Ban Members__ or __Admin__ permission <:black:779272945830199296> ");

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .ban()

          .then(() => {

            

            const ban = new Discord.RichEmbed()

           .setDescription(`${user.tag} Banned  <:sheytan:765582689109409802> `)
           .setColor('RANDOM')

            message.channel.send(ban);

          })

          .catch(err => {

            

            const ban_err_1 = new Discord.RichEmbed()

           .setColor('#ff0000')

          .setDescription("Cannot Ban this user <:sad:780378414832943114> ")
          .setColor('RANDOM')

            message.channel.send(ban_err_1);

            console.error(err);

          });

      } else {

        

        const ban_err_2 = new Discord.RichEmbed()

       .setColor('#ff0000')

      .setDescription("User Could not find <:black:779272945830199296> ")
      .setColor('RANDOM')

        message.channel.send(ban_err_2);

      }

    } else {

      message.reply("Please Mention Somebody to ban him <:black:779272945830199296> ");
    }

  }

});

bot.on('message', message => {
  //PING
  if (message.content === 'g.ping') {  
    message.channel.send(`Pong🏓! Latency is ${Date.now() - message.createdTimestamp}ms.`);
  }
});

bot.on("ready", () => {
  //ACTIVE
  log(`Ready to serve ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
  bot.user.setActivity("G R Ξ Ξ N H I L L S", { type: "WATCHING"});
  
  log("GreenHills Bot by Kavisho is Running");
});

bot.on("error", console.error);
bot.on("warn", console.warn);


bot.login(process.env.token);

bot.on('disconnect', function(erMsg, code) {
  console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----');
  bot.connect(process.env.token);
});

bot.reload = function (command) {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      bot.commands.delete(command);
      bot.aliases.forEach((cmd, alias) => {
        if (cmd === command) bot.aliases.delete(alias);
      });

      bot.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

bot.elevation = function (msg) {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;

  let mod_role = msg.guild.roles.find("name", "Members");
  if (mod_role && msg.member.roles.has(mod_role.id)) permlvl = 2;

  let admin_role = msg.guild.roles.find("name", "Can Use GH Bot cmds");
  if (admin_role && msg.member.roles.has(789036377056477184)) permlvl = 3;

  if (msg.author.id === "750008103096942683") permlvl = 4;
  return permlvl;
};
