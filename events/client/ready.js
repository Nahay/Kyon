module.exports = {
    name: 'ready',
    once: true,
    async  execute(client) {
        console.log("Kyon is online, and ready !");

        const devGuild = await client.guilds.cache.get('965008294265626744');
        devGuild.commands.set(client.commands.map(cmd => cmd));
        
    }
}