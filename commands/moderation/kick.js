module.exports = {
    name: 'kick',
    description: 'Kick someone that deserves it !',
    category: 'moderation',
    permissions: ['KICK_MEMBERS'],
    ownerOnly: false,
    examples: ['-kick @badperson because I want to.'],
    options: [
        {
            name: "target",
            description: "The bad person that has to be kicked !!",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "The reason for the kick",
            type: "STRING",
            required: false
        }
    ],
    run: async (client, message, args) => {
        if(!args[0]) return message.reply('You have to ping someone to kick.');

        const target = message.mentions.members.find(m => m.id);

        if(!target) return message.reply("Can't find this user, mention someone.");

        if(!target.kickable) return message.reply("You can't kick that person. Missing permissions ?");
    

        // if(!args[1]) target.kick();
        // else {
        //     let reason = args.slice(1).join(' ');
        //     target.kick(reason);
        // }
        message.channel.send(`${target} got kicked !`);

    },
    runInteraction: async (client, interaction) => {   
    }
}