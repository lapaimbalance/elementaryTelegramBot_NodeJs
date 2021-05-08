const TelegramApi = require('node-telegram-bot-api')

const TOKEN = '1843216777:AAGPW3Q4yewez81BGHhgCzwi6nrHbQPtvPc'

const bot = new TelegramApi(TOKEN, {polling: true});

 bot.on ('message',async msg => {
    const text = msg.text
    const chatID = msg.chat.id
    console.log(msg)

     if(text == '/start'){
        try{    
        bot.sendMessage(chatID, 'Поздравляю. Ты запустил своего бота')
    }catch(e){
        console.log(e)
    }
        }
    if (text == '/about'){
        bot.sendMessage(chatID, `Тебя зовут ${msg.from.first_name}.Твоя фамилия ${msg.from.last_name}`)
    }
    else{
        bot.sendMessage(chatID,'Я тебя не понимаю. :(')
    }
    })
