const userdata = require("../userdata.js")
const discord = require("discord.js") 

module.exports.run=(msg,bot,args)=>{
    
    const embed = new discord.MessageEmbed()
    let zczytywanko = userdata.getUserData(msg.member.id)
    let money = zczytywanko.money
    

    if(money<=-1){
        
        embed.setFooter("You fell into debt. Quick make some money by working to get out of it!")
    }
    
    if(money==undefined){
        money = 0
        zczytywanko.money = 0
        userdata.setUserData(msg.member.id,"money",money)
        msg.channel.send("Wait we're currently assigning your bank account.")
        setTimeout(()=>{
            msg.channel.send("Type the command again to show your current balance.")
        },3000);
    }
    else{
    
        
        embed.setTitle("Balance :dollar:")
        embed.addField("Available funds",money)
        embed.setColor("#abf230")
        msg.channel.send(embed)
    }

   
        
}



module.exports.help= {
    "name":"Balance",
    "description":"Shows acctual balance."
}