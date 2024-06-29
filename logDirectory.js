
// Логирование в файл

const logDirectory = path.resolve(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const logFileName = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}.log`;
};

const logStream = fs.createWriteStream(path.join(logDirectory, logFileName()), { flags: 'a' });

function logToFile(message) {
    const timestamp = new Date().toISOString();
    logStream.write(`[${timestamp}] ${message}\n`);
}

client.on('error', error => {
    logToFile(`Произошла ошибка: ${error.message}`);
});