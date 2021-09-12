const config = require('./config.json');
const discord = require('discord.js');
const bot = new discord.Client();
const token = config["ODc1NTI2NDg4MTAxODkyMTQ2.YRWzlQ.2ZYpdPrhyc7CG1E-NTv1jalnn4I"];

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('voiceStateUpdate', (oldState, newState) => {
    if(oldState.deaf === newState.deaf && oldState.mute === newState.mute && oldState.streaming === newState.streaming){
        if(newState.id === "886730190657560586" && newState.channelID === "886730096608690240"){
            newState.member.voice.channel.join()
                .then(connection => {
                    setTimeout(() => {
                        const audio = connection.play("./obi-wan.mp3");
                        audio.on("finish", end => {
                            newState.member.voice.channel.leave();
                        })   
                    }, 500);
                    
                })
                .catch(err => console.error);
        }
    }
});

bot.login(token);
