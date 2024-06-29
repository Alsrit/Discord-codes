client.on('messageCreate', async message => {
    console.log('Сообщение получено:', message.content);

    // Проверяем, является ли сообщение личным сообщением (DM)
    if (message.channel.type === 'DM' || message.channel.type === 1) {

        // Проверяем, отправлено ли сообщение от владельца бота
        if (message.author.id === ownerId) {

            // Проверяем содержимое сообщения для выполнения команды !reloadcommands
            if (message.content === '!reloadcommands') {

                // Выполняем регистрацию команд
                await registerCommands();

                // Отправляем ответное сообщение об успешной операции
                await message.reply('Slash команды обновлены!');
            } else {
            }
        } else {
        }
    } else {
    }
});