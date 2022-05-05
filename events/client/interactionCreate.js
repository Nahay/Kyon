const { Message } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction) {
        if(interaction.isCommand() || interaction.isContextMenu()) {
            const cmd = client.commands.get(interaction.commandName);

            if(!cmd) return interaction.reply("This command doesn't exist !");

            if(cmd.ownerOnly) if(interaction.user.id != ownerId) return interaction.reply("You aren't the boss, you can't use that.");

            if(!interaction.member.permissions.has([cmd.permissions])) return interaction.reply({ content: `You must have the permissions (\`${cmd.permissions.join(', ')}\`) to use this command. `, ephemeral: true});

            cmd.runSlash(client, interaction);
        }
        else if (interaction.isButton()) {
            console.log(interaction.customId);
            const btn = client.buttons.get(interaction.customId);
            if(!btn) return interaction.reply("This button doesn't exist");
            btn.runInteraction(client, interaction);
        }
    }
}