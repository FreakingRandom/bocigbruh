const discord = require("discord.js")
const options = ["kamień","papier","nożyce"]
module.exports.run = (msg,bot,args)=>{
    console.log(options.join(","))
    const botOption = options[Math.round(Math.random()*2)] 
    const winCondition ={"nożyce":"kamień","papier":"nożyce","kamień":"papier"}
    const name2emoji = {"nożyce":":scissors:","kamień":":rock:","papier":":roll_of_paper:"}
    
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
        msg.channel.send("Bot wybrał "+name2emoji[botOption]+". "+msg.author.username+" wygrał")
    }
    else{
        msg.channel.send("Bot wybrał "+name2emoji[botOption]+". "+msg.author.username+" przegrał")
    }
}
module.exports.help={
    "name":"Rps",
    "description":"Gra w kamień, papier, nożyce z botem. `Rps  "
}