// netlify/functions/env.js
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
            TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID
        }),
    };
};