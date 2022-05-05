const { promisify } = require('util'); // transforme un callback en promise
const { glob } = require('glob'); // "range" les dossiers par rapport à leurs intents(chemins)
const pGlob = promisify(glob); 

module.exports = async client => {
    // cwd => current working directory
    // process.cwd() donne le chemin absolu
    (await pGlob(`${process.cwd()}/events/*/*.js`)).map(async eventFile => {
        const event  = require(eventFile); // retourne le chemin exact de l'évenement

        // logs s'il y a une erreur avec le fichier exact
        if(!eventList.includes(event.name) || !event.name) console.log(`Évenement non-déclenché : erreur de typo de l'event (ou pas de nom)\n Fichier - ${eventFile}`);

        if(event.once) client.once(event.name, (... args) => event.execute(client, ...args));
        else client.on(event.name, (... args) => event.execute(client, ...args));
    });  
}


const eventList = ['apiRequest', 'apiResponse', 'applicationCommandCreateD', 'applicationCommandDeleteD', 'applicationCommandUpdateD', 'channelCreate', 'channelDelete', 'channelPinsUpdate', 'channelUpdate', 'debug', 'emojiCreate', 'emojiDelete', 'emojiUpdate', 'error', 'guildBanAdd', 'guildBanRemove', 'guildCreate', 'guildDelete', 'guildIntegrationsUpdate', 'guildMemberAdd', 'guildMemberAvailable', 'guildMemberRemove', 'guildMembersChunk', 'guildMemberUpdate', 'guildScheduledEventCreate', 'guildScheduledEventDelete', 'guildScheduledEventUpdate', 'guildScheduledEventUserAdd', 'guildScheduledEventUserRemove', 'guildUnavailable', 'guildUpdate', 'interactionD', 'interactionCreate', 'invalidated', 'invalidRequestWarning', 'inviteCreate', 'inviteDelete', 'messageD', 'messageCreate', 'messageDelete', 'messageDeleteBulk', 'messageReactionAdd', 'messageReactionRemove', 'messageReactionRemoveAll', 'messageReactionRemoveEmoji', 'messageUpdate', 'presenceUpdate', 'rateLimit', 'ready', 'roleCreate', 'roleDelete', 'roleUpdate', 'shardDisconnect', 'shardError', 'shardReady', 'shardReconnecting', 'shardResume', 'stageInstanceCreate', 'stageInstanceDelete', 'stageInstanceUpdate', 'stickerCreate', 'stickerDelete', 'stickerUpdate', 'threadCreate', 'threadDelete', 'threadListSync', 'threadMembersUpdate', 'threadMemberUpdate', 'threadUpdate', 'typingStart', 'userUpdate', 'voiceStateUpdate', 'warn', 'webhookUpdate'];