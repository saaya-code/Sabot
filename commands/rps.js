const Discord = require('discord.js');
function det(x){
    switch(x){
     case "rock": return "🪨"
     case "paper": return  "🧻"
     case "scissors":"✂️"
    }
}
var compare = function(p1, p2) {
    result = {text :"", image:" ",test:""}
    if(p1.choice === p2.choice) {
        choix = det(p1.choice)
        result.text ="It's a tie!!"
        result.image = `${choix} =======> ${choix}`
        result.test ='\u200B'
        return result;
}
if(p1.choice === `rock`) {
    if(p2.choice === `scissors`) {

        result.text = `${p1.name} wins`
        result.image = `🪨 ======> ✂️ `//true
    } else {
        result.text = `${p2.name} wins`
        result.image = `🧻 ======> 🪨` //true 

    }
}
if(p1.choice === `paper`) {
    if(p2.choice === `rock`) {
        result.text = `${p1.name} wins`
        result.image = `🧻 ======> 🪨  `//true
    } else {
        if(p2.choice === `scissors`) {
           result.text = `${p2.name} wins`
           result.image = `✂️ ======> 🧻 `//true

    }
}
if(p1.choice === `scissors`) {
    if(p2.choice === `rock`) {
        result.text = `${p2.name} wins`
        result.image = `🪨 ======> ✂️` //true
    } else {
        if(p2.choice === `paper`) {
            result.text= `${p1.name} wins`
            result.image = `✂️ ======>🧻 `//true
        }
    }
}
}
result.test = "Congrats!"
return result;
};
module.exports = async function(msg,args){
    try{
const realembed = new Discord.MessageEmbed()
.setColor("#00FF00")
.setTitle(`Rock paper scissors!`)
.addField('Choose from below!','\u200B')
var player1 = {user : msg.author, choice:``}
const embed = new Discord.MessageEmbed()
.setColor("#00FF00")
.setTitle(`Rock paper scissors!`)
.addField('Please wait...','\u200B')
player1.user.send(embed).then(async (msg1)=>{
var player1 = {user : msg.author, choice:``, name : msg.author.username}
var player2 = {user : msg.mentions.users.first(), choice:`` ,name:msg.mentions.users.first().username }
    await msg1.react(`🪨`)
    await msg1.react(`🧻`)
    await msg1.react(`✂️`)
msg1.edit(realembed)
    msg1.awaitReactions((reaction) =>  (reaction.emoji.name == '🪨' || reaction.emoji.name == '🧻' || reaction.emoji.name == `✂️` ),{ max: 1, time: 30000 }).then((collected)=>{
        if (collected.first().emoji.name == `🪨`)
        player1.choice = `rock`
        if (collected.first().emoji.name == `🧻`)
        player1.choice = `paper`
        if (collected.first().emoji.name == `✂️`)
        player1.choice = `scissors`
        player1.user.send('waiting other player choice...')
    }).then(()=>{
        player2.user.send(embed).then(async (msg1)=>{
            await msg1.react(`🪨`)
            await msg1.react(`🧻`)
            await msg1.react(`✂️`)
            msg1.edit(realembed)
            await msg1.awaitReactions((reaction, user) => user.id == player2.user.id && (reaction.emoji.name == '🪨' || reaction.emoji.name == '🧻' || reaction.emoji.name == `✂️` ),{ max: 1, time: 30000 }).then((collected)=>{
                if (collected.first().emoji.name == `🪨`)
                player2.choice = `rock`
                if (collected.first().emoji.name == `🧻`)
                player2.choice = `paper`
                if (collected.first().emoji.name == `✂️`)
                player2.choice = `scissors`
                
        })
res = compare(player1,player2)
const embed2 = new Discord.MessageEmbed()
.setColor("#00FF00")
.setTitle("Game over!")
.addField("Game Result",res.text)
.addField(res.image,res.test)
.setFooter("Game made by saàya#1206")
msg.channel.send(embed2)
player1.user.send(embed2)
player2.user.send(embed2)
    })
    })

}
)



}catch(err){
    console.error(err)
}
}