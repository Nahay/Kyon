module.exports = {
    name: 'apex-button',
    runInteraction: async (client, interaction) => {
        let roleID = '966408652397379605';
        if(interaction.member.roles.cache.has(roleID)) {
            await interaction.member.roles.remove(roleID);
            await interaction.reply({content: `I've removed you the role **Apex Legends**`, ephemeral: true});
        }
        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `I've given you the role **Apex Legends**`, ephemeral: true});
        }       
    }
}