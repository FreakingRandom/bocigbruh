const discord = require("discord.js")
module.exports.run = (msg,bot,args)=>{
    const luck = Math.round(Math.random()*4)+1
    console.log(luck)
    switch(luck){
        case 1:
            msg.channel.send("Przewidywane opady gradu") 
            break;
        case 2:
            msg.channel.send("Będzie słonecznie") 
            break;
        case 3:
            msg.channel.send("Przewidywane tornado. Polecamy się schronić")
            break;
        case 4:
            msg.channel.send("Przewidywane opady deszczu")
            break;
        case 5:
            msg.channel.send("Będzie pochmurno")
            break;
        default:
            msg.channel.send("Coś poszło nie tak")
     }  
}
module.exports.help = {
    "name":"Pogodynka",
    "description":"Prognoza pogody"
}