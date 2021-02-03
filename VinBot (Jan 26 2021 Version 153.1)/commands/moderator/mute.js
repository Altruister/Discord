const { DiscordAPIError, MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        message.delete()
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Fan');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            const exampleEmbed = new MessageEmbed()

                .setColor('#f5d5ff')
                .setTitle('Muted')
                .setDescription('<@${memberTarget.user.id}> has been muted. :mute:')
            
            message.channel.send(exampleEmbed);
            //message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}. Reason: ${args[2]}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            const exampleEmbed = new MessageEmbed()
                .setColor('#f5d5ff')
                .setTitle('Error :no_entry_sign:')
                .setDescription('Could not find member to mute. Please @ someone that exists.')
            
            message.channel.send(exampleEmbed);
            //message.channel.send('Please @ someone to mute or they do not exist');
        }
    }
}
 