const { promisify } = require('util'); // transforme un callback en promise
const { glob } = require('glob'); // "range" les dossiers par rapport à leurs intents(chemins)
const pGlob = promisify(glob); 

module.exports = async client => {
    // cwd => current working directory
    // process.cwd() donne le chemin absolu
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async cmdFile => {
        const cmd  = require(cmdFile); // retourne le chemin exact de l'évenement
        
        if(!cmd.name || !cmd.description) console.log(`Commande non-chargée : pas de nom et/ou description\n Fichier - ${cmdFile}`);

        if(!cmd.category) return console.log(`Commande non-chargée : pas de catégorie\n Fichier - ${cmdFile}`);

        if(!cmd.permissions) return console.log(`Commande non-chargée : pas de permissions\n Fichier - ${cmdFile}`);

        cmd.permissions.forEach(p => {
            if(!permissionList.includes(p)) return console.log(`Commande non-chargée : pas de type sur la permission ${p}\n Fichier - ${cmdFile}`);
        });
        console.log(`Commande chargée - ${cmd.name}`);
        client.commands.set(cmd.name, cmd);
    });
}

const permissionList = ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'PRIORITY_SPEAKER', 'STREAM', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'VIEW_GUILD_INSIGHTS', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS_AND_STICKERS', 'USE_APPLICATION_COMMANDS', 'REQUEST_TO_SPEAK', 'MANAGE_EVENTS', 'MANAGE_THREADS', 'USE_PUBLIC_THREADS', 'CREATE_PUBLIC_THREADS', 'USE_PRIVATE_THREADS', 'CREATE_PRIVATE_THREADS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS', 'START_EMBEDDED_ACTIVITIES', 'MODERATE_MEMBERS'];