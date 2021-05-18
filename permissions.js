const discord = require("discord.js")
const userdata = require('./userdata')
module.exports.perms=(member)=>{
    let lvl = 1
    if(userdata.getUserData(member.id).Tester == 'True'){
        lvl = 2
    }
    if(member.roles.cache.some(r => r.name.toLowerCase().includes('mod'))){
        lvl = 3
    }  
    if(member.roles.cache.some(r => r.name.toLowerCase().includes('admin'))||member.permissions.has('ADMINISTRATOR')){
        lvl = 4
    }
    if(member.id == '285025528442912778'||member.id == '330768055468818435'){
        lvl = 5 
    }
    return lvl
    
}


/*
1 - everyone/plebs
2 - tester
3 - moderator
4 - admin
5 - owner
*/