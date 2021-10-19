const discord = require('discord.js')
const config = require("../config.json");

prefix = config.prefix

exports.run = async (client, message) => {
    message.delete()
    let nukeEmbed = new discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Iluysm - Destruição")
    .setDescription(`

      ${prefix}spam <mensagem> - \`Spamma Mensagens\` \`(\`**OBS: ELE SPAMMA ATÉ O BOT DESLIGAR**\`)\`

      ${prefix}createtext <nome> - \`Cria canais de texto\`

      ${prefix}changename <nome> - \`Troca o nome do servidor\`

      ${prefix}changeicon <link> - \`Troca Foto do servidor\`

      ${prefix}luisao - \`Destroi todo o Servidor\`
      `)
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setFooter(`by dozzay`);
  message.channel.sendMessage(nukeEmbed);

}
