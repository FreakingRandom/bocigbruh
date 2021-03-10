const discord = require("discord.js")
const userdata = require("../userdata.js")
module.exports.run=(msg,args,bot)=>{
    const zczytywansko = userdata.getUserData(msg.author.id)
    const LastMined = new Date(zczytywansko.LastMined) || new Date()
    const lvl = zczytywansko.koparka || 0
    const czasuplyniety = (LastMined.getTime() - new Date().getTime())/1000
    if(lvl==0){
        msg.channel.send(`Do użycia tej komendy wymagana jest koparka`)
    }
    else {
        const iloscpieniedzywkoparce = 500 + czasuplyniety*(czasuplyniety/(Math.pow(2,10)))
        msg.channel.send(`Masz w koparce zgromadzone ${iloscpieniedzywkoparce} :dollar:`)
    }
    
}
module.exports.help = {
    'name': 'Koparka',
    'description': 'Kop kryptowaluty. `koparka'
};