const userdata = require("../userdata.js")
const discord = require("discord.js") 

module.exports.run=(msg,bot,args)=>{
    console.log("aaaaaaaaaaaaaaaaaa")
    let zczytywanko = userdata.getUserData(msg.member.id)
    let money = zczytywanko.money
    console.log(money)
    
    if(money==undefined){
        money = 0
        zczytywanko.money = 0
        userdata.setUserData(msg.member.id,"money",money)
        msg.channel.send("Zaczekaj przypisujemy konto bankowe...")
        setTimeout(()=>{
            msg.channel.send("Wpisz komendę jeszcze raz")
        },3000);
    }
    else{
        console.log(money)
        const embed = new discord.MessageEmbed()
        embed.setTitle("Balans :dollar:")
        embed.addField("Dostępne środki",money)
        embed.setColor("#abf230")
        msg.channel.send(embed)
    }

    
        
}



module.exports.help= {
    "name":"Balance",
    "description":"Pokazuje aktualny balans użytkownika"
}