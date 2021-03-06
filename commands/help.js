const Discord = require('discord.js');
module.exports = async function(msg){
    try{
 const embed1 = new Discord.MessageEmbed()
 .setColor(msg.member.displayHexColor)
 .setTitle("Github link").setURL("https://github.com/saaya-code/Sabot")
 .setFooter("<argument>: required argument | [argument]: optional argument\n Page 1/2.")
 .addField("General commands",'\u200b')
 .addField("Avatar","`*avatar` [mention] : Shows the tagged person or the user who commited the command avatar's (in case no one was tagged).")
 .addField("Gif","`*gif` [Search term] : Sends a gif from tenor specified by your search term or a random gif (in case no search term was provided)." )
 .addField("Joke","`*joke` : Sends a random joke.")
 .addField("Ping", "`*ping` : Replies with your current client ping.")
 .addField("Meme","`*meme` [Subreddit name] : Sends a random picture from the subbredit you provide or Dankmemes/memes/me_irl (in case no Subbredit name was provided).")
 .addField("Quote","`*quote` : Sends a random quote.");
 
 const embed2 = new Discord.MessageEmbed()
 .setColor(msg.member.displayHexColor)
 .setTitle("Github link").setURL("https://github.com/saaya-code/Sabot")
 .setFooter("<argument>: required argument | [argument]: optional argument\n Page 2/2.")
 .addField("Roaster","`*roaster` : Showcases the list of members that have a role named exactly **Clash Roaster**.")
 .addField("Say","`*say` <sentence> : Delete the user's sentence and send it instead.")
 .addField("Select","`*select` [(option)] <argument1> <argument2>.. : Chooses one random element from the arguments you can specify the title by writing it instead of the option (must be between parentheses) If no option it specified the default value is set to 'Selection'.")
 .addField("Invite","`*invite` : Creates an invite link so you can add the bot to your server.")
 .addField("Weather", "`*weather` <City name> : Replies with the current weather conditions in the city you provided.")
 .addField("About", "`*about` : Shows details related to the bot.")
 .addField("Fact","`*fact` : Sends a random useless fact.")
 .addField("Lookfor","`*lookfor` <word> : Verifies the existance of <word> in english dictionary.")
 .addField("Rps", "`*rps` <@player> : Creates a rock paper scissors game session for you and the mentioned player.")
 
 msg.channel.send(embed1).then(async (msg1)=>{
   await msg1.react("⬅️")
   await msg1.react("➡️")
   await msg1.react("❌")
 let col =  msg1.createReactionCollector((reaction) =>  (reaction.emoji.name == '⬅️' || reaction.emoji.name == '➡️' || reaction.emoji.name == `❌` ),{ max: 10, time: 60000 }) 
      col.on("collect",async (react)=>{
             if(react.emoji.name == "➡️") 
            msg1.edit(embed2)
            else  if(react.emoji.name == "⬅️")
            msg1.edit(embed1);
             else if (react.emoji.name == "❌")
            msg1.reactions.removeAll();
             }
      )
      col.on("end",()=>{
          msg1.reactions.removeAll()
      })
       })
    }
    catch(err){
        console.error(err)
        msg.react("❌")
    }
}





