module.exports = {
    name: 'gi-button',
    runInteraction: async (client, interaction) => {
        let roleID = '968101982000803841';
        if(interaction.member.roles.cache.has(roleID)) {
            await interaction.member.roles.remove(roleID);
            await interaction.reply({content: `I've removed you the role **Genshin Impact**`, ephemeral: true});
        }
        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `I've given you the role **Genshin Impact**`, ephemeral: true});
        }       
    }
}