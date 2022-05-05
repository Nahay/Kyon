const ownerId = '511798426464288770';
const owner2Id = '898979545225523200';

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction) {
        if(interaction.isCommand()) {

            const cmd = client.commands.get(interaction.commandName);

            if(!cmd) return interaction.reply("This command doesn't exist !");

            if(cmd.ownerOnly) if(interaction.user.id != ownerId && interaction.user.id != owner2Id) return interaction.reply("You aren't the boss, you can't use that command.");

            if(!interaction.member.permissions.has([cmd.permissions])) return interaction.reply({ content: `You must have the permissions (\`${cmd.permissions.join(', ')}\`) to use this command. `, ephemeral: true});

            cmd.runInteraction(client, interaction);
        }
        else if (interaction.isButton()) {
            const btn = client.buttons.get(interaction.customId);

            if(!btn) return interaction.reply({content: "This button doesn't exist", ephemeral: true});

            btn.runInteraction(client, interaction);
        }
    }
}