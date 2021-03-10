const discord = require("discord.js")
const options = ["kamień","papier","nożyce"]
const userdata = require("../userdata")

module.exports.run = (msg,bot,args)=>{
    const botOption = options[Math.round(Math.random()*2)] 
    const winCondition ={"nożyce":"kamień","papier":"nożyce","kamień":"papier"}
    const name2emoji = {"nożyce":":scissors:","kamień":":rock:","papier":":roll_of_paper:"}
    const zczytywansko = userdata.getUserData(msg.author.id)
    const money = zczytywansko.money
    const zarobek = Math.round(Math.random() * 500 + 150)
    const strata = Math.round(Math.random() * -500 - 150)
    if (args.length!=1){
        msg.channel.send("Proszę podaj czym chcesz zagrać")
        return;
    }
    const userOption = args[0].toLowerCase()
    if (!options.includes(userOption)){
        msg.channel.send("Wybierz kamień, papier lub nożyce!")
        return;
    }
    if (botOption == userOption){
        msg.channel.send("Remis :flag_white:")
    }
    else if (winCondition[botOption] == userOption){
        userdata.setUserData(msg.author.id,"money", money + zarobek )
        msg.channel.send("Bot wybrał "+name2emoji[botOption]+". "+msg.author.username+" wygrał i zdobył "+ zarobek)
        
    }
    else{
        userdata.setUserData(msg.author.id,"money", money + strata )
        msg.channel.send("Bot wybrał "+name2emoji[botOption]+". "+msg.author.username+" przegrał i stracił "+ strata)
    }
}
module.exports.help={
    "name":"Rps",
    "description":"Gra w kamień, papier, nożyce z botem. `Rps  "
}