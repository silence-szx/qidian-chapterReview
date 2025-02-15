const { TelegramClient } = require("messaging-api-telegram");
const LCL = require("last-commit-log");
const chatId = process.env.TELEGRAM_TO;
const accessToken = process.env.TELEGRAM_TOKEN;
const eventName = process.argv[2];

const telegramPush = () => {
  if (!chatId || !accessToken) throw "推送配置有误，请检查！";
  const lcl = new LCL();
  const commit = lcl.getLastCommitSync();
  const client = new TelegramClient({ accessToken });
  // https://yoctol.github.io/messaging-apis/latest/classes/messaging_api_telegram.telegramclient-1.html#sendmessage
  const message = `本章说更新！---${eventName} \n${commit.gitUrl}/commit/${commit.hash} \n小说网站 \nhttps://book.qidian.com/info/1029553244/#Catalog`;

  client
    .sendMessage(chatId, message, {
      disableWebPagePreview: true,
      disableNotification: true,
    })
    .then(() => console.log("推送成功！"));
};

telegramPush();
