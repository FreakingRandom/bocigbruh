const discord = require("discord.js")
module.exports.run = (msg,bot,args)=>{
    const embed2 = new discord.MessageEmbed()
    embed2.setTitle("Help")
    embed2.addFields(
    {name:'jakajestpogoda',value:"Wyświetla pogode jeśli dopiszesz 1 lub 2"},
    {name:"kot", value:"Wyświetla 3 zdjęcia kotów, jeśli podasz liczbę od 1 do 3"},
    {name:"ponger",value:"testowa komenda"},
    {name:"ping",value:"Wyświetla aktualny ping bota"})
    embed2.setColor ("#e6a309")
    msg.channel.send(embed2)
}
module.exports.help={
    "name":"help",
    "description":"Wyświetla wszystkie komedny i ich użycie"
}
