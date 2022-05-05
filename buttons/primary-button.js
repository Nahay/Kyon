module.exports = {
    name: 'primary-button',
    runInteraction: async (client, interaction) => {
        await interaction.reply({content: 'Primary button!!'});
    }
}