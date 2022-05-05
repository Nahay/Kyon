module.exports = {
    name: 'osu-button',
    runInteraction: async (client, interaction) => {
        let roleID = '966408754381856819';
        if(interaction.member.roles.cache.has(roleID)) {
            await interaction.member.roles.remove(roleID);
            await interaction.reply({content: `I've removed you the role **Osu!**`, ephemeral: true});
        }
        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `I've given you the role **Osu!**`, ephemeral: true});
        }       
    }
}