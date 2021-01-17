const { MessageEmbed, MessageManager } = require("discord.js");

module.exports = {
    name: 'announcements',
    description: "command for announcements",
    execute(message,args){
        message.delete()
        const exampleEmbed = new MessageEmbed()

                .setColor('#f5d5ff')
                .setTitle(':loudspeaker:')
                .setDescription('If you want to know the latest announcements, go to <#769401752235016223>!')
                .setAuthor('Announcements')
            
            message.channel.send(exampleEmbed);
        //message.channel.send('If you want to know the latest announcements, go to <#769401752235016223>!');



    }
}
