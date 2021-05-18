const process = require('process')
const permissions = require('../permissions')
module.exports.run=(msg,bot,args)=>{
    if(permissions.perms(msg.member) == 5){
        msg.channel.send('Bot is curently being updated. Please wait.')
        bot.user.setActivity("Restarting", {
            type: "OFFLINE"
        }
        )
        process.exit(0)
    }
}
module.exports.help={
    'name':'Restart',
    'description':'Komenda dla administratorów'
}