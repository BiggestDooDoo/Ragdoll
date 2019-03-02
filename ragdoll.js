const discord = require ('discord.js');
var client = new discord.Client();

client.on ("ready", () => {
    console.log ("readeh");

    client.user.setActivity ("!!help");
});

const prefix = "!!"

const halp = `**The Commands**
!!Ragdoll: Shows a picture of a funny/weird ragdoll.
!!GodRagdoll: Shows the one and the only godly ragdoll.
!!NapTime: Shows a funny picture of a ragdoll but on bed.
!!Creator: Shows information about the bot creator!
If you have any questions or problems, DM <@536593866774806530>
**The Bot Creator: YMA_ST1#5688**`

client.on ("message", (message) => {
    if (message.author.bot) return;

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + "creator")) {
        message.channel.send ("The creator of this bot is `YMA_ST1#5688`")
    }
    
    if (msg.startswith (prefix + "invite")) {
        message.reply ("Check your DMs!")
        message.author.send ("https://discordapp.com/oauth2/authorize?&client_id=492360828515909632&scope=bot&permissions=380096")
    }
    
    if (msg.startsWith (prefix + "naptime")) {
        message.channel.send ("https://cdn.discordapp.com/attachments/370999194221019137/492115561728311296/unknown.png")
    }

    if (msg.startsWith (prefix + "godragdoll")) {
        message.channel.send ("https://cdn.discordapp.com/attachments/492337488485154828/494908312530452480/godragdoll.png")
    }

    if (msg.startsWith (prefix + "help")) {
        message.reply ("Check your DMs!")
        var embed = new discord.RichEmbed()
            .setTitle("Command List for Ragdoll:")
            .setColor(0xff0000)
            .addField("!!Ragdoll", "Shows a picture of a funny/weird ragdoll.")
            .addField("!!GodRagdoll", "Shows the one and the only godly ragdoll.")
            .addField("!!NapTime", "Shows a funny picture of a ragdoll but on bed.")
            .addField("!!Creator", "Shows information about the bot creator!")
            .addField("!!Invite", "Sends you a link to invite the bot to your guild!")
            .addField("** **", "If you have any questions or problems, DM <@536593866774806530>")
            .setFooter("The Bot Creator: YMA_ST1#5688")
        message.author.send (embed)

    }

    if (msg.startsWith (prefix + "ragdoll")) {
        number = 17;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/370999194221019137/492337156648337430/unknown.png"); break;
            case 2: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/492337939897122847/unknown.png"); break;
            case 3: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/492338526160027649/unknown.png"); break;
            case 4: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/492338779227553813/unknown.png"); break;
            case 5: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/492341473619214346/unknown.png"); break;
            case 6: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/492428347847081984/unknown.png"); break;
            case 7: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/370999194221019137/492632948093485067/unknown.png"); break;
            case 8: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/492836804685201418/unknown.png"); break;
            case 9: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/370999194221019137/494220947251920916/unknown.png"); break;
            case 10: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/495184469133885447/unknown.png"); break;
            case 11: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/495184862022598666/unknown.png"); break;
            case 12: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/495187483105951754/unknown.png"); break;
            case 13: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/495188470331998209/unknown.png"); break;
            case 14: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/495188704017514496/unknown.png"); break;
            case 15: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/495189054435098625/unknown.png"); break;
            case 16: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/495890153974267905/unknown.png"); break;
            case 17: message.channel.send ("Here's a wonderful ragdoll for you! https://cdn.discordapp.com/attachments/492337488485154828/495986535850573864/unknown.png"); break;
        }
    }
});

client.login (process.env.BOT_TOKEN);
