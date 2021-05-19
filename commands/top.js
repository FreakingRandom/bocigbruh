const discord = require("discord.js")
const userdata = require("../userdata.js")
const fs = require("fs")
const { ENETDOWN } = require("constants")

module.exports.run=(msg,bot,args)=>{
    let data2 = []
    let sorted = []
    fs.readdir("./Userdata",async(error,files)=>{
        files.forEach((file)=>{
            const id = file.split('.')[0]
            let data = userdata.getUserData(id)
            data.id = id
            data2.push(data)
            
        })
        
        switch(args[0]){
        
        case 'crypto':
            data2 = data2.filter(a=>a!=undefined&&a.koparka!=undefined)
            const embed = new discord.MessageEmbed()
            embed.setTitle('Users with the most upgraded cryptominer')
            embed.setThumbnail('http://cdn.benchmark.pl/uploads/article/78531/MODERNICON/e53991888ed9aa0f4bbb693a449a6bde130b9575.jpg')
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
            data2 = data2.filter(a=>a!=undefined&&a.money!=undefined)
            const embedd = new discord.MessageEmbed()
            embedd.setTitle('Richest users')
            embedd.setThumbnail('https://images.emojiterra.com/google/android-11/512px/1f4b5.png')
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
            embededed.setTitle(":star: 2 Rankings available :star:")
            embededed.addFields(
                { name: 'Money', value: 'Shows the richest users.',inline: true },
                { name: 'Crypto', value: 'Shows users with the most upgraded cryptominer', inline: true },)
                embededed.setThumbnail('https://emoji.gg/assets/emoji/1238_Trophy.png') 
                msg.channel.send(embededed)
            }
           
    })
   
}







module.exports.help = {
    'name': 'Top',
    'description': 'Wyświetla ranking użytkowników.'
};