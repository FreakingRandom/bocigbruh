const discord = require('discord.js');
const userdata = require('../userdata.js');
const fs = require("fs")
const http = require("http")
module.exports.run=(msg,bot,args)=>{
    const options = {
        hostname:"49dd97d90791.ngrok.io",
        method:"POST",
        port:80,
        path:`${msg.guild.id}/getUserData/${msg.member.id}`
    }
http.request(options,(response)=>{console.log(response.statusCode)})

}





module.exports.help = {
    "name": "Reputation",
    "description": "W.I.P"
}