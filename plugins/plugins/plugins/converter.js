/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const fs = require('fs');
const ff = require('fluent-ffmpeg');
const {
	Crop,
	tiny,
	Round,
	toPTT,
	Circle,
	System,
	sendPvt,
	listall,
	styletext,
	isPrivate,
	sendAudio,
	webp2mp4,
	webp2png,
	getBuffer,
	extractUrlFromMessage
} = require("../lib/");


System({
    pattern: "photo",
    fromMe: isPrivate,
    desc: "Sticker to Image",
    type: "converter",
}, async (message) => {
    try {
        if (!message.reply_message?.sticker) {
            return await message.reply("_Reply to a sticker_");
        }

        if (message.reply_message.stickerMessage.isAnimated) {
            return await message.reply("_Reply to a non-animated sticker message_");
        }

        let buff = await message.reply_message.download();
        let buffer = await webp2png(buff);
        return await message.send(buffer, {}, "image");
    } catch (error) {
        console.error("An error occurred:", error);
        return await message.reply("_An error occurred while converting sticker to image._");
    }
});

System({
	pattern: "mp3",
	fromMe: isPrivate,
	desc: "mp3 converter",
	type: "converter",
}, async (message, match, m) => {
	await sendAudio(message, match, m);
});

System({
	pattern: "ptv",
	fromMe: isPrivate,
	desc: "video into pvt converter",
	type: "converter",
}, async (message, match, m) => {
	await sendPvt(message, match, m);
});

System({
    pattern: "wawe",
    fromMe: isPrivate,
    desc: "audio into wave",
    type: "converter",
}, async (message) => {
    try {
        if (!message.reply_message?.audio) {
            return await message.reply("_Reply to an audio_");
        }

        let buff = await message.reply_message.download();
        let media = await toPTT(buff);

        return await message.send(media, { mimetype: 'audio/mpeg', ptt: true, quoted: message.data }, "audio");
    } catch (error) {
        console.error("An error occurred:", error);
        return await message.reply("_An error occurred while converting audio to wave._");
    }
});

System({
    pattern: "mp4",
    fromMe: isPrivate,
    desc: "Changes sticker to Video",
    type: "converter",
}, async (message) => {
    try {
        if (!message.reply_message?.sticker) {
            return await message.reply("_Reply to a sticker_");
        }

        if (!message.reply_message.stickerMessage.isAnimated) {
            return await message.reply("_Reply to an animated sticker message_");
        }

        let buff = await message.reply_message.download();
        let buffer = await webp2mp4(buff);

        return await message.send(buffer, {}, "video");
    } catch (error) {
        console.error("An error occurred:", error);
        return await message.reply("_An error occurred while converting sticker to video._");
    }
});

System({
    pattern: "gif",
    fromMe: isPrivate,
    desc: "Changes sticker to Gif",
    type: "converter",
}, async (message) => {
    try {
        if (!message.reply_message?.sticker) {
            return await message.reply("_Reply to a sticker_");
        }

        if (!message.reply_message.stickerMessage.isAnimated) {
            return await message.reply("_Reply to an animated sticker message_");
        }

        const buff = await message.reply_message.download();
        const buffer = await webp2mp4(buff);

        return await message.send(buffer, { gifPlayback: true }, "video");
    } catch (error) {
        console.error("An error occurred:", error);
        return await message.reply("_An error occurred while converting sticker to GIF._");
    }
});

System({
    pattern: "fancy",
    fromMe: isPrivate,
    desc: "converts text to fancy text",
    type: "converter",
}, async (message, match) => {
    if (!message.reply_message || !message.reply_message.text || !match || isNaN(match)) {
        let text = tiny(`Fancy text generator\n\nReply to a message\nExample: .fancy 32\n\n`);
        listall("Fancy").forEach((txt, num) => {
            text += `${(num += 1)} ${txt}\n`;
        });
        return await message.reply(text);
    } else {
        await message.reply(styletext(message.reply_message.text, parseInt(match)));
    }
});

System({
    pattern: 'black',
    fromMe: isPrivate,
    desc: 'make audio into black video',
    type: "converter"
}, async (message) => {
    try {
        const ffmpeg = ff();
        if (!message.reply_message?.audio) {
            return await message.send("_Reply to an audio message_");
        }

        const file = './lib/media/black.jpg';
        const audioFile = './lib/media/audio.mp3';

        fs.writeFileSync(audioFile, await message.reply_message.download());

        ffmpeg.input(file);
        ffmpeg.input(audioFile);
        ffmpeg.output('./lib/media/videoMixed.mp4');

        ffmpeg.on('end', async () => {
            await message.send(fs.readFileSync('./lib/media/videoMixed.mp4'), {}, 'video');
        });

        ffmpeg.on('error', async (err) => {
            console.error('FFmpeg error:', err);
            await message.reply("An error occurred during video conversion.");
        });

        ffmpeg.run();
    } catch (e) {
        console.error('An error occurred:', e);
        return message.send("An unexpected error occurred.");
    }
});


System({
    pattern: "round",
    fromMe: isPrivate,
    desc: "Changes photo to sticker",
    type: "converter",
}, async (message, text, msg, client) => {
    try {
        if (!(message.reply_message.sticker || message.reply_message.image)) {
            return await message.reply("_*Reply to photo or sticker*_");
        }
        const buffer = await Round(msg);
        await client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg });
    } catch (error) {
        console.error("Error in round conversion:", error);
        await message.reply("_*Error converting sticker*_");
    }
});


System({
    pattern: "circle",
    fromMe: isPrivate,
    desc: "Changes photo to sticker",
    type: "converter",
}, async (message, text, msg, client) => {
    try {
        if (!(message.reply_message.sticker || message.reply_message.image)) {
            return await message.reply("_*Reply to photo or sticker*_");
        }
        const buffer = await Circle(msg);
        await client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg });
    } catch (error) {
        console.error("Error in circle conversion:", error);
        await message.reply("_*Error converting sticker*_");
    }
});


System({
    pattern: "crop",
    fromMe: isPrivate,
    desc: "Changes photo to sticker",
    type: "converter",
}, async (message, text, msg, client) => {
    try {
        if (!(message.reply_message.sticker || message.reply_message.image)) {
            return await message.reply("_*Reply to photo or sticker*_");
        }
        const buffer = await Crop(msg);
        await client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg });
    } catch (error) {
        console.error("Error in crop conversion:", error);
        await message.reply("_*Error converting sticker*_");
    }
});
