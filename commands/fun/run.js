
module.exports = {
    name: 'run',
    description: 'Try it !',
    category: 'fun',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    examples: ['-run'],
    run: async (client, message, args) => {
        const ownersId = ['511798426464288770', '898979545225523200'];

        const target = message.guild.members.cache.get(message.author.id);
        

        if(ownersId.includes(target.id)) return message.channel.send("It's raining outside, I guess you'll stay home !");

        target.kick();
        message.channel.send(`${target} decided to... run !`);
    },
    runInteraction: async (client, interaction) => {   
    }
}