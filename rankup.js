const discord = require("discord.js")

module.exports.rankup=(bot,user)=>{
    const ranks = ['Żul Mietek','Prestiżul','Plebs','Korposzczur','Manager McDonalds','IT Company CEO','Mafia Boss LVL 100','Hacker','Bóg']
    const roles = user.roles.cache
    for(i = 0; i < ranks.length; i++){
        const newrole = user.guild.roles.cache.find(f=>f.name==ranks[i])
        if(!roles.some(r=>r.name==ranks[i])){
            user.roles.add(newrole)
            break;
        }
    }
}