const { promisify } = require('util'); // transforme un callback en promise
const { glob } = require('glob'); // "range" les dossiers par rapport à leurs intents(chemins)
const pGlob = promisify(glob); 

module.exports = async client => {
    // cwd => current working directory
    // process.cwd() donne le chemin absolu
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async cmdFile => {
        const cmd  = require(cmdFile); // retourne le chemin exact de l'évenement
        if(!cmd.name || !cmd.description) console.log(`Commande non-déclenchée : pas de nom et/ou description\n Fichier - ${cmdFile}`);
        client.commands.set(cmd.name, cmd);
    });
}