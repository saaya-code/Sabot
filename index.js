const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require("mongoose");
require('dotenv').config();
client.login(process.env.TOKEN)
const commandHandler = require("./commands");
client.on("message",commandHandler)  
client.on('ready',()=>{
    const Guilds = client.guilds.cache.map(guild => guild.id)
    arr = client.guilds.cache.map(g=>g.name)
    console.log(`Running on ${Guilds.length} Servers : ${arr.join(" / ")}`)
    client.user.setActivity(`Running on ${Guilds.length} servers.| Use "*help","*invite" and "*about".`);
    });

    client.on("guildCreate",(g) => { 
        const Guilds = client.guilds.cache.map(guild => guild.id) 
        console.log(`Joined new guild: ${g.name}`);
        client.user.setActivity(`Running on ${Guilds.length} servers.| Use "*help","*invite" and "*about".`);

    });
