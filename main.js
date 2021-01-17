const Discord = require('discord.js');

const { EventEmitter } = require('events');

const client = new Discord.Client();

const prefix = '>';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command); 
}

client.once('ready', () => {
    console.log('Vin is online!');
});



client.login('Nzg0MTE3Mjg1NzE0NTI2MjA5.X8koIQ.YYSVLg3HVvsFqxODEOOUXfU-_JI');


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//_____________________________INFORMATIONAL_COMMAND(S)________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    if(command === 'announcements'){
        client.commands.get('announcements').execute(message, args);
    
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
            .setTitle('Frequently Asked Question #1')
            .setDescription('Where do I get color roles or make a suggestion for a certain color? \n \n You can currently get one of 14 colours in <#785901230848999504>. To make a suggestion please ask a moderator to DM me so that I could maybe add it.')
            
        message.channel.send(exampleEmbed);
            
            //message.channel.send(`<@${memberTarget.user.id}>, Frequently Asked Question #1 is located at https://discord.com/channels/705179346704400455/771426489660604466/786237599999983626. Please visit there and visit that channel if you have any questions about anything. Please try not to ping a mod with any questions. Thank you.`).then(d_msg => (d_msg.suppressEmbeds(true))); 
    
    } else if (command == 'faq2'){
        message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f5d5ff')
            .setTitle('Frequently Asked Question #2')
            .setDescription('How do I post in <#747392558845526026>? \n \n You would DM a staff member and they will post it there for you. You can visit <#747392558845526026> to see what it would look like when they post it.')
            
        message.channel.send(exampleEmbed);
    
    } else if (command == 'faq3'){
        message.delete()
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#f5d5ff')
            .setTitle('Frequently Asked Question #3')
            .setDescription('What do I do if people think I am under the ToS age when really I am not? \n \n You do not have to worry about other people in the server thinking you are under the ToS age. If a staff member asks you must give an honest answer. The staff team is the only group of people here that can "hurt" you.')
            
        message.channel.send(exampleEmbed);

//______________________________HELP_CODE_COMMAND(S)______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________        

    } else if (command == 'helpcodesab'){
        message.channel.send('Alright <@633401293968375823>, <@309477922463416322> please help him. He has an issue with the code.')
    
//__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    } 

});  