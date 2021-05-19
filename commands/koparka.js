const discord = require("discord.js")
const userdata = require("../userdata.js")
module.exports.run = (msg, bot, args) => {
    const zczytywansko = userdata.getUserData(msg.author.id)
    const LastMined = new Date(zczytywansko.LastMined) || new Date()
    const lvl = zczytywansko.koparka || 0
    const czasuplyniety = (LastMined.getTime() - new Date().getTime()) / 1000
    const money = userdata.getUserData(msg.author.id).money

    if (lvl == 0||lvl == undefined) {
        msg.channel.send(`You need to buy a cryptominer to use this command!`)
        userdata.setUserData(msg.member.id,"koparka",0)
    } else {
        const maxmoney = 1000 + lvl * 750
        let iloscpieniedzywkoparce = Math.round(500 + czasuplyniety * (czasuplyniety / (Math.pow(4,5 / lvl))))
        iloscpieniedzywkoparce = iloscpieniedzywkoparce >= maxmoney ? maxmoney : iloscpieniedzywkoparce
        switch (args[0]) {
            case 'collect':
                if (iloscpieniedzywkoparce <= 1 / 3 * maxmoney) {
                    msg.channel.send('Your cryptominer accumulated not enough :dollar:.')
                } else {
                    userdata.setUserData(msg.author.id, "LastMined", new Date().toString())
                    userdata.setUserData(msg.author.id, "money", money + iloscpieniedzywkoparce)
                    msg.channel.send(`You've made ${iloscpieniedzywkoparce} :dollar: by mining crypto.`)
                }
                break;
            case 'lvl':
                msg.reply(`Your cryptominer is on level ${lvl}.`)

                break;
            default:
                msg.channel.send(`You have accumulated ${iloscpieniedzywkoparce} :dollar: in your cryptominer.`)
                break;
        }
    }

}
module.exports.help = {
    'name': 'Crypto',
    'description': 'Mine bot currency by using a cryptominer.'
};