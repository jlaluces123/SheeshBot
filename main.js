const Discord = require('discord.js');
const Distube = require('distube');
require('dotenv').config();
const express = require('express');
const app = express();

const port = ('port', process.env.PORT || 5757);

app.get('/', (req, res) => {
    console.log('App Running.');
});

app.listen(port, () => {
    const client = new Discord.Client();

    const distube = new Distube(client, {
        searchSongs: false,
        emitNewSongOnly: true,
    });

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', (msg) => {
        if (msg.content === 'halosheesh') {
            distube.play(msg, 'https://www.youtube.com/watch?v=co1VrBdaRhA');
            setTimeout(() => {
                distube.stop(msg);
            }, 31000);
        } else if (
            msg.content === '-sheesh' ||
            msg.content === 'sheesh' ||
            msg.content.includes('sheesh')
        ) {
            distube.play(msg, 'https://www.youtube.com/watch?v=k3Z91U_kMLA');
            setTimeout(() => {
                distube.stop(msg);
            }, 13000);
        } else if (msg.content === 'les go' || msg.content.includes('les')) {
            distube.play(msg, 'https://www.youtube.com/watch?v=rg5V1MFk9iA');
            setTimeout(() => {
                distube.stop(msg);
            }, 3000);
        } else if (msg.content === 'ascension') {
            distube.play(msg, 'https://www.youtube.com/watch?v=m4oZZhpMXP4');
            setTimeout(() => {
                distube.stop(msg);
            }, 13000);
        } else if (msg.content === 'yo pierre') {
            distube.play(msg, 'https://www.youtube.com/watch?v=cedjVT1QI-A');
            setTimeout(() => {
                distube.stop(msg);
            }, 180000);
        }
    });

    client.login(process.env.TOKEN);
});
