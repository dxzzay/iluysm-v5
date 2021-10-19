const discord = require('discord.js')

exports.run = async (client, message, args) => {
const user = message.mentions.users.first() || message.author;
let avatarEmbed = new discord.RichEmbed()
      .setTitle("Avatar")
      .setColor("GREEN")
      .setImage(user.avatarURL)
      .setFooter(`dxzzay fofozap`)
    message.channel.send(avatarEmbed);
}
