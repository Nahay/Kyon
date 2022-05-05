module.exports = {
    name: 'ready',
    once: true,
    async  execute(client) {
        console.log("Kyon is online, and ready !");

        const devGuild = await client.guilds.cache.get('971028245711585290');
        devGuild.commands.set(client.commands.map(cmd => cmd));
        
    }
}