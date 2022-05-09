const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
      name: 'shiba',
      description: 'Finds a random shiba for your viewing pleasure.',
      category: 'fun',
      permissions: ['SEND_MESSAGES'],
      ownerOnly: false,
      examples: ['-shiba'],
      run: async (client, message) => {
        try {
          const shiba = await axios('http://shibe.online/api/shibes');
          const img = shiba.data[0];
          const embed = new MessageEmbed()
            .setTitle('🐶  Woof!  🐶')
            .setImage(img)
            .setFooter({text: message.member.displayName,  iconURL: message.author.displayAvatarURL({ dynamic: true })})
            .setTimestamp()
            .setColor(message.member.displayHexColor);
          message.channel.send({embeds: [embed]});
        } catch(err) {
          console.log(`------\nERROR : ${err.message} \nON COMMAND : ${message}\n------`);
          message.channel.send('Please try again in a few seconds');
        }
    },
};