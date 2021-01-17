const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'verbal3',
    description: "verbal warning command",
    execute(message, args){
        const member = message.mentions.members.first();
        message.delete()
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            const exampleEmbed = new MessageEmbed()
                .setColor('#f5d5ff')
                .setTitle('Rule #3')
                .setDescription('You have been verbally warned for Rule #3. Please do not ignore this or brush it off. \n \n' + `<@${memberTarget.user.id}>`)
                .setAuthor('Verbal Warning')
            
            message.channel.send(exampleEmbed);
            
        }else{
            const exampleEmbed = new MessageEmbed()
                .setColor('#f5d5ff')
                .setTitle('Error :no_entry_sign:')
                .setDescription('Could not find member to warn. Please @ someone that exists.')
            
            message.channel.send(exampleEmbed);
            
        }
    }
}        