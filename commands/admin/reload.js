module.exports = {
	name: 'reload',
    category: 'admin',
    ownerOnly: true,
    usage: 'reload',
    examples: ['-reload'],
	description: 'Reload the bot.',
    permissions: ['ADMINISTRATOR'],
	run: async (client, message, args) => {
        await message.channel.send("Bot reloaded successfully!")
        return process.exit();
	},
    runInteraction: async (client, interaction) => {
        await interaction.reply("Bot reloaded successfully!")
        return process.exit();
	}
};