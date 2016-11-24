//Evozims ID: 117841096767176712
//Server ID: 119338179357573120
/////////////////////////// EVOSELFBOT V. 1.0.1 /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////// CHANGELOG:
// V 1.0.0: CREATED BOT WITH MASSIVE CAUTION, I JUST FUCKED UP EVERYTHING EARLIER LMAO 
// V 1.0.1: PRUNE COMMAND CREATED! STILL PROCEEDING WITH GREAT CAUTION.
///////////////////////////////////////////////////////////////////////////////////////
const Discord = require('discord.js');
const bot = new Discord.Client();


//When bot is ONLINE, do events:

bot.on('ready', () => {
    console.log('SELFBOT IS WORKING HOLY SHIT ALL HELL BOUTTA BREAK LOOSE'); //shows in console
});

// Cancer

 var shortcuts = new Map([
    ["lenny", "( ͡° ͜ʖ ͡°)"],
    ["shrug", "¯\\_(ツ)_/¯"],
    ["justright", "✋😩👌"],
    ["tableflip", "(╯°□°）╯︵ ┻━┻"],
    ["unflip", "┬──┬﻿ ノ( ゜-゜ノ)"]

    ]);
/////////////////// MESSAGE HANDLER /////////////////////////

bot.on("message", message => {

    if (message.author.id !== bot.user.id) return;

    var prefix = "&&"; // always use a prefix it's good practice.
    if (!message.content.startsWith(prefix)) return; // ignore messages that... you know the drill.

    // We covered this already, yay!
    const params = message.content.split(" ").slice(1);


    //////////////////////////////// PRUNE COMMANDS ///////////////////////////////
    if (message.content.startsWith(prefix + "prune")) {

        // get number of messages to prune
        let messagecount = parseInt(params[0]);
        // get the channel logs
        message.channel.fetchMessages({
            limit: 100
        })

        .then(messages => {
            let msg_array = messages.array();
            // filter the message to only your own
            msg_array = msg_array.filter(m => m.author.id === bot.user.id);
            // limit to the requested number + 1 for the command message
            msg_array.length = messagecount + 1;
            // Has to delete messages individually. Cannot use `deleteMessages()` on selfbots.
            msg_array.map(m => m.delete().catch(console.error));
        });
    }

    // custom shortcut check
    var command_name = message.content.slice(1); // removes the prefix, keeps the rest
    if (shortcuts.has(command_name)) {
        // setTimeout is used here because of a bug in message delays in Discord.
        // Otherwise the message would edit and then "seem" to un-edit itself... ¯\_(ツ)_/¯
        setTimeout(() => {
            message.edit(shortcuts.get(command_name))
        }, 50);
        return;
    }



}); ////////////////// END OF MESSAGE HANDLER //////////////////////////


bot.login("mfa.l3X-ZLuSFXZE1fAyEOVyeJov8cUNSTDPwi6OUZ4WW9tihTsBZ8IeinwfygSDwxNSBKKCIDzk8Ac50MOR4xXu"); //BOT TOKEN (NEED TO INPUT INTO CONFIG.JSON)