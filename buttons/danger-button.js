module.exports = {
    name: 'danger-button',
    runInteraction: async (client, interaction) => {
        await interaction.reply({content: 'Danger button!!'});
    }
}