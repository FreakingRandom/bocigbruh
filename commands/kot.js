const discord = require("discord.js")
module.exports.run = (msg,bot,args)=>{
    console.log(args)
    if(args.length!=1){
        msg.reply("kurwa idioto wpisz liczbe a nie pierdolisz mi z komendami kurwa to tez naprawilem.")
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
    console.log(msg)
}
module.exports.help ={
    "name":"kot",
    "description":"wyświetla zdjęcia gorących kotów w twojej okolicy"
}
