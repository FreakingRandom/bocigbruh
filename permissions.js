const discord = require("discord.js")

module.exports.perms=(member)=>{
    let lvl = 1

    if(member.roles.cache.some(r => r.name.toLowerCase().includes('mod'))){
        lvl = 3
    }  
    if(member.roles.cache.some(r => r.name.toLowerCase().includes('admin'))||member.permissions.has('ADMINISTRATOR')){
        lvl = 4
    }
    if(member.id == '285025528442912778'||member.id == '330768055468818435'){
        lvl = 5 
    }
    
}


/*
1 - everyone/plebs
2 - tester
3 - moderator
4 - admin
5 - owner
*/