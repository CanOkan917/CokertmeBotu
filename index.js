require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

client.login(token);

client.on('ready', () => {
    console.log(`Bot is online.`);
    client.user.setActivity("Klavye sokucuları affetmez.");
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`Loaded command ${command.name}`);
}
client.on('message', (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply("`Küçük bir hatayla karşılaştım! Lütfen sonra deneyebilir misin?`");
    }
});