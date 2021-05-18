const discord = require("discord.js")
const userdata = require("../userdata.js")
module.exports.run = (msg,bot,args)=>{
    const userid = msg.member.id
    if(msg.author.id == "285025528442912778"||msg.author.id=="330768055468818435"){
        const filter = m => m.author.id == msg.author.id;
        const collector = msg.channel.createMessageCollector(filter, { time: 15000, max:1});
            collector.on('collect', m => {
                let number = 0;
                try{
                    number = parseInt(m.content)
                }
                catch(error) {
                    //Debill nie podał liczby
                }
                console.log(m.content)
            })
    }
}

module.exports.help = {
    'name': 'Give',
    'description': 'Komenda dla administratorów'
};