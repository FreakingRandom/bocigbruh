const discord = require('discord.js');
module.exports.run = (msg,bot,args)=>{
	const embed = new discord.MessageEmbed();
	bot.commands.forEach(command => {
		embed.addField(command.help.name, command.help.description);
	});

	embed.setTitle('Help');
	embed.setColor('#34eba4');
	msg.channel.send(embed);
    
};
module.exports.help={
	'name':'Help',
	'description':'Shows commands and their use.'
};
