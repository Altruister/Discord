const { Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'unmute',
    description: "unmute command",
    execute(message, args){
        const target = message.mentions.users.first();
        message.delete()
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Fan');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            const exampleEmbed = new MessageEmbed()

                .setColor('#f5d5ff')
                .setTitle('Unmuted')
                .setDescription('Member has been unmuted. :white_check_mark:')
            
            message.channel.send(exampleEmbed);
            //message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('Please @ someone to umute or they do not exist.');
        }
    }
}