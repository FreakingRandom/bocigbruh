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
            const goodtogo = new Date(nowtime.getTime() + 7.5 * 60 * 1000)
            userdata.setUserData(UserID, "goodtogo", goodtogo.toString())
            const data = userdata.getUserData(UserID)
            let money = data.money
            
            const liczba1 = Math.round((Math.random()+1)*4)
            const liczba2 = Math.round((Math.random()+1)*4)
            const odpowiedz = liczba1+liczba2
            msg.reply(`Anty-macro. Prosze odpowiedz na pytanie.\n       Ile jest ${liczba1} + ${liczba2}?`)
            const filter = m => m.author.id == msg.author.id;
            const collector = msg.channel.createMessageCollector(filter, { time: 15000, max:1});
            collector.on('collect', m => {
                if (m.content==odpowiedz){
                    const zarobek = Math.round(Math.random() * 500 + 1000)
                    userdata.setUserData(UserID, "money", money + zarobek)
                    msg.channel.send("Ciężko pracowałeś i zarobiłeś " + zarobek + " :dollar:")
                
                }
                else{
                    msg.reply(`jest głupi i nie umie liczyć`)
                }
            });
            
        } else {
            msg.channel.send("Jesteś zbyt zmęczony, żeby pracować. :sleeping:")
        }
    }

}
module.exports.help = {
    "name": "Work",
    "description": "Zarabiaj pieniądze. `work"
}