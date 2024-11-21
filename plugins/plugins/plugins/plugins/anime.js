/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/


const {
  tiny,
  axios,
  System,
  IronMan,
  isPrivate,
  sendNeko,
} = require("../lib/");


System({
	pattern: "waifu",
	fromMe: isPrivate,
	desc: "Send a waifu image",
	type: "anime",
},async (message, match) => {
	try { const api = await IronMan(`ironman/waifu`)
	const response = await axios.get(api);
	if (response.data.status) {
	const imageUrl = response.data.ironman.url;
	await message.send(imageUrl, { caption: (tiny("*here is your waifu*")), quoted: message.data }, "image");
	} else { await message.send("Failed to fetch image");
	} } catch (error) { console.error("Error fetching image:", error);
	await message.send("Failed to fetch image.");}
});


System({
	pattern: "neko",
	fromMe: isPrivate,
	desc: "Send Neko images",
	type: "anime",
}, async (message, match) => {
	try { const api = await IronMan(`ironman/neko`)
	const response = await axios.get(api);
	if (response.data.status) { const imageUrl = response.data.ironman.url;
	await message.send(imageUrl, { caption: (tiny("*here is your neko*")), quoted: message.data }, "image");
	} else { await message.send("Failed to fetch image");
	} } catch (error) { console.error("Error fetching image:", error);
	await message.send("Failed to fetch image.");}
});
