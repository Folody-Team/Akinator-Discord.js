const express = require('express');
const app = express();
const port = 2333;

app.get('/', (req, res) => res.send('Chào bro!'));

app.listen(port, () =>
	console.log(`Your app is listening to http://localhost:${port}`)
);

const discord = require('discord.js')
const akinator = require('discord.js-akinator')

const { Client } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

//Bot prefix
const prefix = "?"

//Status của bot
client.on("ready", () => {
  let statusList = [`${prefix}akinator`, `Bot Build by Folody Team`];
    setInterval(function() {
  		let status = statusList[Math.floor(Math.random()*statusList.length)];
  		client.user.setActivity(status, {type: "PLAYING"});
  	}, 10000)

    console.log(`${client.user.tag} đã hoạt động`)
});


//Lệnh bot
client.on("messageCreate", async message => {
    if(message.content.startsWith(`${prefix}akinator`)) {
        akinator(message, client, "vi");
    }
});


client.login(process.env.token)
// Vui lòng không để lộ token 
