const discord = require("discord.js")
const { url } = require("inspector")
module.exports.run = (msg,bot,args)=>{
    const stolenuser = msg.mentions.members.first().user
    const embed = new discord.MessageEmbed()
    embed.setTitle(`Stolen profile picture ${stolenuser.tag}`)
    embed.setThumbnail(stolenuser.avatarURL())
    embed.addField("URL",stolenuser.avatarURL())
    embed.setColor("#ae36ec")
    msg.channel.send(embed)
}




module.exports.help ={
    "name":"Stealimg",
    "description":"Allows you to steal other members profile picture."
    }