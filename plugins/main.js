/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const {
	tiny,
	isUrl,
	take,
	System,
	isPrivate,
	sendMenu,
	runtime,
	sendSticker,
	takeExif,
	sendList,
	getvv,
	findPlugin,
        sendPlugin,
        extractUrlFromMessage,
	Remove,
	sendUrl
} = require("../lib/");

System({
	pattern: "ping",
	fromMe: isPrivate,
	desc: "To check ping",
	type: "user",
}, async (message) => {
	const start = new Date().getTime();
	const ping = await message.send(tiny("*𝆺𝅥 running 𝆺𝅥*"));
	const end = new Date().getTime();
	return await ping.edit("*☇ ꜱᴩᷨᴇͦᴇͭᴅ ☁ :* " + (end - start) + " *ᴍꜱ* ");
});

System({
	pattern: "menu",
	fromMe: isPrivate,
	desc: "Show All commands",
	dontAddCommandList: true,
	type: "user",
}, async (message, match) => {
	await sendMenu(message, match);
});

System({
	pattern: "runtime",
	fromMe: isPrivate,
	desc: "To check runtime",
	type: "user",
}, async (message) => {
	const time = await runtime()
	await message.send(`_*Runtime ${time}*_`)
});

System({
	pattern: "take",
	fromMe: isPrivate,
	desc: "Changes Exif data of stickers",
	type: "tool",
},async (message, match, m) => {
	await take(message, match, m);
});

System({
	pattern: "sticker",
	fromMe: isPrivate,
	desc: "_Converts Photo or video to sticker_",
	type: "converter",
}, async (message, match, m) => {
	await sendSticker(message, match, m);
});

System({
	pattern: "exif",
	fromMe: isPrivate,
	desc: "get exif data",
	type: "tool",
}, async (message, match, m) => {
	await takeExif(message, match, m);
});

System({
	pattern: "list",
	fromMe: isPrivate,
	desc: "Show All commands",
	type: "user",
	dontAddCommandList: true,
}, async (message, match, { prefix }) => {
	await sendList(message, match, { prefix });
});


System({
	pattern: "remove",
	fromMe: true,
	desc: "remove external plugins",
	type: "user",
}, async (message, match) => {
	const remove await Remove(message, match);
	await message.send(remove);
});

System({
	pattern: "url",
	fromMe: isPrivate,
	desc: "make media into url",
	type: "converter",
}, async (message, match, m) => {
	await sendUrl(message, match, m)
});

System({
    pattern: "vv",
    fromMe: true,
    desc: "get view ones message",
    type: "user",
}, async (message, match, m) => {
        await getvv(message, match, m);
});


System({
    pattern: "plugin",
    fromMe: true,
    desc: "Installs External plugins",
    type: "user",
}, async (message, match) => {
    let url = match || (message.reply_message && message.reply_message.text);
    if (!url) return message.send("_*Reply to a GitHub URL*_");

    const matchUrl = await extractUrlFromMessage(url);
    if (isUrl(matchUrl)) {
        await sendPlugin(message, matchUrl);
    } else {
        const pluginInfo = await findPlugin(url);
        await message.send(pluginInfo);
    }
});
