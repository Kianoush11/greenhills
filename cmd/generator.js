const Discord = require('discord.js')


const generator = [
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "||https://ptb.discord.com/store/skus/518088627234930688/realm-royale||",
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ", 
    "🌹 یه شاخه گل",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "💩 یه تکه عن گوسفند",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ", 
    "||https://ptb.discord.com/store/skus/550277544025522176/heroes-and-generals||",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ", 
    "پوچ",
    "||https://ptb.discord.com/store/skus/519338998791929866/zombsroyale-io||", 
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "کلید شهر گرین 🔑 ",
    "پوچ",
    "پوچ", 
    "پوچ",
    ":robot: ساخت بات اختصاصی آنلاین",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "||https://ptb.discord.com/store/skus/519249930611589141/sandboxes||",
    "پوچ", 
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
  ];
  
  exports.run = (bot, msg, params) => {

      var emx = new Discord.RichEmbed()
      .setTitle("**G R Ξ Ξ N G Ξ N Ξ R A T O R**", true)
      .setDescription(generator[Math.floor(Math.random() * generator.length)])
      .setFooter("G R Ξ Ξ N H I L L S | در صورت برنده شدن به اونر در چت پیغام دهید")
      .setColor('RANDOM')


  
      msg.author.send(emx);
      msg.react("✅");
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gen'],
    permLevel: 0
  };
  
  exports.help = {
    name: "generator",
    description: "jojo code 3",
    usage: "suggest"
  };
  