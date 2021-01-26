const discord = require("discord.js")
module.exports.run = (msg,bot,args)=>{
    const luck = Math.round(Math.random()*5)+1
    console.log(luck)
    switch(luck){
        case 1:
            msg.channel.send("Przewidywane opady gradu :cloud_rain:") 
            break;
        case 2:
            msg.channel.send("Będzie słonecznie :sunny:") 
            break;
        case 3:
            msg.channel.send("Przewidywane tornado. Polecamy się schronić :cloud_tornado:")
            break;
        case 4:
            msg.channel.send("Przewidywane opady deszczu :cloud_rain:")
            break;
        case 5:
            msg.channel.send("Będzie pochmurno :cloud:")
            break;
        case 6:
            msg.channel.send("Będzie padać śnieg :cloud_snow:")
            break;
        default:
            msg.channel.send("Coś poszło nie tak")
     }  
}
module.exports.help = {
    "name":"Pogodynka",
    "description":"Prognoza pogody. `Pogodynka"
}