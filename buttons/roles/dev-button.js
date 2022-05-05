module.exports = {
    name: 'dev-button',
    runInteraction: async (client, interaction) => {
        let roleID = '966408925450756155';
        if(interaction.member.roles.cache.has(roleID)) {
            await interaction.member.roles.remove(roleID);
            await interaction.reply({content: `I've removed you the role **Dev**`, ephemeral: true});
        }
        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `I've given you the role **Dev**`, ephemeral: true});
        }       
    }
}