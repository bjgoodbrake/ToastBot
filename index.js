const Discord = require("discord.js")

const TOKEN = "OTg5NTQ1MDc2NjA4ODc2NTc0.GSKGue.dBm9uWtjN9NIGIit6DphceEit9b8o2GhsR03hM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(TOKEN)
