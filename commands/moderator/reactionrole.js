module.exports = {
    name: 'reactionrole',
    description: "sets up a reaction role message!",
    async execute(message, args, Discord, client){
        const channel = '807004734632230942';
        const youtubeNotiRole = message.guild.roles.cache.find(role => role.name === "Youtube Noti");
        const twitterNotiRole = message.guild.roles.cache.find(role => role.name === "Twitter Noti");
        const twitchNotiRole = message.guild.roles.cache.find(role => role.name === "Twitch Noti");
        const announcementNotiRole = message.guild.roles.cache.find(role => role.name === "Announcement Noti");
        const eventNotiRole = message.guild.roles.cache.find(role => role.name === "Event Noti");

        const youtubeNotiReaction = '<:youtubenotiemoji:807007720867364926>';
        const twitterNotiReaction = '<:twitternotiemoji:807007771425243167>';
        const twitchNotiReaction = '<:twitchnotiemoji:807007758292484128>';
        const announcementNotiReaction = '<:announcementsnotiemoji:807007736033837056>';
        const eventNotiReaction = '<:eventnotiemoji:807007747861774396>';

        const exampleEmbed = new MessageEmbed()
                .setColor('#f5d5ff')
                .setTitle('React to this message to get certain roles for notifications.')
                .setDescription('<:youtubenotiemoji:807007720867364926> ===> Get notified when I post a YouTube video. /n /n /n <:twitternotiemoji:807007771425243167> ===> Get notified when I post a tweet. /n /n /n <:twitchnotiemoji:807007758292484128> ===> Get notified when I go live on Twitch /n /n /n <:announcementsnotiemoji:807007736033837056> ===> Get notified when someone posts an announcement. /n /n /n <:eventnotiemoji:807007747861774396> ===> Get notified when an event is about to start/starting.')
                .setFooter("Reaction Roles")
                    
            let messageEmbed = await message.channel.send(embed);
            
            messsageEmbed.react(youtubeNotiReaction);
            messsageEmbed.react(twitterNotiReaction);
            messsageEmbed.react(twitchNotiReaction);
            messsageEmbed.react(announcementNotiReaction);
            messsageEmbed.react(eventNotiReaction);

    }
}