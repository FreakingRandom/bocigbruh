/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const fluctuations = require('../sus');
const discord = require('discord.js');
const userdata = require('../userdata.js');
module.exports.run = (msg, bot, args) => {
	const przelicznik = Math.round(fluctuations.calculate(new Date().getTime()/600000)*1000);
	const zczytywansko = userdata.getUserData(msg.author.id);
	const LastMined = new Date(zczytywansko.LastMined) || new Date();
	const lvl = zczytywansko.koparka || 0;
	const czasuplyniety = Math.abs(LastMined.getTime() - new Date().getTime()) / 60000;
	const money = userdata.getUserData(msg.author.id).money;
	const BotCoin = userdata.getUserData(msg.author.id).BotCoin;

	if (lvl == 0||lvl == undefined) {
		msg.channel.send('You need to buy a cryptominer to use this command!');
		userdata.setUserData(msg.member.id,'koparka',0);
	} else {
		const maxmoney = 1 + (lvl*lvl)/1000;
        
		let iloscpieniedzywkoparce = Math.round(czasuplyniety * 1.1 * lvl * 100)/100000;
		iloscpieniedzywkoparce = iloscpieniedzywkoparce >= maxmoney ? maxmoney : iloscpieniedzywkoparce;
		switch (args[0]) {
		case 'collect':
			userdata.setUserData(msg.author.id, 'LastMined', new Date().toString());
			userdata.setUserData(msg.author.id, 'BotCoin', BotCoin + iloscpieniedzywkoparce);
			msg.channel.send(`You've made ${iloscpieniedzywkoparce} :coin: by mining crypto.`);
			break;
		case 'max':
			msg.reply(`Max amount of crypto you can hold in the miner is ${maxmoney} :coin:`);
			break;
		case 'lvl':
			msg.reply(`Your cryptominer is on level ${lvl}.`);
			break;
		case 'rate':
			msg.reply(`Current exchange rate is ${przelicznik}.`);
			break;
		case 'exchange':
			if(args[1]==undefined){
				msg.reply(`Please enter a valid number.`);
			}
			else{
				if(isNaN(args[1])){
					msg.reply('Please enter a valid number.');
				}
				else{
					const numer = parseFloat(args[1]);
					if(numer > BotCoin){
						msg.reply(`You can't exchange more than you have.`);
					}
					else{
						const botexchange = iloscpieniedzywkoparce*przelicznik;
						iloscpieniedzywkoparce -= botexchange;
						userdata.setUserData(msg.author.id,'BotCoin', BotCoin - numer);
						userdata.setUserData(msg.author.id,'money', money + botexchange);
						msg.reply(`You've just exchanged ${numer} :coin: to ${Math.round(botexchange)} :dollar:.`);
					}
				}
			}
			break;
		case 'status':
			msg.channel.send(`You have accumulated ${iloscpieniedzywkoparce} :coin: | ${Math.round(iloscpieniedzywkoparce/maxmoney*10000)/100}% in your cryptominer and that is ${Math.round(przelicznik*iloscpieniedzywkoparce)} :dollar:.`);
			break;
		default:
			const embed = new discord.MessageEmbed()
			embed.setTitle('Cryptominer');
			embed.addField('Collect','Collects your accumulated Botcoin into your bank account.')
			embed.addField('Max','Shows your maximum capacity of Botcoin in your cryptominer.')
			embed.addField('Rate','Shows acctual BotCoin (:coin:) to dollars (:dollar:) exchange ratio.')
			embed.addField('Lvl','Shows your acctual cryptominer level.')
			embed.addField('Exchange','Exchanges BotCoin (:coin:) from your bank into dollars (:dollar:)')
			embed.setColor('#DCAB00')
			msg.channel.send(embed)
		}
		
	}

};
module.exports.help = {
	'name': 'Crypto',
	'description': 'Mine bot currency by using a cryptominer.'
};