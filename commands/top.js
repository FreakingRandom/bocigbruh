const discord = require("discord.js")
const userdata = require("../userdata.js")
const fs = require("fs")
const { ENETDOWN } = require("constants")

module.exports.run=(msg,bot,args)=>{
    let data2 = []
    let sorted = []
    fs.readdir("./userdata",async(error, files)=>{
        files.forEach((file)=>{
            const id = file.split('.')[0]
            let data = userdata.getUserData(id)
            data.id = id
            data2.push(data)
            
        })
        data2 = data2.filter(a=>a!=undefined&&a.koparka!=undefined&&a.money!=undefined)
        switch(args[0]){
        
        case 'koparka':
            const embed = new discord.MessageEmbed()
            embed.setTitle('Użytkownicy z najbardziej ulepszonymi koparkami')
            sorted = data2.sort((a,b)=>a.koparka-b.koparka).reverse()
            
            const enmebde = await msg.channel.send(embed)
            const best = await msg.guild.members.fetch(sorted[0].id) 
            embed.setColor(best.displayHexColor)
            sorted.forEach(async(info)=>{
                const kopara = info.koparka
                const id = info.id
                if(id!=undefined&&kopara!=undefined){
                    const user = await bot.users.fetch(id, { cache: true });
                    const userTag = `${user.username}#${user.discriminator}`;
                    embed.addField(kopara+`  :pick:`,user)
                    
                    enmebde.edit(embed)
                }
                
            })
            
            
        break;
        case 'money':
            const embedd = new discord.MessageEmbed()
            embedd.setTitle('Użytkownicy z największą ilością pieniędzy')
            sorted = data2.sort((a,b)=>a.money-b.money).reverse()
            
            const enmebded = await msg.channel.send(embedd)
            const besto = await msg.guild.members.fetch(sorted[0].id) 
            embedd.setColor(besto.displayHexColor)
            sorted.forEach(async(info)=>{
                const money = info.money
                const id = info.id
                if(id!=undefined){
                    const user = await bot.users.fetch(id, { cache: true });
                    const userTag = `${user.username}#${user.discriminator}`;
                    embedd.addField(money+`  :dollar:`,user)
                    
                    enmebded.edit(embedd)
                }
                
            })
            
            
        break;
        default:
            const embededed = new discord.MessageEmbed()
            embededed.setTitle(":star: Dostępne są 2 rankingi :star:")
            embededed.addFields(
                { name: 'Money', value: 'Największa ilość pieniędzy',inline: true },
                { name: 'Koparka', value: 'Najbardziej ulepszona koparka kryptowalut', inline: true },)
                embededed.setThumbnail('https://emoji.gg/assets/emoji/1238_Trophy.png') 
                msg.channel.send(embededed)
            }
           
    })
   
}







module.exports.help = {
    'name': 'Top',
    'description': 'Wyświetla ranking użytkowników.'
};