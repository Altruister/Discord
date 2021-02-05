const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ban',
    description: "ban command",
    execute(message, args){
        const member = message.mentions.members.first();
        message.delete()
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            const exampleEmbed = new MessageEmbed()
                .setColor('#f5d5ff')
                .setTitle('Banned')
                .setDescription('Successfully banned member from the server. :wave: I hope they learned their lesson!')
            
            message.channel.send(exampleEmbed);
        }else{
            message.channel.send('Please @ someone to ban or they do not exist.');
        }
    }
}        