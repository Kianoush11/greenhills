const Discord = require('discord.js')


const generator = [
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "||https://ptb.discord.com/store/skus/518088627234930688/realm-royale||",
    "پوچ",
    "پوچ", 
    "5670-TIxLAB",
    "پوچ",
    "پوچ",
    "پوچ", 
    "🌹 یه شاخه گل",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "عکس مقام معظم رهبری",
    "پوچ",
    "پوچ",
    "پوچ،ول کن دیه",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "برنده یک نیترو سه ماهه||فیک|| :)",
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "💩 یه تکه عن گوسفند",
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "جانمازی",
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
    "||https://discord.com/store/applications/420676877766623232/scp-secret-laboratory||",
    "پوچ",
    "پوچ",
    "عکس شهید سردار سلیمانی",
    "پوچ",
    "پوچ",
    "پوچ",
    "یک بازی پولی و بدون پرداخت درون برنامه ای از مایکت | تا سقف 14 هزار تومان",
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "پوچ",
    "پوچ",
    "کلید پرزیدنت روحانی",
    "پوچ",
    "پوچ", 
    "پوچ",
    "پوچ",
    "ساقه طلایی",
    "پوچ",
    "خیار",
    "پوچ",
    "پوچ", 
    "پوچ",
    "🍌 موز",
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
   
  const talkedRecently = new Set();



  exports.run = (bot, msg, params) => {

      if (talkedRecently.has(msg.author.id)) {
        msg.channel.send("یوزر گرامی لطفا 5 دقیقه بعد دوباره تلاش کنید - " + msg.author);
} else {

  var emx = new Discord.RichEmbed()
  .setTitle("**G R Ξ Ξ N . G Ξ N Ξ R A T O R**", true)
  .setDescription(generator[Math.floor(Math.random() * generator.length)])
  .setFooter("G R Ξ Ξ N H I L L S | در صورت برنده شدن به اونر در چت پیغام دهید")
  .setColor('RANDOM') 

  msg.author.send(emx);
  msg.react("☑️");
  

    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(msg.author.id);
    }, 300000);
}

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
  