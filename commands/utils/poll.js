const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "poll",
    description: "Create a poll, and start a greatful debate !!",
    usage: "-poll [question]",
    options: [
        {
            name: "question",
            description: "The description for your poll.",
            type: "STRING",
            required: true
        }
    ],
    run: async (client, message, args) => {
        if(args.length === 0) return message.reply("You must type a question, otherwise I won't do my job.");
        
        const embed = new MessageEmbed()
        .setTitle(`Suggestion from ${message.author.username}`)
        .setDescription(args.slice(0).join(' '))
        .setFooter({text: "👍 For / 👎 Against"})
        .setTimestamp()
        .setColor(message.member.displayHexColor);

        const poll = await message.channel.send({embeds: [embed], fetchReply: true});
        poll.react('👍');
        poll.react('👎');
    },
    runSlash: async (client, interaction) => {
        const pollQuestion = interaction.options.getString('question');

        const embed = new MessageEmbed()
        .setTitle(`Suggestion from ${interaction.user.username}`)
        .setDescription(pollQuestion)
        .setFooter({text: "👍 For / 👎 Against"})
        .setTimestamp()
        .setColor(interaction.user.displayHexColor);

        const poll = await interaction.reply({embeds: [embed], fetchReply: true});
        poll.react('👍');
        poll.react('👎');
    } 
    
}