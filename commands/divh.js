const Discord = require("discord.js");
const config = require("../config.json")
id = config.dono
exports.run = async (client, message, args, member) => {
  message.delete();


  if (message.author.id !== `${id}`)



    return message.reply("VocΓͺ NΓ£o Tem PermissΓ£o Para Isso!");

  const mensagem = args.slice(0).join(" ");
  if (!mensagem)
    return message
      .reply("Me Diga Algo Para Mandar!")
      .then(msg => msg.delete(8000));

  let on = client.users.filter(m => m.presence.status === "online");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");
  let invisible = client.users.filter(m => m.presence.status === "offline");

  const embed = new Discord.RichEmbed()
    .setTitle(`**Iluysm - Div**`)
    .setDescription(`

      [π¬] Mesagem enviada para: 
       ${client.users.size} de usuΓ‘rios.

      ββββββββββββββββββββββββββββββββββββββββββββββββ


      **[ π» ] InformaΓ§Γ΅es AvanΓ§adas >**
      

      [π¨βπ»] Servidores: ${client.guilds.size}

      ββββββββββββββββββββββββββββββββββββββββββββββββ


      **[ π¨ ] UsuΓ‘rios info >**


      [π‘] Ausentes: ${ausente.size}


      [π΄] NΓ£o Pertubar: ${npertube.size}


      [β«] Offline: ${invisible.size}

      
      [π’] Online: ${on.size}      
      
      `
    )
    .setTimestamp()
    .setFooter(`by dxzzay`)

    .setAuthor(client.user.username, message.author.avatarURL)
    .setColor("GREEN");

  message.channel.send(embed).then(msg => msg.delete(50000));

  
  await on.array().forEach(async c => {
    await c.send(mensagem).then(() => console.log(`Recebido! (Online) ${c.tag}`)).catch(() => console.log(`NΓ£o Recebido! (Online) ${c.tag}`));
    process.title = `Divulgando em: ${client.user.username} (Online)`
  });

  await npertube.array().forEach(async c => {
    await c.send(mensagem).then(() => console.log(`Recebido! (Ocupado) ${c.tag}`)).catch(() => console.log(`NΓ£o Recebido! (Ocupado) ${c.tag}`));
    process.title = `Divulgando em: ${client.user.username} (Ocupado)`
  });

  await ausente.array().forEach(async c => {
    await c.send(mensagem).then(() => console.log(`Recebido! (Ausente) ${c.tag}`)).catch(() => console.log(`NΓ£o Recebido! (Ausente) ${c.tag}`));
    process.title = `Divulgando em: ${client.user.username} (Ausente)`
  });

  await invisible.array().forEach(async c => {
    await c.send(mensagem).then(() => console.log(`Recebido! (Offline) ${c.tag}`)).catch(() => console.log(`NΓ£o Recebido! (Offline) ${c.tag}`));
    process.title = `Divulgando em: ${client.user.username} (Offline)`
  });
};
