const config = require('./config.json');
const discord = require('discord.js');
const bot = new discord.Client();
const token = config["bot-token"];

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('voiceStateUpdate', (oldState, newState) => {
    if(oldState.deaf === newState.deaf && oldState.mute === newState.mute && oldState.streaming === newState.streaming){
        if(newState.id === "260158083051814923" && newState.channelID === "755094298017398828"){
            newState.member.voice.channel.join()
                .then(connection => {
                    setTimeout(() => {
                        const audio = connection.play("./obi-wan.mp3");
                        audio.on("finish", end => {
                            newState.member.voice.channel.leave();
                        })   
                    }, 1000);
                    
                })
                .catch(err => console.error);
        }
    }
});

bot.login(token);