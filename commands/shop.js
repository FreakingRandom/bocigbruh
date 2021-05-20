const discord = require('discord.js');
const userdata = require('../userdata.js');
const rankup = require('../rankup.js');
module.exports.run = (msg, bot, args) => {
    let zczytywanko = userdata.getUserData(msg.member.id);
    let money = zczytywanko.money;

    //args.length długość argumentów
    if (args.length == 0) {
		const poziomkop = userdata.getUserData(msg.member.id).koparka || 0
        let cenakoparki = 30000+1000*poziomkop*poziomkop
	{
		cenakoparki = cenakoparki.toString()
		cenakoparki = cenakoparki.replaceAll("0",":zero:")
		cenakoparki = cenakoparki.replaceAll("1",":one:")
		cenakoparki = cenakoparki.replaceAll("2",":two:")
		cenakoparki = cenakoparki.replaceAll("3",":three:")
		cenakoparki = cenakoparki.replaceAll("4",":four:")
		cenakoparki = cenakoparki.replaceAll("5",":five:")
		cenakoparki = cenakoparki.replaceAll("6",":six:")
		cenakoparki = cenakoparki.replaceAll("7",":seven:")
		cenakoparki = cenakoparki.replaceAll("8",":eight:")
		cenakoparki = cenakoparki.replaceAll("9",":nine:")
	}
        const embed = new discord.MessageEmbed();
        embed.setTitle('Shop :shopping_cart:');
        embed.addField('ID: :one: Rank-up  :regional_indicator_o::regional_indicator_u::regional_indicator_t: :regional_indicator_o::regional_indicator_f: :regional_indicator_s::regional_indicator_t::regional_indicator_o::regional_indicator_c::regional_indicator_k: ', 'W.I.P');
        //Zrobic jakis wzor ktory NIE AŻ TAK ostro idzie w góre zaczynamy od 1 miliona  zeby bylo jakies osiagniecie
        embed.addField('ID: :two: Lottery ticket  :one::zero::dollar: ', 'W.I.P');
        embed.addField(`ID: :three: Cryptominer ${cenakoparki} :dollar: `, 'Build your own crypto farm');
        embed.setColor('#cc2c16');
        msg.channel.send(embed);
    } else {
        switch (args[0]) {
           /* case '1':
                if (money >= 5000) {
                    userdata.setUserData(msg.member.id, 'money', money - 5000);
                    const ranga = rankup.rankup(msg.member);
                    const ranganame = ranga.name;
                    setTimeout(() => {
                        msg.channel.send(`Zakupiłeś ${ranganame}.Twój balans wynosi teraz ${userdata.getUserData(msg.member.id).money} :dollar: .`);
                    }, 20);

                } else {
                    msg.channel.send('Nie masz wystarczająco pieniędzy');
                }
                break;
           */ case '3':
				const poziomkop = userdata.getUserData(msg.member.id).koparka || 0
                const cenakoparki = 30000+1000*poziomkop*poziomkop
                const BotCoin = userdata.getUserData(msg.member.id).BotCoin || 0
                if (money >= cenakoparki) {
                    userdata.setUserData(msg.member.id, "money", money - cenakoparki)
                    
                    userdata.setUserData(msg.member.id, "koparka", poziomkop + 1)
                    if (poziomkop == 0) {
                        msg.reply(`You've bought cryptominer for ${cenakoparki} :dollar:`)
						userdata.setUserData(msg.author.id, "LastMined", new Date().toString())
                        userdata.setUserData(msg.author.id, 'BotCoin', 0)
                    } else {
                        const lvlup = (poziomkop + 1).toString()
						
                        msg.reply(`You've upgraded your cryptominer level to ${lvlup} for ${cenakoparki} :dollar:` )
                    }
                }
				else {
					msg.reply("You don't have enough :dollar:");
				}
                break;
        }
    }
};


module.exports.help = {
    'name': 'Shop',
    'description': 'Buy stuff with bot currency.'
};