module.exports = {
    name: 'valorant-button',
    runInteraction: async (client, interaction) => {
        let roleID = '966408919876526110';
        if(interaction.member.roles.cache.has(roleID)) {
            await interaction.member.roles.remove(roleID);
            await interaction.reply({content: `I've removed you the role **Valorant**`, ephemeral: true});
        }
        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `I've given you the role **Valorant**`, ephemeral: true});
        }       
    }
}