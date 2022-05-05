module.exports = {
    name: 'kurtzpel-button',
    runInteraction: async (client, interaction) => {
        let roleID = '968101926262693928';
        if(interaction.member.roles.cache.has(roleID)) {
            await interaction.member.roles.remove(roleID);
            await interaction.reply({content: `I've removed you the role **Kurtzpel**`, ephemeral: true});
        }
        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `I've given you the role **Kurtzpel**`, ephemeral: true});
        }       
    }
}