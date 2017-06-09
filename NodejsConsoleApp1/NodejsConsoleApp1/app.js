const Discord = require('discord.js');
const client = new Discord.Client();


/*
    Hey Yushia!
    I don't know if you know what is happening here so let me explain.
    Client is our bot object.
    the on method sets an event listener to listen for whatever is in the first parameter. (here when the bot is ready)
    the second parameter is passing in a funtion to run when the bot is ready.
        Usual notation :
            client.on('ready', function(){
                doTheCode();
            });
        Short hand gangsta notation :
            client.on('ready', () => {
                doTheCode();
            });

    Hopefully you can see what is going on here. You'll see the usual notation on tutorials. I use gangsta notation cause I am a gangsta.
    If you don't read this oh well... 
*/
client.on('ready', () => {
    console.log('I am ready');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

console.log('logging in...');
client.login('MjY0ODg0OTc0MTgyODU4NzUz.DBuDRA.6u2vT-lREt19v6EBXq8G1usC2BY');
console.log('Logged in!');
