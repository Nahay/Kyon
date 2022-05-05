module.exports = {
    name: 'no-button',
    runInteraction: async (client, interaction) => {
        if(interaction.member.roles.cache.has('968105284717408266') || interaction.member.roles.cache.has('968102496520245258')) await interaction.reply({content: `Ahaha you're stuck.`, ephemeral: true});

        else {
            await interaction.member.roles.add(roleID);
            await interaction.reply({content: `You'll be notified <3 !`, ephemeral: true});
        }       
    }
}