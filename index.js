const { Client } = require('discord.js');

const dotenv = require('dotenv');
dotenv.config();

const client = new Client({intents: 1});

client.once('ready', () => {
    console.log("Kyon is online, and ready !");
});

client.login(process.env.K_TOKEN);