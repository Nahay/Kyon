const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');

const commandFolder = readdirSync('./commands');
const prefix = '-';

module.exports = {
    name: 'help',
    category: 'utils',
    description: "Whenever you're lost this command is for you.",
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    examples: '[-help]',
    run: async (client, message, args) => {
        if(!args.length) {
            const noArgsEmbed = new MessageEmbed()
            .setColor(message.member.displayHexColor)
            .addField('Commands List', `A list of all available categories and their commands.\nFor more information about a command, type \`${prefix}help <command>\``);

            for(const category of commandFolder) {
                noArgsEmbed.addField(
                    `${category.replace(/(^\w|\s\w)/g, fl => fl.toUpperCase())}`,
                    `${client.commands.filter(cmd => cmd.category === category.toLowerCase()).map(cmd => cmd.name).join(', ')}`
                );
            }
            return message.channel.send({embeds: [noArgsEmbed] });
        }
        
        const cmd = client.commands.get(args[0]);
        if(!cmd) return message.reply("This command doesn't exist");

        const argsEmbed = new MessageEmbed()
            .setColor(message.member.displayHexColor)
            .setTitle(`\`${cmd.name}\``)
            .setDescription(`${cmd.description} \n Example(s): ${cmd.examples.join(', ')}`)
            .setFooter({text: `Required permissions : ${cmd.permissions.join(', ')}`});

        return message.channel.send({embeds: [argsEmbed] });
    },
    options: [
        {
            name: "command",
            description: "Type the name of the command",
            type: 'STRING',
            required: false
        }
    ],
    runInteraction: async (client, interaction) => {
        const cmdName = interaction.options.getString('command');

        if(!cmdName) {
            const noArgsEmbed = new MessageEmbed()
            .setColor(interaction.user.displayHexColor)
            .addField('Commands List', `A list of all available categories and their commands.\nFor more information about a command, type \`${prefix}help <command>\``);

            for(const category of commandFolder) {
                noArgsEmbed.addField(
                    `${category.replace(/(^\w|\s\w)/g, fl => fl.toUpperCase())}`,
                    `${client.commands.filter(cmd => cmd.category === category.toLowerCase()).map(cmd => cmd.name).join(', ')}\n}`
                );
            }
            return interaction.reply({embeds: [noArgsEmbed], ephemeral: true });
        }
        
        const cmd = client.commands.get(cmdName);
        if(!cmd) return interaction.reply({content: "This command doesn't exist", ephemeral: true });

        const argsEmbed = new MessageEmbed()
            .setColor(interaction.user.displayHexColor)
            .setTitle(`\`${cmd.name}\``)
            .setDescription(`${cmd.description} \n Example(s): ${cmd.examples.join(', ')}`)
            .setFooter({text: `Required permissions : ${cmd.permissions.join(', ')}`});

        return interaction.reply({embeds: [argsEmbed], ephemeral: true });
    }
}