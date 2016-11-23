//Evozims ID: 117841096767176712
//Server ID: 119338179357573120

/////////////////////////// REKKIN MAFIA BOT V. 1.0.2 /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/////////// CHANGELOG:
// V 1.0.0: CREATE BOT & BASIC COMMANDS
// V.1.0.2: WELCOME MSG, BASIC COMMANDS, ROLE ADD BASED ON CURRENT GAME BEING PLAYED, INFO COMMAND, MAFIA COMMANDS, GITHUB 
// V.1.0.3: GET CONFIG FILES FOR BOT KEY & PREFIX, POSSIBLY COMMANDS AS WELL. 
///////////////////////////////////////////////////////////////////////////////////////

const Discord = require('discord.js');
const mafiaBot = new Discord.Client();

//When bot is ONLINE, do events:

mafiaBot.on('ready', () => {
    console.log('Bot is now online.'); //shows in console
});

//Welcome message

mafiaBot.on("guildMemberAdd", member => {

    let guild = member.guild;
    guild.defaultChannel.sendMessage(`${member.user} has joined! Don't forget to read the rules!`);

});

//When bot is invited to a server

mafiaBot.on("guildCreate", guild => {
    guild.defaultChannel.sendMessage(`Greetings **${guild.name}**! Thanks for the invite ${guild.owner.user}! To get started, use --commands.`);  

});


//When user plays rocket league add RL role.

mafiaBot.on("presenceUpdate", (oldMember, newMember) => {
    let guild = newMember.guild;
    let playRole = guild.roles.find("name", "League of Legends");
    if (!playRole) return;

    if (newMember.user.presence.game && newMember.user.presence.game.name === "League of Legends") {
        newMember.addRole(playRole);

    } else

    if (!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
        newMember.removeRole(playRole);
    }

});


//Prefix here!
const prefix = "--";

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////  BOT MESSAGE HANDLER BEGINS  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

mafiaBot.on('message', message => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    //logs all commands used.
    console.log(command);

    let args = message.content.split(" ").slice(1);

    //Responds with current commands
    if (command === "commands") {
        message.channel.sendMessage(" ```md\n" +
            "Type: --help<command> for information about a command.\n" +

            "#Moderator Commands\n" +
            "1. TBA\n" +

            "#General Commands:\n" +
            "ping, info, commands\n" +

            "#Misc Commands:\n" +
            "add <enter numbers with spaces>, rateme, say <type something>, asl <age> <sex> <location>, rng\n" +

            "#Mafia Commands:\n" +
            "1. coinflip, lynch, genplayers, vote ```");
    } else

    /////////////////// MODERATOR COMMANDS /////////////////////////
    //prune command awaits

    //END MOD COMMANDS

    /////////////////// GENERAL COMMANDS ///////////////////////////

    //Response time
    if (command === "ping") {
        message.channel.sendMessage('pong! :D');

    } else


    //Gives information on the Bot
    if (command === "info") {
        message.channel.sendMessage("\n" +

            "**[Rekkin Mafia Bot v. 1.0.2]**\n" +
            "Author: <@117841096767176712>\n" +
            "Lib: Discord.js / Node.js\n" +
            "Servers: 3\n" + 
            "Bot Description: Moderator bot that supports a custom version of Mafia on Discord.\n" +
            "GitHub: https://github.com/evozims/Discord-Mafia-Bot\n" +
            "Contact the creator by joining the main server: https://discord.gg/UPZvCYX"

        );

    } else 

    //END GENERAL COMMANDS

    /////////////////////// MISC COMMANDS /////////////////////////////


    //Simple addition
    if (command === "add") {
        let numArray = args.map(n => parseInt(n));
        let total = numArray.reduce((p, c) => p + c);
        message.channel.sendMessage(total);
    } else 

    //Rate the user (basic)
    if (command === "rateme") {
        var randomNumberBetween1and10 = Math.floor(Math.random() * 11) + 1;
        message.reply("I'd rate you: " + randomNumberBetween1and10 + "/10");
    }

    //Repeats whatever comes after --say
    if (command === "say") {
        message.channel.sendMessage(args.join(" "));
    } else

    //Ask for asl
    if (command === "asl") {
        let args = message.content.split(" ").slice(1);
        let age = args[0]; 
        let sex = args[1];
        let location = args[2];
        message.channel.sendMessage(`Hey, ${message.author}! I see you're a ${age} year old ${sex} from ${location}. Wanna date? xdee.`);
    } else


    //END MISC COMMANDS

    /////////////////////// MAFIA COMMANDS ///////////////////////////

    //Generates a random number from 1 - 10
    if (command === "rng") {
        var randomNumberBetween1and10 = Math.floor(Math.random() * 10) + 1;
        message.reply("The number you got is: " + randomNumberBetween1and10);
    } else 

    //Say either heads or tails
    if (command === "coinflip") {
        var either0or1 = Math.floor(Math.random() * 2) === 0;

        if (either0or1 == 0) {
            message.channel.sendMessage("**HEADS!**");
        } else
            message.channel.sendMessage("**TAILS!**");
    } else


    if (command === "genplayers") {
        if (message.author.id == "117841096767176712") {
            let args = message.content.split(" ").slice(1);
            let choice = args[0];
            // Need to parse the string into an integer
            // Use the integer to compute the calculations below
            // Ratio is 1 to 3. So if there are 8 players, there will be 2 Mafia & 6 Citizens. Divide x by 2 
            //int x (choice) = 
            message.reply(x);
        }
    } else

    if (command === "vote") {
        let args = message.content.split(" ").slice(1);
        let choice = args[0]; 

        if (choice == 1) {
        message.reply("voted Not Guilty.");
        } 
        else if (choice == 2) {
        message.reply("voted Guilty.")    
        }

    } else

    //END OF MAFIA COMMANDS

    ///////////////////// HIDDEN COMMANDS /////////////////////////

    if (command === "rlykim") {
        message.channel.sendMessage("<:kimMAD:230919631576104960>");
    } else

    //SUMMON THE SEXTION LEADER!! -- Me only
    if (command === "SL") {
        if (message.author.id == "117841096767176712") {
            message.channel.sendMessage("<@138205544610529280> SUMMON THE SEXTION LEADER");
        }
    } 

    

    ////////////////////// HELP COMMANDS ///////////////////////////////////
    ///TBA

    /////////////////////// END COMMANDS ///////////////////////////////////


    }); ////////////////// END OF MESSAGE HANDLER //////////////////////////



mafiaBot.login("bot.token"); //BOT TOKEN (NEED TO INPUT INTO CONFIG.JSON)



    ////////////////////// FAILED CODES ARCHIVE ////////////////////////////

    //Store string commands in an array for an easy reply & less clutter. 

    /* var responseObject = {
        "prune": "You know it would be cool if I could do that.",
        "kim": ""
    };

    mafiaBot.on('message',(message) => {
       
       if (responseObject[message.content]) {
        message.channel.sendMessage(responseObject[message.content]);

        }
    }) */

    //Certain command that has the specific role

    /* if (command === "evo") {
        let modRole = message.guild.roles.find("name", "Mods");
        if (message.member.roles.has(modRole.id)) {
            message.channel.sendMessage("")
        } else {
            message.reply("You don't have permission to use that command.");
        }
    } */

    /////////END FAILED CODES

    

