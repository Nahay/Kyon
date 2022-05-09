const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
    category: 'utils',
    ownerOnly: false,
    usage: 'avatar, avatar [@member]',
    examples: ['-avatar', '-avatar @member'],
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
    permissions: ['SEND_MESSAGES'],
    options: [
        {
            name: "user",
            description: "The user you want to see the avatar.",
            type: "USER",
            required: false
        }
    ],
	run: (client, message, args) => {
		if (!message.mentions.users.size) {
            const embed = new MessageEmbed()
            .setTitle(`${message.member.displayName}'s Avatar`)
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
            .setFooter({text: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true })})
            .setTimestamp()
            .setColor(message.member.displayHexColor);
			return message.channel.send({embeds: [embed]});
		}
		message.mentions.users.map(user => {
            const embed = new MessageEmbed()
            .setTitle(`${user.username}'s Avatar`)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setFooter({text: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true })})
            .setTimestamp()
            .setColor(message.member.displayHexColor);
			return message.channel.send({embeds: [embed]});
		});

	}
};