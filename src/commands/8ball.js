function getUserFromMention(mention) {
  if (!mention) return;

  if (mention.startsWith('<@') && mention.endsWith('>')) {
    mention = mention.slice(2, -1);

    if (mention.startsWith('!')) {
      mention = mention.slice(1);
    }

    return client.users.cache.get(mention);
  }
}

const eightBall = [
  'You are :warning: :warning: 100% JOKERFIED!! :jokerfication: You are a certified PSYCHOPATH',
  'You are 90% Jokerfied, seek qualified anti-jokerfication care immediately',
  'You are 80% Jokerfied, reduce jokerfication rate ASAP!!',
  'You are 70% Jokerfied!',
  'You are 60% Jokerfied!',
  'You are 50% Jokerfied!',
  'You are 40% Jokerfied!',
  'You are 30% Jokerfied!',
  'You are 20% Jokerfied!',
  'You are 10% Jokerfied! You could actually do with more Jokerfication. :sleeping:'
];
  
module.exports = async (msg, args) => {
  if (!args.length) return;
  const i = Math.floor(Math.random() * eightBall.length);
  const reply = eightBall[i];
  await msg.channel.send(`${msg.author} ${reply} :jokerfication:`);
};
  