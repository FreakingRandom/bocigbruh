
const permissions = require('../permissions')
const userdata = require('../userdata.js')
module.exports.run=async(msg,bot,args)=>{
    
    const mentioned = msg.mentions.members.first()
    if(mentioned == undefined){
        msg.reply(`Provide right arguments!`)
        return;
    }
    const mentionedID = mentioned.id
    const role = await msg.member.guild.roles.fetch('844299933825368074')
    
    if(permissions.perms(msg.member) == 5){
        if(userdata.getUserData(mentionedID).Tester == 'False'){
            userdata.setUserData(mentionedID.toString(),'Tester','True')
            msg.reply(`Added ${mentioned} to the tester list.`)
            mentioned.roles.add(role)
        }
        else{
            userdata.setUserData(mentionedID.toString(),`Tester`,`False`)
            msg.reply(`Deleted ${mentioned} from the tester list.`)
            mentioned.roles.remove(role)
        }
    }
    else{
        userdata.setUserData(mentionedID.toString(),'Tester','False')
    }
}
module.exports.help={
    'name':'Tester',
    'description':'Administrator command.'
}
//autistic screeching