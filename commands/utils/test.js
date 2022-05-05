const { MessageButton, MessageActionRow } = require('discord.js');

const buttons = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('primary-button')
    .setLabel('Primary')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('secondary-button')
    .setLabel('Secondary')
    .setStyle('SECONDARY'),

    new MessageButton()
    .setCustomId('success-button')
    .setLabel('Success')
    .setStyle('SUCCESS'),

    new MessageButton()
    .setCustomId('danger-button')
    .setLabel('Danger')
    .setStyle('DANGER'),

    new MessageButton()
    .setURL('https://lilyb.netlify.app')
    .setLabel('Lily')
    .setStyle('LINK'),
);
   
    
module.exports = {
    name: 'test',
    description: "Button test",
    run: async (client, message, args) => {
       await message.channel.send({content: 'Test', components: [buttons]});
    },
    runSlash: async (client, interaction) => {
        await interaction.reply({content: 'Test', components: [buttons]});
    }
}