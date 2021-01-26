const discord = require("discord.js")
const { url } = require("inspector")
module.exports.run = (msg,bot,args)=>{
    const stolenuser = msg.mentions.members.first().user
    const embed = new discord.MessageEmbed()
    embed.setTitle("Ukradziony awatar "+stolenuser.tag)
    embed.setThumbnail(stolenuser.avatarURL())
    embed.addField("URL",stolenuser.avatarURL())
    embed.setColor("#ae36ec")
    console.log(msg.mentions.members.first().user.avatarURL())
    msg.channel.send(embed)
}




module.exports.help ={
    "name":"Stealimg",
    "description":"Wyświetla zdjęcia gorących crewmateow w twojej okolicy"
    }