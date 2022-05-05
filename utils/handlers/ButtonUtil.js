const { promisify } = require('util'); // transforme un callback en promise
const { glob } = require('glob'); // "range" les dossiers par rapport à leurs intents(chemins)
const pGlob = promisify(glob); 

module.exports = async client => {
    // cwd => current working directory
    // process.cwd() donne le chemin absolu
    (await pGlob(`${process.cwd()}/buttons/*/*.js`)).map(async btnFile => {
        const btn  = require(btnFile); // retourne le chemin exact de l'évenement

        if(!btn.name) console.log(`Bouton non-chargé : pas de nom\n Fichier - ${btnFile}`);

        console.log(`Bouton chargé - ${btn.name}`);
        client.buttons.set(btn.name, btn);
    });
}