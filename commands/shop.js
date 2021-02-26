const discord = require("discord.js")
const userdata = require("../userdata.js")
const rankup = require("../rankup.js")
module.exports.run = (msg, bot, args) => {
    let zczytywanko = userdata.getUserData(msg.member.id)
    let money = zczytywanko.money

    //args.length długość argumentów
    if (args.length == 0) {
        const embed = new discord.MessageEmbed()
        embed.setTitle("Sklepik :shopping_cart:")
        embed.addField("1 Rank-up  :five::zero::zero::zero: :dollar:","Dostajesz range wyżej")
        embed.addField("2 Bilet na loterie  :one::zero::dollar:","W.I.P")
        embed.setColor("#cc2c16")
        msg.channel.send(embed);
    }
    else{
        console.log(args[0])
        switch (args[0]) {
            case "1":
                if (money >= 5000) {
                    userdata.setUserData(msg.member.id,"money",money - 5000)
                    const ranga = rankup.rankup(msg.member)
                    const ranganame = ranga.name
                    setTimeout(()=>{
                        msg.channel.send(`Zakupiłeś ${ranganame}.Twój balans wynosi teraz ${userdata.getUserData(msg.member.id).money}.`);
                    },20);
                    break;
                } else {
                    msg.channel.send("Nie masz wystarczająco pieniędzy")
                }
        }
    }
}


module.exports.help = {
    "name": "Shop",
    "description": "Pokazuje towary dostępne w sklepie. `Shop"
}