module.exports = {
    name: 'dm',
    description: 'Herkese DM atar',
    async execute(message, args, client) {
        message.delete();
        if(message.author.bot) return;
        await message.client.users.cache.forEach(user => user.send('Klavye sokucuları affetmez.'));
    }
}