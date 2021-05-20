/* eslint-disable no-case-declarations */
const discord = require('discord.js');
const userdata = require('../userdata.js');
// eslint-disable-next-line no-unused-vars
const rankup = require('../rankup.js');
module.exports.run = (msg, bot, args) => {
	let zczytywanko = userdata.getUserData(msg.member.id);
	let money = zczytywanko.money;

	//args.length długość argumentów
	if (args.length == 0) {
		const poziomkop = userdata.getUserData(msg.member.id).koparka || 0;
		let cenakoparki = 30000+1000*poziomkop*poziomkop;
		{
			cenakoparki = cenakoparki.toString();
			cenakoparki = cenakoparki.replaceAll('0',':zero:');
			cenakoparki = cenakoparki.replaceAll('1',':one:');
			cenakoparki = cenakoparki.replaceAll('2',':two:');
			cenakoparki = cenakoparki.replaceAll('3',':three:');
			cenakoparki = cenakoparki.replaceAll('4',':four:');
			cenakoparki = cenakoparki.replaceAll('5',':five:');
			cenakoparki = cenakoparki.replaceAll('6',':six:');
			cenakoparki = cenakoparki.replaceAll('7',':seven:');
			cenakoparki = cenakoparki.replaceAll('8',':eight:');
			cenakoparki = cenakoparki.replaceAll('9',':nine:');
		}
		const embed = new discord.MessageEmbed();
		embed.setTitle('Shop :shopping_cart:');
		embed.addField('ID: :one: Rank-up  :one::zero::zero::zero::zero::zero:', 'Buy yourself a rank to show off.');
		embed.addField('ID: :two: Lottery ticket  :one::zero::dollar: ', 'W.I.P');
		embed.addField(`ID: :three: Cryptominer ${cenakoparki} :dollar: `, 'Build your own crypto farm.');
		embed.setColor('#cc2c16');
		msg.channel.send(embed);
	} else {
		switch (args[0]) {
			case '1':
				const ranga = rankup.rankup(bot,msg.member);
				if(ranga == undefined){
					msg.reply('You already have the highest obtainable rank.')
					return;
				}
                if (money >= 100000) {
                    userdata.setUserData(msg.member.id, 'money', money - 100000);
                    const ranganame = ranga.name
                    setTimeout(() => {
                        msg.channel.send(`You've bought rank - ${ranganame}. Your balance is now ${userdata.getUserData(msg.member.id).money} :dollar: .`);
                    }, 20);

                } else {
                    msg.channel.send('Nie masz wystarczająco pieniędzy');
                }
                break;
           case '3':
			const poziomkop = userdata.getUserData(msg.member.id).koparka || 0;
			const cenakoparki = 50000+1000*poziomkop*poziomkop;
			if(poziomkop >= 50){
				msg.reply('You have maxed out your crypto miner.');
			}
			else if (money >= cenakoparki) {
				userdata.setUserData(msg.member.id, 'money', money - cenakoparki);
				userdata.setUserData(msg.member.id, 'koparka', poziomkop + 1);
				if (poziomkop == 0) {
					msg.reply(`You've bought cryptominer for ${cenakoparki} :dollar:`);
					userdata.setUserData(msg.author.id, 'LastMined', new Date().toString());
					userdata.setUserData(msg.author.id, 'BotCoin', 0);
				}else {
					const lvlup = (poziomkop + 1).toString();
						
					msg.reply(`You've upgraded your cryptominer level to ${lvlup} for ${cenakoparki} :dollar:.` );
				}
			}
			else {
				msg.reply('You don\'t have enough :dollar:.');
			}
			break;
		}
	}
};


module.exports.help = {
	'name': 'Shop',
	'description': 'Buy stuff with bot currency.'
};