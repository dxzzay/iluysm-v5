const discord = require('discord.js')
const config = require("../config.json");

prefix = config.prefix

exports.run = async (client, message, args) => {
    message.delete();
    let helpEmbed = new discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("Iluysm - Ajuda")
      .setDescription(`

      
        ${prefix}help - \`Mostra comandos\`

        ${prefix}destruir - \`Mostra Comandos de Destruição\`

        ${prefix}div - \`Mostra comandos de divulgação\`

        ${prefix}invite botid - \`Cria um convite do seu bot.\`

        ${prefix}invted - \`Cria um convite do seu bot.\`

        ${prefix}updates - \`Mostra nota de atualizações da sua versão atual.\`

        `)
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setFooter(`Self Bot by: dozzay`);
    message.channel.sendMessage(helpEmbed);
}
