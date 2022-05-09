const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Commande ping",
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    examples: ['-ping'],
    run: (client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Pong !')
        .addFields(
            { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true },
            { name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true },
        )
        .setTimestamp()
        .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });

        message.channel.send({ embeds: [embed] });
    },
    runInteraction: (client, interaction) => {
        interaction.reply('Pong !');
    }
}