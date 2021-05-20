//const discord = require('discord.js');
const options = ['rock','paper','scissors'];
const userdata = require('../userdata');

module.exports.run = (msg,bot,args)=>{
	const botOption = options[Math.round(Math.random()*2)]; 
	const winCondition ={'scissors':'rock','paper':'scissors','rock':'paper'};
	const name2emoji = {'scissors':':scissors:','rock':':rock:','paper':':roll_of_paper:'};
	const zczytywansko = userdata.getUserData(msg.author.id);
	const money = zczytywansko.money;
	const zarobek = Math.round(Math.random() * 500 + 150);
	const strata = Math.round(Math.random() * -500 - 150);
	if (args.length!=1){
		msg.channel.send('Please enter valid arguments.');
		return;
	}
	const userOption = args[0].toLowerCase();
	if (!options.includes(userOption)){
		msg.channel.send('Choose: Rock, paper or scissors.');
		return;
	}
	if (botOption == userOption){
		msg.channel.send('Draw :flag_white:');
	}
	else if (winCondition[botOption] == userOption){
		userdata.setUserData(msg.author.id,'money', money + zarobek );
		msg.channel.send(`Bot chose ${name2emoji[botOption]}. ${msg.author.username} won ${zarobek} :dollar:`);
        
	}
	else{
		userdata.setUserData(msg.author.id,'money', money + strata );
		msg.channel.send(`Bot chose ${name2emoji[botOption]}. ${msg.author.username} lost  ${strata} :dollar:`);
	}
};
module.exports.help={
	'name':'Rps',
	'description':'Rock paper scissors against the bot.'
};