const discord = require("discord.js")
const userdata = require("../userdata.js")
module.exports.class=(msg,bot,args)=>{
    const member = msg.member
    if(args[1]==undefined){
        const embed = new discord.MessageEmbed()
        embed.setColor(msg.member.displayHexColor)
        embed.setTitle(`Klasy`)
        embed.addFields(
            { name: 'Archer', value: 'Zwiększone obrażenia od łuków, potrafi używać jedynie zaklęć leczących.',inline: true },
            { name: 'Knight', value: 'Zwiększone obrażenia bronią białą, nie potrafi używać magii.', inline: true },
            { name: 'Wizard', value: 'Atakuje magią, używa many, ma zmniejszone obrażenia od zwykłych broni.', inline: true },)
            msg.channel.send(embed)
    }
}
module.exports.run=(msg,bot,args)=>{
    
    switch(args[0]){
        default:
            const embed = new discord.MessageEmbed()
            embed.setColor(`#2137FF`)
            embed.setTitle(`Dungeons`)
            embed.setURL("https://ujeb.se/gQdpE")
            embed.setDescription(`Link do wiki ^`)
            embed.addFields(
                { name: 'Explore', value: 'Pozwala wyruszyć na polowanie i zdobywanie łupów',inline: true },
                { name: 'Inventory', value: 'Pokazuje aktualny ekwipunek', inline: true },
                { name: 'Class', value: 'Pozwala zmienić klasę postaci', inline: true },)
            embed.setImage('https://cdn.discordapp.com/attachments/746110885692571740/819252470937157713/unknown.png')
            embed.setThumbnail(`https://cdn.discordapp.com/attachments/746110885692571740/819252470937157713/unknown.png`)
            msg.channel.send(embed)
        break;
        case 'class':
            this.class(msg,bot,args)
        break;
    }
}
// zamysł = bedzie dungeon + args  bo zwykly dungeon bedzie wywalal info
// dungeon + explore = timer 1h i powrot z lootem typu pieniadze bron i uzbrojenie
//dungeon shop  sklep z przedmiotami
// dungeon sell sprzedajesz gorsze itemy
//osobna komenda trade @uzytkownik trade z uzytkownikiem
//i cos sie wymysli jeszcze chyba 



module.exports.help = {
    'name': 'Dungeon',
    'description': 'Coming soon'
};