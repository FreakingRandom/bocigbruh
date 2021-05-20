/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const discord = require('discord.js');
const userdata = require('../userdata.js');
module.exports.run = (msg, bot, args) => {
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
		const maxmoney = 0.1 + lvl/1000;
        
		let iloscpieniedzywkoparce = Math.round(czasuplyniety * 1.1 * lvl * 100)/1000000;
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
		default:
			msg.channel.send(`You have accumulated ${iloscpieniedzywkoparce} :coin: | ${Math.round(iloscpieniedzywkoparce/maxmoney*10000)/100}% in your cryptominer.`);
			break;
		}
	}

};
module.exports.help = {
	'name': 'Crypto',
	'description': 'Mine bot currency by using a cryptominer.'
};