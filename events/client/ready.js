module.exports = {
    name: 'ready',
    once: true,
    async  execute(client) {
        console.log("Kyon is online, and ready !");

        // client.user.setPresence({activities: [{name: 'x', type: 'LISTENING'}], status: 'dnd'});

        // const devGuild = await client.guilds.cache.get('965008294265626744');
        // devGuild.commands.set(client.commands.map(cmd => cmd));        

        client.application.commands.set(client.commands.map(cmd => cmd));
    }
}