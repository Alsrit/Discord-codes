client.on('messageCreate', async message => {
    console.log('��������� ��������:', message.content);

    // ���������, �������� �� ��������� ������ ���������� (DM)
    if (message.channel.type === 'DM' || message.channel.type === 1) {

        // ���������, ���������� �� ��������� �� ��������� ����
        if (message.author.id === ownerId) {

            // ��������� ���������� ��������� ��� ���������� ������� !reloadcommands
            if (message.content === '!reloadcommands') {

                // ��������� ����������� ������
                await registerCommands();

                // ���������� �������� ��������� �� �������� ��������
                await message.reply('Slash ������� ���������!');
            } else {
            }
        } else {
        }
    } else {
    }
});