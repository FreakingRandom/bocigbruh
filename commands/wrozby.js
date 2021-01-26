const discord = require("discord.js")
const talkedRecently = new Set();
module.exports.run = (msg,bot,args)=>{
    if (talkedRecently.has(msg.author.id)) {
        msg.channel.send(msg.author.username + " wystarczy tych wróżb na dzisiaj.");
} else {
    const luck = Math.round(Math.random()*5)+1
    console.log(luck)
    switch(luck){
        case 1:
            msg.reply("Spotkasz miłość życia")
            break;
        case 2:
            msg.reply("Zdobędziesz dużo pieniędzy")
            break;
        case 3:
            msg.reply("Znajdziesz nowe hobby")
            break;
        case 4:
            msg.reply("Pokłucisz się z przyjacielem")
            break;
        case 5:
            msg.reply("Będziesz otoczony przez obcych ludzi")
            break;
        case 6:
            msg.reply("Będziesz na krawędzi życia i śmierci")
        }   
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 86400000);
    }
}

module.exports.help ={
    "name":"Dailyomen",
    "description":"Dzienna wróżba"
}
