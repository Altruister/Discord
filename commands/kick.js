const { DMChannel, DiscordAPIError, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'kick',
    description: "kick command",
    execute(message, args){
        const member = message.mentions.users.first();
        message.delete()
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            const exampleEmbed = new MessageEmbed()
                .setColor('#f5d5ff')
                .setTitle('Kicked')
                .setDescription('Successfully kicked member from the server. :wave: I hope they learned their lesson!')
            
            message.channel.send(exampleEmbed);
        }else{
            const exampleEmbed = new MessageEmbed()
                .setColor('#f5d5ff')
                .setTitle('Error :no_entry_sign:')
                .setDescription('Could not find member to kick from the server. Please @ someone that exists.')
            
            message.channel.send(exampleEmbed);

        }
    }
}        
