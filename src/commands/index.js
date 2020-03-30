const ping = require('./ping');
const eightBall = require('./8ball');
const emoteTest = require('./emoteTest');

const guildID = process.env.GUILD_ID;
const channelID = process.env.CHANNEL_ID;

const commands = {
  ping,
  'jokerdetector': eightBall,
  'testjt': emoteTest
};

module.exports = async (msg) => {
  // if msg from server and channel
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    // split by space. this might need to be improved based on discord js guide https://discordjs.guide/command-handling/#dynamically-reading-command-files
    const args = msg.content.split(' ');
    // if the message doesn't start with the prefix character exit
    if (args.length == 0 || args[0].charAt(0) !== '!') return;
    // set the selected command to be whatever comes after the prefix
    const command = args.shift().substr(1);
    // if command is in commands array, do sheet
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};