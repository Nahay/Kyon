const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'anime',
    description: 'Finds a random anime image for your viewing pleasure.',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: '-anime',
    run: async (client, message, args) => {
            const anime = await axios('https://www.reddit.com/user/emdix/m/animemes/top/.json?sort=top&t=day&limit=500').then(res => res.data.data.children);
            const img = anime[Math.floor(Math.random() * anime.length)].data;
            const embed = new MessageEmbed()
            .setTitle(img.title)
            .setImage(img.url)
            .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()
            .setColor(message.member.displayHexColor);
            
            message.channel.send({embeds: [embed] });
    },
    runInteraction: async (client, interaction) => {
        const anime = await axios('https://www.reddit.com/user/emdix/m/animemes/top/.json?sort=top&t=day&limit=500').then(res => res.data.data.children);
        const img = anime[Math.floor(Math.random() * anime.length)].data;
        const embed = new MessageEmbed()
        .setTitle(img.title)
        .setImage(img.url)
        .setFooter({text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()
        .setColor(interaction.user.displayHexColor);
        
        interaction.reply({embeds: [embed]});
    }
}