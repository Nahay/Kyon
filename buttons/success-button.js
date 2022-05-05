module.exports = {
    name: 'success-button',
    runInteraction: async (client, interaction) => {
        await interaction.reply({content: 'Success button!!'});
    }
}