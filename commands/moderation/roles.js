const { MessageButton, MessageActionRow } = require('discord.js');

const gameButtons = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('apex-button')
    .setEmoji('<:apexlegends:966410828515516436>')
    .setLabel('Apex Legends')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('lol-button')
    .setEmoji('<:leagueoflegends:966411050532634704>')
    .setLabel('LOL')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('osu-button')
    .setEmoji('<:osu:966411226747908146>')
    .setLabel('Osu!')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('valorant-button')
    .setEmoji('<:valorant:966410826942652466>')
    .setLabel('Valorant')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('gs-button')
    .setEmoji('🖌️')
    .setLabel('Gartic/Skribbl')
    .setStyle('PRIMARY')
);

const gameButtons2 = new MessageActionRow().addComponents(    
    new MessageButton()
    .setCustomId('bdo-button')
    .setEmoji('<:blackdesertonline:966412916645576735>')
    .setLabel('BDO')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('gi-button')
    .setEmoji('<:genshinimpact:968103879973675018>')
    .setLabel('Genshin Impact')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('kurtzpel-button')
    .setEmoji('<:Kurtzpel:968104104687697950>')
    .setLabel('Kurtzpel')
    .setStyle('PRIMARY')
);

const otherButtons = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('weeb-button')
    .setEmoji('<:notlikenico:965032571253694506>')
    .setLabel('Weeb')
    .setStyle('PRIMARY'),

    new MessageButton()
    .setCustomId('dev-button')
    .setEmoji('💻')
    .setLabel('Dev')
    .setStyle('PRIMARY')
);

const notifButtons = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId('yes-button')
    .setEmoji('<:pillowyes:965032448448692264>')
    .setLabel('OUI')
    .setStyle('SUCCESS'),

    new MessageButton()
    .setCustomId('no-button')
    .setEmoji('<:pillowno:965032428316008519>')
    .setLabel('NON')
    .setStyle('DANGER')

);
    
module.exports = {
    name: 'roles',
    description: "Get roles",
    category: 'moderation',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: '-roles',
    run: async (client, message, args) => {
        await message.channel.send({content: 'Rôles de jeu (pour ping qnd on game) :', components: [gameButtons]});
        await message.channel.send({components: [gameButtons2]});
        await message.channel.send({content: 'Rôles tiers (genre pour ping blind test anime etc) :', components: [otherButtons]});
        await message.channel.send({content: 'Un rôle pour être ping par moi pour des messages coolos <3 (au lieu de everyone) ', components: [notifButtons]});
    },
    runInteraction: async (client, interaction) => {
        await interaction.reply({content: 'Rôles de jeu (pour ping qnd on game) :', components: [gameButtons]});
        await interaction.channel.send({components: [gameButtons2]});
        await interaction.channel.send({content: 'Rôles tiers (genre pour ping blind test anime etc) :', components: [otherButtons]});
        await interaction.channel.send({content: 'Un rôle pour être ping par moi pour des messages coolos <3 (au lieu de everyone) ', components: [notifButtons]});
    }
}