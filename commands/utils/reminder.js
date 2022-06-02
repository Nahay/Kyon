const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "reminder",
    description: "Create a reminder for something you won't remember :)",
    examples: ['-reminder I MUST PLAY WITH ALOY & EREND <3'],
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    options: [
        {
            name: "year",
            description: "year",
            type: "NUMBER",
            required: true
        },
        {
            name: "month",
            description: "month",
            type: "NUMBER",
            required: true
        },
        {
            name: "day",
            description: "day",
            type: "NUMBER",
            required: true
        },
        {
            name: "hour",
            description: "hour",
            type: "NUMBER",
            required: true
        },
        {
            name: "minute",
            description: "minute",
            type: "NUMBER",
            required: true
        },
        {
            name: "thing",
            description: "The thing to remember.",
            type: "STRING",
            required: true
        }
    ],
    run: async (client, message, args) => {
        if(args.length < 6) return message.reply("You must type something to remember, otherwise you'll need to remember it by yourself...");

        const time = moment(new Date(parseInt(args[0]), parseInt(args[1])-1, parseInt(args[2]), parseInt(args[3]), parseInt(args[4])));
        if (time.isBefore(Date.now()) || time.fromNow() === "Invalid date") return message.reply("Invalid date.");

        const embed = new MessageEmbed()
        .setTitle(`Reminder set for ${message.author.username}`)
        .setDescription(args.slice(5).join(' '))
        .setFooter({text: time.fromNow()})
        .setTimestamp()
        .setColor(message.member.displayHexColor);

        setTimeout(() => {
            message.member.send(args.slice(5).join(' '))
        }, time - Date.now());

        await message.channel.send({embeds: [embed], fetchReply: true});
    },
    runInteraction: async (client, interaction) => {

        const y = parseInt(interaction.options.getNumber('year'));
        const mo = parseInt(interaction.options.getNumber('month'));
        const d = parseInt(interaction.options.getNumber('day'));
        const h = parseInt(interaction.options.getNumber('hour'));
        const mi = parseInt(interaction.options.getNumber('minute'));

        const time = moment(new Date(y, mo-1, d, h, mi));
        if (time.isBefore(Date.now()) || time.fromNow() === "Invalid date") return;

        setTimeout(() => {
            interaction.member.send(thing)
        }, time - Date.now());

        const thing = interaction.options.getString('thing');

        const embed = new MessageEmbed()
        .setTitle(`Reminder set for ${interaction.user.username}`)
        .setDescription(thing)
        .setFooter({text: time.fromNow()})
        .setTimestamp()
        .setColor(interaction.user.displayHexColor);

        await interaction.reply({embeds: [embed], fetchReply: true});
    }
    
}