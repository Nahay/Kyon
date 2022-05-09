module.exports = {
    name: 'clear',
    description: 'Clear a specified number of message on a channel/user',
    category: 'moderation',
    permissions: ['MANAGE_MESSAGES'],
    ownerOnly: false,
    examples: ['-clear 50, -clear 50 @member'],
    options: [
        {
            name: "amount",
            description: "The number of messages to delete",
            type: "NUMBER",
            required: true
        },
        {
            name: "target",
            description: "The user that we want the messages to be deleted",
            type: "USER",
            required: false
        }
    ],
    run: async (client, message, args) => {
        const amount = args[0];

        if(isNaN(amount)) return message.reply("You have to precise a **number**.");

        if(!args[0] || amount < 2 || amount > 100) return message.reply("The amount of message has to be > 1 or <= 100");

        const target = message.mentions.users.find(u => u.id);
        await message.delete();

        const messagesToDelete = await message.channel.messages.fetch();

        if(target) {
            if(amount > 20) return message.reply("I can't delete more than 20 messages from a user !");

            let i = 0;
            const targetMessages = [];

            // filtre les messages pour avoir que ceux de l'utilisateur concerné
            (await messagesToDelete).filter(msg => {
                if(msg.author.id == target.id && amount > i) {
                    targetMessages.push(msg);
                    i++;
                }
            });

            await message.channel.bulkDelete(targetMessages, true).then(msg => {
                message.channel.send(`I've deleted ${msg.size} messages from ${target}`);
            });
        }
        else {
            await message.channel.bulkDelete(amount, true).then(msg => {
                message.channel.send(`I've deleted ${msg.size} messages from this channel`);
            });
        }
    },
    runInteraction: async (client, interaction) => {
        const amount = interaction.options.getNumber("amount");
        if(amount < 2 || amount > 100) return interaction.reply("The amount of message has to be > 1 or <= 100");
        const target = interaction.options.getMember("target");

        const messages = await interaction.channel.messages.fetch();

        if(target) {
            if(amount > 20) return interaction.reply("I can't delete more than 20 messages from a user !");

            let i = 0;
            const targetMessages = [];

            // filtre les messages pour avoir que ceux de l'utilisateur concerné
            (await messages).filter(msg => {
                if(msg.author.id == target.id && amount > i) {
                    targetMessages.push(msg);
                    i++;
                }
            });

            await interaction.channel.bulkDelete(targetMessages, true).then(msg => {
                interaction.reply(`I've deleted ${msg.size} messages from ${target}`);
            });
        }
        else {
            await interaction.channel.bulkDelete(amount, true).then(msg => {
                interaction.reply(`I've deleted ${msg.size} messages from this channel`);
            });
        }        
    }
}