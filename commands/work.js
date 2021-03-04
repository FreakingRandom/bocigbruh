const discord = require("discord.js")
const userdata = require("../userdata.js")

module.exports.run = (msg, bot, args) => {
    const embed = new discord.MessageEmbed()
    let zczytywanko = userdata.getUserData(msg.member.id)
    let money = zczytywanko.money
    const nowtime = new Date()

    const UserID = msg.member.id

    const jes = Date.parse(userdata.getUserData(UserID).goodtogo || new Date())

    if (money == undefined) {
        money = 0
        zczytywanko.money = 0
        userdata.setUserData(msg.member.id, "money", money)
        msg.channel.send("Zaczekaj przypisujemy konto bankowe...")
        setTimeout(() => {
            msg.channel.send("Wpisz komendę jeszcze raz")
        }, 3000);
    } else {
        if (nowtime >= jes) {
            const goodtogo = new Date(nowtime.getTime() + 15 * 60 * 1000)
            userdata.setUserData(UserID, "goodtogo", goodtogo.toString())
            const data = userdata.getUserData(UserID)
            let money = data.money
            const zarobek = Math.round(Math.random() * 500 + 500)
            userdata.setUserData(UserID, "money", money + zarobek)
            msg.channel.send("Ciężko pracowałeś i zarobiłeś " + zarobek + " :dollar:")
        } else {
            msg.channel.send("Jesteś zbyt zmęczony, żeby pracować. :sleeping:")
        }
    }

}
module.exports.help = {
    "name": "Work",
    "description": "Zarabiaj pieniądze. `work"
}