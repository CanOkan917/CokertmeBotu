module.exports = {
    name: 'rolesil',
    description: 'Bütün rolleri siler',
    async execute(message, args, client) {
        message.delete();
        if(message.author.bot) return;
        await message.guild.roles.cache.forEach(roles => roles.delete());
    }
}