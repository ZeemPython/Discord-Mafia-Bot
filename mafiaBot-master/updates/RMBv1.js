//Evozims ID: 117841096767176712
//Server ID: 119338179357573120

/////////////////////////// REKKIN MAFIA BOT V. 1.0.4 /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// -- CHANGELOG -- ////////////////////////////////////

// -- PROJECT STARTDATE: 11/22/2016 --

// V 1.0.0: CREATE BOT & BASIC COMMANDS
// V.1.0.2: WELCOME MSG, BASIC COMMANDS, ROLE ADD BASED ON CURRENT GAME BEING PLAYED, INFO COMMAND, MAFIA COMMANDS, GITHUB 
// V.1.0.3: GET CONFIG FILES FOR BOT KEY & PREFIX, POSSIBLY COMMANDS AS WELL. 
// V.1.0.4: MASSIVE HARDCODE FOR MAFIA ~> GEN[0] COMMAND!
// V.1.0.5: ADDED NEW MODERATOR COMMANDS

// -- UPDATED:    11-23-2016 --
// -- END LINE 322 || 6:39PM --
// -- END LINE 350 || 8:08PM -- 


/////////////////////////////////  TO - DO LIST  /////////////////////////////////////

////////////////////////////////// -- CORE -- ///////////////////////////////////////
//1. Update rules
//2. Create timer for sending people to the block
//3. Additional core commands

///////////////////////////////// -- FEATURES -- //////////////////////////////////
//1. New modes
//2. Music bot (possibilty) /  Ayana bot for server
//3. Special rules

 
const Discord = require('discord.js');
const mafiaBot = new Discord.Client();

//When mafiaBot is ONLINE, do events:

mafiaBot.on("ready", () => {
    console.log(`Ready to server in ${mafiaBot.channels.size} channels on ${mafiaBot.guilds.size} servers, for a total of ${mafiaBot.users.size} users.`);
});

mafiaBot.on('ready', () => {
    console.log('Bot initialized. No errors. Ready to go on your command.'); //shows in console
});

//Welcome message

mafiaBot.on("guildMemberAdd", member => {
    console.log(`New User "${member.user.username}" has joined "${guild.name}"` );
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`${member.user} has joined! Don't forget to read <#179469764660428800>!`);

});

//When bot is invited to a server

