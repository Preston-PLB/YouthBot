// initialize
const Discord = require('discord.js');
const client = new Discord.Client();

// tell user that we're ready
client.on('ready', () => {
    console.log('I am ready');
});

// ping pong
client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
});

// swear filter
client.on('message', message => {
    if (message.content.includes('bazoomba')) {
        message.channel.send('pong');
    }
});

// log in to the server
console.log('logging in...');
client.login('MjY0ODg0OTc0MTgyODU4NzUz.DBuDRA.6u2vT-lREt19v6EBXq8G1usC2BY');
console.log('Logged in!');
