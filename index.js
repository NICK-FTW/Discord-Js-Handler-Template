const Discord = require("discord.js");
const config = require(`./botconfig/config.json`);
const settings = require(`./botconfig/settings.json`);
const colors = require("colors");
const client = new Discord.Client({ intents: 32767 });

//Define some Global Collections
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = require("fs").readdirSync(`./commands`);

//Require the Handlers
["events", "commands", "slashCommands"]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    })

//Start the Bot
client.login(config.token)
