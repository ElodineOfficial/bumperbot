const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
require('dotenv').config();

client.once('ready', () => {
    console.log('Ready!');
    const channel = client.channels.cache.get('1055086968695967775'); // Replace with your channel ID
    setInterval(() => {
        // Replace 'USER_ID_1' and 'USER_ID_2' with the actual user IDs
        channel.send('<@1037719273830879252> <@1088133531676442734>! Beep beep, time to bump the server.');
    }, 7200000); // 2 hours in milliseconds
});

client.login(process.env.DISCORD_BOT_TOKEN);
