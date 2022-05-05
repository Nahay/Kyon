const { Client, Collection } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ intents: 513 });

['commands', 'buttons'].forEach(c => client[c] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });


// handling errors --------------------------------------------------------------------------------
process.on('exit', code => console.log(`Le processus s'est arrêté avec le code ${code}!`));
process.on('uncaughtException', (err, origin) => console.log(`UNCAUGHT_ERROR : ${err}`, `ORIGIN : ${origin}`));
process.on('unhandledRejection', (reason, promise) => console.log(`UNCAUGHT_REJECTION : ${reason}\n\n`, promise));
process.on('warning', (...args) => console.log(...args));

client.login(process.env.K_TOKEN);