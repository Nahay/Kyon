const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
    category: 'fun',
    usage: '-avatar, -avatar [@member]',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
    aliases: ['icon', 'pp'],
    guildOnly: true,
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
            console.log(user);

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