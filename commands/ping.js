const discord = require("discord.js")
module.exports.run = (msg,bot,args)=>{
    msg.channel.send(`:ping_pong: Latency is ${Math.abs(Date.now() - msg.createdTimestamp)}ms. API Latency is ${Math.round(bot.ws.ping)}ms.`);
}
    module.exports.help={
        "name":"Ping",
        "description":"Shows bots acctual ping."
    }