mafiaBot.on("guildCreate", guild => {

    guild.defaultChannel.sendMessage(`Greetings **${guild.name}**! Thanks for the invite ${guild.owner.user}! To get started, use --commands.`);  
    guild.defaultChannel.sendMessage(`By the way, I'm not sure how you got the invite for me, but just wanna let you know that most of my features won't work unless I'm in the main Rekkin server. (Use --info)`); 
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

    /////////////////// MODERATOR COMMANDS /////////////////////////
    //prune command awaits

    //Grabs role based on role ID.
    if (command === "grabrole") {
        if (message.author.id == "117841096767176712") {
            let roleID = args[0]
            let membersWithRole = message.guild.members.filter(m=> m.roles.has(roleID));

                if(roleID.length != 18){
                    message.channel.sendMessage("Not a valid RoleID.");

                } else          
                    message.channel.sendMessage(`Got ${membersWithRole.size} members with that role.`); 
        } 

    } else 

    //Get all perms of a member
    if (command === "canikick") {
        let perms = message.member.permissions;
        let has_kick = message.member.hasPermission("KICK_MEMBERS");
        if(has_kick == true) {
        message.channel.sendMessage(`Yes, ${message.author}! You have the power to kick members below your rank.`);
        } else 
        message.channel.sendMessage(`No, ${message.author}. You can't kick anyone.`);
    } else


    if (message.content.startsWith(prefix + "kick")) {
        let userToKick = message.mentions.users.first();
        message.guild.member(userToKick).kick();
        var either0or1 = Math.floor(Math.random() * 2) === 0;
        if (either0or1 == true) {
        message.channel.sendMessage(`It shall be done. CY@ ${userToKick}!`);
        } 
        else message.channel.sendMessage(`*Kicks* ${userToKick} <:zzedHUEHUE:230919631576104960>`);

    } else
    

    //END MOD COMMANDS

    /////////////////// GENERAL COMMANDS ///////////////////////////

    //Responds with current commands
    if (command === "commands") {
        message.channel.sendMessage(" ```md\n" +
            "Type: --help<command> for information about a command.\n" +

            "#Moderator Commands\n" +
            "grabrole <roleid>, canikick\n" +

            "#General Commands:\n" +
            "ping, info, commands\n" +

            "#Misc Commands:\n" +
            "add <enter numbers with spaces>, rateme, say <type something>, asl <age> <sex> <location>, rng\n" +

            "#Mafia Commands:\n" +
            "coinflip, gen, vote <1> or <2>```");
    } else

    //Response time
    if (command === "ping") {
        message.channel.sendMessage('pong! :D');

    } else


    //Gives information on the Bot
    if (command === "info") {
        message.channel.sendMessage("\n" +

            "**[Rekkin Mafia Bot v. 1.0.4]**\n" +
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
    } else

    //Repeats whatever comes after --say
    if (command === "say") {
        message.channel.sendMessage(args.join(" "));
    } else

    //Ask for asl
    if (command === "asl") {
        let age = args[0]; 
        let sex = args[1];
        let location = args[2];
        message.channel.sendMessage(`Hey, ${message.author}! I see you're a ${age} year old ${sex} from ${location}. Wanna date? xdee.`);
    } else

    //Generates a random number from 1 - 10
    if (command === "rng") {
        var randomNumberBetween1and10 = Math.floor(Math.random() * 10) + 1;
        message.reply("The number you got is: " + randomNumberBetween1and10);
    } else 


    //END MISC COMMANDS

    /////////////////////// MAFIA COMMANDS ///////////////////////////

    //Say either heads or tails
    if (command === "coinflip") {
        var either0or1 = Math.floor(Math.random() * 2) === 0;

        if (either0or1 == 0) {
            message.channel.sendMessage("**HEADS!**");
        } else
            message.channel.sendMessage("**TAILS!**");
    } else


    if (command === "gen") {
        if (message.author.id == "117841096767176712") {
            message.channel.sendMessage("**Mafia / Citizen / Neutral.**")
            let choice = args[0];

            ////////////////////MASSIVE HARDCODE INCOMING/////////////
            if (choice < 6) {
                message.channel.sendMessage("Yo, " + choice + " players aren't enough. You need at least 6.");
            } 

            else if (choice == 6) {
                message.channel.sendMessage("Modes for " + choice + " members:");
                message.channel.sendMessage("**1.  2/4/0 \n2.  2/3/1**");
            }
            else if (choice == 7) {
                message.channel.sendMessage("Modes for " + choice + " members:");
                message.channel.sendMessage("**1.  2/5/0 \n2.  2/4/1 \n3.  2/3/2**");
            }
            else if (choice == 8) {
                message.channel.sendMessage("Modes for " + choice + " members:");
                message.channel.sendMessage("**1.  2/6/0 \n2.  3/5/0 \n3.  2/4/2**");
            }
            else if (choice == 9) {
                message.channel.sendMessage("Modes for " + choice + " members:");
                message.channel.sendMessage("**1.  3/6/0 \n2.  2/5/2 \n3.  2/6/1**");
            }
            else if (choice == 10) {
                message.channel.sendMessage("Modes for " + choice + " members:");
                message.channel.sendMessage("**1.  4/6/0 \n2.  3/5/2 \n3.  3/6/1**");
            }
            else if (choice == 11) {
                message.channel.sendMessage("Modes for " + choice + " members:");
                message.channel.sendMessage("**1.  4/7/0 \n2.  4/6/1 \n3.  3/5/3 \n4.  3/6/2**");
            }
            else if (choice == 12) {
                message.channel.sendMessage("Modes for " + choice + " members:");
                message.channel.sendMessage("**1.  4/8/0 \n2.  4/7/1 \n3.  4/6/2 \n4.  5/7/0 \n5.  3/7/2**");
            }
            else if (choice == 13) {
                message.channel.sendMessage("Modes for " + choice + " members:");
                message.channel.sendMessage("**1.  5/8/0 \n2.  5/7/1 \n3.  4/6/3 \n4.  4/8/1 \n5.  3/7/3 **");
            }
            else 
                message.channel.sendMessage("More than 13 players? I'm outta juice here bro... Go to slep...")
        }

    } else

    if (command === "vote") {
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
        message.channel.sendMessage("<:zzedHUEHUE:230919631576104960>");
    } else

    //SUMMON THE SEXTION LEADER!! -- Me only
    if (command === "SL") {
        if (message.author.id == "117841096767176712") {
            message.channel.sendMessage("<@138205544610529280> SUMMON THE SEXTION LEADER");
        }
    } 

    ////////////////////// HELP COMMANDS ///////////////////////////////////
    ///TBC

    /////////////////////// END COMMANDS ///////////////////////////////////


    }); ////////////////// END OF MESSAGE HANDLER //////////////////////////

mafiaBot.on('error', e => { console.error(e); });
mafiaBot.login('MjUwNTQ4ODYwNTIxMjgzNTg0.CxbnXw.huAebsTYzRprrkmjqV3IlXc7LsE'); //BOT TOKEN (NEED TO INPUT INTO CONFIG.JSON)



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

    

/////////////////////////// -- END SOURCE -- ////////////////////////////////////////