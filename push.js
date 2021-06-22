const { TelegramClient } = require('messaging-api-telegram');
const chatId = process.argv[2];
const accessToken = process.argv[3];
const eventName = process.argv[4];
const repository = process.argv[5];
async function telegramPush() {
    if (chatId === "" || accessToken === "") {
        console.log('推送配置有误，请检查！');
        return false;
    }
    const client = new TelegramClient({ accessToken });
    const message =
        `本章说更新！---${eventName} \nhttps://github.com/${repository}/output \n小说网站 \nhttps://www.biquge5200.cc/125_125197`;
    client.sendMessage(chatId, message).then(() => {
        console.log('推送成功！');
    });
};

telegramPush();