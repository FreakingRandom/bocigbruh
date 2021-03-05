const fs = require("fs")
const UserData = require("./userdata.js")
const configFile = fs.readFileSync("config.json")
const config = JSON.parse(configFile)
const token = config.token
const discord = require("discord.js")
const prefix = config.prefix
const bocig = new discord.Client()
bocig.commands = new discord.Collection()
function commandregister(){
    fs.readdir("./commands/",(error, files)=>{
        files.forEach((file)=>{
            const commandname = file.split(".")[0]
            const path = './commands/'+commandname
            const pather = require(path)
            bocig.commands.set(pather.help.name,pather)
        })
    })
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    
}
bocig.on("ready",()=>{
    //UserData.createUserData("robuxo")
    //const UserCum = UserData.getUserData("sex")
    //UserData.setUserData("sex","sex","poies")
    //console.log(UserCum.Wins) 
    console.log("bot is ready")
    bocig.user.setActivity("Miłego pobytu na serwerze",{type:"PLAYING"})
    commandregister()
})
bocig.on("message",(msg)=>{
    //UserData.setUserData(msg.author.id,"lastmsg",msg.content)
    /*if(msg.mentions.everyone){
        msg.delete()
    }
    */
    
    
    const content = msg.content
    if(content.startsWith(prefix)){
    
        const userInput = content.split(" ")
        const commandname = capitalizeFirstLetter(userInput[0].slice(prefix.length))
        const args = userInput.slice(1)
        const command = bocig.commands.get(commandname)
        if(command!= undefined){
            command.run(msg,bocig,args)
        }
        /*
        console.log(userInput)
        console.log(command)
        console.log(args)
        console.log(args[0])
        switch(command){
            case "jakajestpogoda":
                if(args.length!=1){
                    msg.reply("kurwa idioto wpisz liczbe a nie pierdolisz mi z komendami kurwa to tez naprawilem.")
                    return;
                }

                if(args[0]== "1"){
                    msg.reply("jest slonecznie")
                }
                else if(args[0]== "2"){
                    msg.reply("napierdala gradem")
                }
                else {
                    msg.reply("podaj liczbę od 1 do 2")
                }    
                break;
            case "pinger":
                msg.channel.send("ponger")
                break;
            case "kot":
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
                break;

            case "ping":
                msg.channel.send(`:ping_pong:Latency is ${Math.abs(Date.now() - msg.createdTimestamp)}ms. API Latency is ${Math.round(bocig.ws.ping)}ms`);

                break;
            case "guildinfo":
                const guild = msg.guild
                const embed = new discord.MessageEmbed()
                embed.setTitle("Informacje")
                embed.addField("Data powstania.",guild.createdAt)
                embed.addField("Nazwa serwera",guild.name)
                embed.setAuthor(bocig.user.tag)
                embed.setColor("#34eba4")
                embed.setThumbnail(guild.iconURL())
                msg.channel.send(embed)
                break;
            case "help":
                require("./commands/help.js").run(msg,bocig)
                const name = require("./commands/help.js").help.description
                console.log(name)                
        }
    */    
    }
    
})






bocig.login(token)
