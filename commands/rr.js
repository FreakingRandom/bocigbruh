const discord = require('discord.js');
const userdata = require('../userdata.js');
const { rankdown, rankup } = require('../rankup');
let userPlaying = [];



module.exports.run = (msg, bot, args) => {
    const UserID = msg.author.id;
    const zczytywanko = userdata.getUserData(msg.member.id);
    const money = zczytywanko.money;
    console.log('pee pee poo poo');
    if (userPlaying.includes(msg.author.id)) {
        msg.reply('Moge wygenerować tylko 1 ruletkę na raz. Proszę zaczekaj chwilę.');

        return;
    }

    userPlaying.push(msg.author.id);

    const optionsColors = {
        ':skull:': '#ff0000',
        ':arrow_down_small:': '#8f004c',
        ':up:': '#fff200',
        ':blue_square:': '#00ccff',
    };
    const options = [':skull:', ':arrow_down_small:', ':up:', ':blue_square:'];
    let bar = [':blue_square:', ':blue_square:', ':blue_square:', ':blue_square:', ':blue_square:', ':blue_square:', ':blue_square:', ':blue_square:', ':blue_square:'];
    for (let i = 0; i < bar.length; i++) {
        const randomIndex = Math.round(Math.random() * (options.length - 1));
        bar[i] = options[randomIndex];
    }
    const embed = new discord.MessageEmbed();
    // Template
    const template =
        ':blue_square::blue_square::blue_square::blue_square::arrow_double_down::blue_square::blue_square::blue_square::blue_square:\n' +
        '<RANDOM>\n' +
        ':blue_square::blue_square::blue_square::blue_square::arrow_double_up::blue_square::blue_square::blue_square::blue_square:';

    // Initial
    embed.setAuthor(msg.author.tag);
    embed.setColor('#05ff86');
    embed.setTimestamp(new Date());
    embed.setDescription(template.replace('<RANDOM>', bar.join('')));
    let iterations = Math.round(Math.random() * (3)) + 10;
    if(money>=500){
        msg.channel.send(embed).then(m => {
            const timerID = setInterval(() => {
                // Animate
                iterations--;
                bar = bar.splice(1);
                const randomIndex = Math.round(Math.random() * (options.length - 1));
                bar.push(options[randomIndex]);
                embed.setDescription(template.replace('<RANDOM>', bar.join('')));
                embed.setColor(optionsColors[bar[4]]);
                m.edit(embed);
                // End
                userdata.setUserData(msg.member.id, 'money', money - 500);
                if (iterations <= 0) {
                    clearInterval(timerID);
                    userPlaying = userPlaying.splice(msg.author.id);
                    const finish = bar[4];
                    switch (finish) {
                    case options[0]:
                        msg.member.kick('U died! Respawn?');
                        msg.channel.send('Rzućcie mu link: https://discord.gg/gWtdgKQBbq');
                        embed.setDescription(`You died :skull: ${options[0]}`);
                        break;
                    case options[1]:

                        const dane = userdata.getUserData(UserID);
                        const money = dane.money;
                        const strata = Math.round(Math.random() * -1000 - 750);
                        userdata.setUserData(UserID, 'money', money + strata);
                        embed.setDescription(`Straciłeś ${strata} :dollar:`);
                        break;
                    case options[2]:

                        const data = userdata.getUserData(UserID);
                        const kasa = data.money;
                        const zarobek = Math.round(Math.random() * 1000 + 750);
                        userdata.setUserData(UserID, 'money', kasa + zarobek);
                        embed.setDescription(`Wygrałeś ${zarobek} :dollar:`);
                        break;
                    case options[3]:
                        embed.setDescription('*świerszcz noises*');
                        break;
                    }
                    m.edit(embed);
                }
            }, 2000);
        });
        
    } 
    else{
        msg.channel.send(`Nie masz wystarczającej ilości pieniędzy.`)
        
    }  
};

module.exports.help = {
    'name': 'Rr',
    'description':'Ruletka z ciekawymi nagrodami, ale także z możliwością przegrania. `rr',
};