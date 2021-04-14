const discord = require("discord.js")
module.exports.run = (msg,bot,args)=>{
    if(args.length!=1){
        msg.reply("Proszę podaj tylko jeden argument")
        return;
    }
    else if (args[0]== "1"){
        msg.channel.send("Kot moment uno", {files: ["https://i.imgur.com/dc1PU8j.jpg"]})
    }
    else if (args[0]== "2"){
        msg.channel.send("Kot moment dos", {files: ["https://i.imgur.com/cqAklTF.jpg"]})  
    }
    else if (args[0]== "3"){
        msg.channel.send("Kot moment tres", {files: ["https://i.imgur.com/tM3Hq5Oh.jpg"]})
    }
    else if (parseInt(args[0])> 3 ){
        msg.channel.send("Zabrakło budżetu na koty")
    }   
}
module.exports.help ={
    "name":"Kot",
    "description":"Wyświetla zdjęcia gorących kotów w twojej okolicy. `Kot (1-3)"
}
