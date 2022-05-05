module.exports = {
    name: 'secondary-button',
    runInteraction: async (client, interaction) => {
        await interaction.reply({content: 'Secondary button!!'});
    }
}