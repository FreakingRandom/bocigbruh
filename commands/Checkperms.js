const permissions = require(`../permissions`)
module.exports.run=(msg,bot,args)=>{
    if(permissions.perms(msg.member) >= 1){
        msg.reply(`Your current permission level is ${permissions.perms(msg.member)}`)
    }
}
module.exports.help={
    'name':'Myperms',
    'description':'Shows your acctual permission level on bot.'
}