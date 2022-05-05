module.exports = {
    name: 'bdo-button',
    runInteraction: async (client, interaction) => {
        let roleID = '966412656489693204';
        if(interaction.member.roles.cache.has(roleID)) {
            await interaction.member.roles.remove(roleID);
            await interaction.reply({content: `I've removed you the role **Black Desert Online**`, ephemeral: true});
        }
        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `I've given you the role **Black Desert Online**`, ephemeral: true});
        }       
    }
}