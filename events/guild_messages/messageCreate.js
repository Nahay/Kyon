const prefix = "-";
const ownerId = '511798426464288770';
const owner2Id = '898979545225523200';

module.exports = {
    name: 'messageCreate',
    once: false,
    execute(client, message) {
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;

        // récupère tout ce qui se trouve après le prefix
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if(cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if(cmd.ownerOnly) if(message.author.id != ownerId && message.author.id != owner2Id) return message.reply("You aren't the boss, you can't use that command.");

        if(!message.member.permissions.has([cmd.permissions])) return message.reply({ content: `You must have the permissions (\`${cmd.permissions.join(', ')}\`) to use this command. `, ephemeral: true});

        if(cmd) cmd.run(client, message, args);
    }
}