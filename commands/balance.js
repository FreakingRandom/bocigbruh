const userdata = require("../userdata.js")
const discord = require("discord.js") 

module.exports.run=(msg,bot,args)=>{
    
    const embed = new discord.MessageEmbed()
    let zczytywanko = userdata.getUserData(msg.member.id)
    let money = zczytywanko.money
    

    if(money<=-1){
        
        embed.setFooter("Popadłeś w długi. Zacznij pracować, aby z nich wyjść!")
    }
    
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
    
        
        embed.setTitle("Balans :dollar:")
        embed.addField("Dostępne środki",money)
        embed.setColor("#abf230")
        msg.channel.send(embed)
    }

   
        
}



module.exports.help= {
    "name":"Balance",
    "description":"Pokazuje aktualny balans użytkownika. `balance"
}