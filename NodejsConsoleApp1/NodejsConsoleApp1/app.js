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
    if (message.content.includes('swear')) {
        tempmsg = message
        message.delete();
        tempmsg.reply("http://imgh.us/swe.jpg")
    }
});

// how do dice even work
function dice(sides) {
    return Math.floor((Math.random() * sides) + 1); 
}

// roll a di(c)e 
// usage: .dN
// where N is the number of sides
client.on('message', message => {
    if (message.content.slice(0,2) === '.d' && !isNaN(message.content.slice(2,-1))) {
        message.channel.send(dice(message.content.slice(2,message.content.length)));                                                      
    }   
});

// log in to the server
console.log('logging in...');
client.login('MjY0ODg0OTc0MTgyODU4NzUz.DBuDRA.6u2vT-lREt19v6EBXq8G1usC2BY');
console.log('logged in!');
