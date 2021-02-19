const Discord = require('discord.js');

const { EventEmitter } = require('events');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '>';

const fs = require('fs');

client.commands = new Discord.Collection();

const dir = ['moderator', 'warnings']; //Add your subfolders here and place your commands in the respective folder and it will load - Sabba7h

dir.forEach(d => {
    const commandFiles = fs.readdirSync(`./commands/${d}`).filter(file => file.endsWith('.js'));
    console.log(`Loading ${commandFiles.length} commands from directory "${d}"\n`)

    for (const file of commandFiles) {
        const command = require(`./commands/${d}/${file}`);

        console.log(`Loading command "${command.name}"`)

        client.commands.set(command.name, command);
    }

    console.log('\n')
})

client.once('ready', () => {
    console.log('Vin is online!');
});



client.login('ODA5MDc2NDc3Nzg1ODAwNzM1.YCP1MA.naoboVSTGAVh_LzlrZp6AFmWoak');


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//_____________________________MISC_COMMAND(S)________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    if(command === 'announcements'){
        client.commands.get('announcements').execute(message, args);

    } else if (command == 'rr'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    
//______________________________MODERATOR_COMMAND(S)_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    } else if(command == 'm'){
        client.commands.get('mute').execute(message, args);
    
    } else if(command == 'um'){
        client.commands.get('unmute').execute(message, args);
   
    } else if(command == 'b'){
        client.commands.get('ban').execute(message, args);
    
    } else if(command == 'k'){
        client.commands.get('kick').execute(message, args);

//_______________________________WARNING_COMMANDS__________________________________________________________________________________________

    } else if(command == 'vw1'){
        client.commands.get('verbal1').execute(message, args);

    } else if(command == 'vw2'){
        client.commands.get('verbal2').execute(message, args);

    } else if(command == 'vw3'){
        client.commands.get('verbal3').execute(message, args);

    } else if(command == 'vw4'){
        client.commands.get('verbal4').execute(message, args);

    } else if(command == 'vw5'){
        client.commands.get('verbal5').execute(message, args);

    } else if(command == 'vw6'){
        client.commands.get('verbal6').execute(message, args);

    } else if(command == 'vw7'){
        client.commands.get('verbal7').execute(message, args);

    } else if(command == 'vw8'){
        client.commands.get('verbal8').execute(message, args);

    } else if(command == 'vw9'){
        client.commands.get('verbal9').execute(message, args);

    } else if(command == 'vw10'){
        client.commands.get('verbal10').execute(message, args);

    } else if(command == 'vw11'){
        client.commands.get('verbal11').execute(message, args);

    } else if(command == 'vw12'){
        client.commands.get('verbal12').execute(message, args);

    } else if(command == 'vw13'){
        client.commands.get('verbal13').execute(message, args);

    } else if(command == 'vw14'){
        client.commands.get('verbal14').execute(message, args);

    } else if(command == 'vw15'){
        client.commands.get('verbal15').execute(message, args);

    } else if(command == 'vw16'){
        client.commands.get('verbal16').execute(message, args);

    } else if(command == 'vw17'){
        client.commands.get('verbal17').execute(message, args);

//________________________________FAQ_COMMAND(S)_______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    } else if (command == 'faq1'){
        message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f5d5ff')
            .setTitle('Where do I get color roles or make a suggestion for a certain color?')
            .setDescription('You can currently get one of 14 colours in <#785901230848999504>. To make a suggestion please ask a moderator to DM me so that I could maybe add it.')
            .setAuthor('Frequently Asked Question #1')
            .setFooter('Frequently Asked Questions')

        message.channel.send(exampleEmbed);
            
            //message.channel.send(`<@${memberTarget.user.id}>, Frequently Asked Question #1 is located at https://discord.com/channels/705179346704400455/771426489660604466/786237599999983626. Please visit there and visit that channel if you have any questions about anything. Please try not to ping a mod with any questions. Thank you.`).then(d_msg => (d_msg.suppressEmbeds(true))); 
    
    } else if (command == 'faq2'){
        message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f5d5ff')
            .setTitle('How do I post in #art?')
            .setDescription('You would DM a staff member and they will post it there for you. You can visit <#747392558845526026> to see what it would look like when they post it.')
            .setAuthor('Frequently Asked Question #2')
            .setFooter('Frequently Asked Questions')
            
        message.channel.send(exampleEmbed);
    
    } else if (command == 'faq3'){
        message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f5d5ff')
            .setTitle('What do I do if people think I am under the ToS age when really I am not?')
            .setDescription('You do not have to worry about other people in the server thinking you are under the ToS age. If a staff member asks you must give an honest answer. The staff team is the only group of people here that can "hurt" you.')
            .setAuthor('Frequently Asked Question #3')
            .setFooter('Frequently Asked Questions')
            
        message.channel.send(exampleEmbed);

    } else if (command == 'faq4'){
        message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f5d5ff')
            .setTitle('Why can I not use Rhythm bot?')
            .setDescription('You do not have access to rhythm bot; I changed it so only people with the DJ role can use it. Meaning if you do not have the DJ role he is inaccesable. You are able to use MEE6 using **!play** though.')
            .setAuthor('Frequently Asked Question #4')
            .setFooter('Frequently Asked Questions')
            
        message.channel.send(exampleEmbed);

    } else if (command == 'faq5'){
        message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f5d5ff')
            .setTitle('How do I gain levels/xp?')
            .setDescription('Currently, you can only gain xp in 4 channels; <#785736528692772884>, <#769400286199676938>, <#769400336686907402>, and <#769400363819991061>. I disabled gaining xp in all other channels.')
            .setAuthor('Frequently Asked Question #5')
            .setFooter('Frequently Asked Questions')
            
        message.channel.send(exampleEmbed);

//______________________________HELP_CODE_COMMAND(S)______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________        

    } else if (command == 'helpcodesab'){
        message.channel.send('Alright <@633401293968375823>, <@309477922463416322> please help him. He has an issue with the code.')
    
//______________________________REACTION_ROLE_COMMAND(S)______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    } else if (command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
        
    }
});  