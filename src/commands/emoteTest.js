module.exports = async (msg) => {
  const emojiFind = 'jokerfication';
  const emoji = msg.guild.emojis.find(emoji => emoji.name === emojiFind);
  const buildEmoji = `<:${emoji.name}:${emoji.id}>`;
  await msg.channel.send(buildEmoji);
};
