module.exports = {
    name: 'gs-button',
    runInteraction: async (client, interaction) => {
        let roleID = '966409132523524117';
        if(interaction.member.roles.cache.has(roleID)) {
            await interaction.member.roles.remove(roleID);
            await interaction.reply({content: `I've removed you the role **Gartic/Skribbl**`, ephemeral: true});
        }
        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `I've given you the role **Gartic/Skribbl**`, ephemeral: true});
        }       
    }
}