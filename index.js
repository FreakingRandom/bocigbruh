const fs = require('fs');
// eslint-disable-next-line no-unused-vars
const UserData = require('./userdata.js');
const configFile = fs.readFileSync('config.json');
const config = JSON.parse(configFile);
const token = config.token;
const discord = require('discord.js');
const prefix = config.prefix;
const bocig = new discord.Client();
bocig.commands = new discord.Collection();

function commandregister() {
	fs.readdir('./commands/', (error, files) => {
		files.forEach((file) => {
			const commandname = file.split('.')[0];
			const path = './commands/' + commandname;
			const pather = require(path);
			try {
				bocig.commands.set(pather.help.name, pather);
			}
			catch(error){
				console.log(`Failed to load module ${path}`);
			}
		});
	});
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

}
bocig.on('ready', () => {

	console.log('bot is ready');
	bocig.user.setActivity('Have a great day', {
		type: 'PLAYING'
	});
	commandregister();
});
bocig.on('message', (msg) => {
	const content = msg.content;
	if (content.startsWith(prefix)) {

		const userInput = content.split(' ');
		const commandname = capitalizeFirstLetter(userInput[0].slice(prefix.length));
		const args = userInput.slice(1);
		const command = bocig.commands.get(commandname);
		if (command != undefined) {
			command.run(msg, bocig, args);
		}

	}

});
bocig.on('guildCreate', async (guild) => {
	await guild.roles.create({
		data: {
			name: 'Żul Mietek',
			color: '#753900',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'Prestiżul',
			color: '#eb7e17',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'Plebs',
			color: '#9c694f',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'Korposzczur',
			color: '#878787',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'Manager McDonalds',
			color: '#db7c1d',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'IT Company CEO',
			color: '#db30b3',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'Mafia Boss LVL 100',
			color: '#2a9e24',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'Hacker',
			color: '#000000',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'Bóg',
			color: '#f5dd42',
			permissions: 2251804225
		}
	});
	await guild.roles.create({
		data: {
			name: 'Bounty Hunter',
			color: '#fffffe',
			permissions: 3472351041
		}
	});


});



bocig.login(token);