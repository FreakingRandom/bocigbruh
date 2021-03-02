const discord = require("discord.js")
module.exports.run = (msg,bot,args)=>{
    const embed = new discord.MessageEmbed()
    bot.commands.forEach(command => {
        embed.addField(command.help.name, command.help.description)
    });

    embed.setTitle("Pomoc")
    embed.setColor("#34eba4")
    msg.channel.send(embed)
    
}
module.exports.help={
    "name":"Help",
    "description":"Wyświetla wszystkie komedny i ich użycie"
}
