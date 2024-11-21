/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const {
  System,
  isPrivate,
  getSpotify,
  sendInsta,
  axios,
  getJson,
  isInstaUrl,
  wait,
  Pinterestdl,
  sendTiktok,
  IronMan,
  mediafire,
  extractUrlFromMessage
} = require("../lib/");
const config = require("../config");

System({
	pattern: "spotify",
	fromMe: isPrivate,
	desc: "Download Tracks from Spotify",
        type: "download",
}, async (message, match) => {
	await getSpotify(message, match)
});

System({
	pattern: "insta",
	fromMe: isPrivate,
	desc: "Download Instagram media",
	type: "download",
}, async (message, match) => {
	await sendInsta(message, match);
});

System({
	pattern: "ts ?(.*)",
	fromMe: true,
	desc: "Download Sticker From Telegram",
	type: "download",
}, async (message, match, client) => {
	const _0x46d562=_0x5de8;(function(_0x1a0482,_0xf3019){const _0x3226d7=_0x5de8,_0x1d0d09=_0x1a0482();while(!![]){try{const _0x3453c0=-parseInt(_0x3226d7(0x20c))/(-0xe2b+0x2012+0x9e*-0x1d)+-parseInt(_0x3226d7(0x22c))/(0x24b0+0x5*-0x175+0x7*-0x433)+parseInt(_0x3226d7(0x209))/(0x237d*0x1+0xff+0x1*-0x2479)*(parseInt(_0x3226d7(0x1f0))/(-0x16*-0x87+-0x7bf+-0x3d7))+parseInt(_0x3226d7(0x1f2))/(0x1*-0x297+0x2120+-0x1e84)+-parseInt(_0x3226d7(0x1f6))/(0x6d8+-0x33*0xbc+0x1ea2)*(-parseInt(_0x3226d7(0x237))/(-0x12ac+0xa40+-0x67*-0x15))+parseInt(_0x3226d7(0x235))/(-0x16ae*0x1+0x20c9+-0xa13)*(-parseInt(_0x3226d7(0x201))/(0x56*0x22+-0x967*-0x2+-0x1e31))+-parseInt(_0x3226d7(0x21f))/(-0x1*-0x1733+-0x1*-0x24d9+-0x3c02)*(-parseInt(_0x3226d7(0x20d))/(-0xe7d*0x1+0xd*0x122+-0x32));if(_0x3453c0===_0xf3019)break;else _0x1d0d09['push'](_0x1d0d09['shift']());}catch(_0x1b4e77){_0x1d0d09['push'](_0x1d0d09['shift']());}}}(_0x2803,0x42caa+-0x1*-0x16cabd+-0x27*0x4e09));if(!match)return await message[_0x46d562(0x22f)](_0x46d562(0x208)+_0x46d562(0x21b)+_0x46d562(0x21d)+_0x46d562(0x220)+_0x46d562(0x214)+_0x46d562(0x232)+_0x46d562(0x20e)+_0x46d562(0x23d)+_0x46d562(0x211)+_0x46d562(0x207)+_0x46d562(0x1f3)+_0x46d562(0x204)+_0x46d562(0x1f8)+_0x46d562(0x239)+_0x46d562(0x20b));match=match||message[_0x46d562(0x227)+_0x46d562(0x22a)][_0x46d562(0x1fb)];const matchx=extractUrlFromMessage(match);let packid=matchx[_0x46d562(0x20f)](_0x46d562(0x228)+_0x46d562(0x215))[-0x1f75*0x1+-0x87d+0xd51*0x3],{result}=await getJson(_0x46d562(0x230)+_0x46d562(0x1f7)+_0x46d562(0x1f4)+_0x46d562(0x22b)+_0x46d562(0x1fa)+_0x46d562(0x236)+_0x46d562(0x222)+_0x46d562(0x200)+_0x46d562(0x1fd)+_0x46d562(0x1f1)+encodeURIComponent(packid));if(result[_0x46d562(0x226)+'d'])return message[_0x46d562(0x22f)](_0x46d562(0x20a)+_0x46d562(0x223)+_0x46d562(0x238)+_0x46d562(0x22e));message[_0x46d562(0x22f)]((_0x46d562(0x210)+_0x46d562(0x21c)+result[_0x46d562(0x23c)][_0x46d562(0x229)]+(_0x46d562(0x233)+_0x46d562(0x22d)+_0x46d562(0x23a))+result[_0x46d562(0x23c)][_0x46d562(0x229)]*(0xfb*0xd+0x2558+0x2*-0x190b+0.5)+(_0x46d562(0x213)+_0x46d562(0x1ef)+_0x46d562(0x221)+_0x46d562(0x219)+_0x46d562(0x218)+_0x46d562(0x23b)+_0x46d562(0x216)))[_0x46d562(0x205)]());function _0x2803(){const _0x12c79e=['e?file_id=','ckerSet?na','Done','sticker','PD4/getSti','1305BNKdfS','send','91:AAHWB1d','a\x20chance\x20o','trim','result','\x20mind\x20that','_Enter\x20a\x20t','1773xMKiQK','_Animated\x20','ntly','923481TRTKOg','3757457CpmKEM','dance_pack','split','*Total\x20sti','ot\x0aKeep\x20in','Qd-vi0IbH2','\x20seconds\x0aK','e/addstick','rs/','frequently','8rQuzPD4/','ance\x20of\x20ba','re\x20is\x20a\x20ch','file_path','g\x20sticker\x20','ckers\x20:*\x20','url_\x0aEg:\x20h','PD4/getFil','10FRhVuU','ttps://t.m','d\x20that\x20the','k-hqQ8rQuz','stickers\x20a','file_id','NjKYUk-hqQ','is_animate','reply_mess','/addsticke','length','age','1038791:AA','3639274rRfsOL','d\x20complete','ported_','reply','https://ap','CKNAME','ers/Vc_me_','\x0a*Estimate','bot8910387','82200KgBcCV','0IbH2NjKYU','12796021LDTIpy','re\x20not\x20sup','sed\x20freque','\x20in:*\x20','n\x20if\x20used\x20','stickers','_by_fStikB','eep\x20in\x20min','8324SJEqGH','me=','9108500PXNqBO','\x20there\x20is\x20','.org/bot89','STICKER_PA','6mEaFZv','i.telegram','f\x20ban\x20if\x20u','.org/file/','HWB1dQd-vi','text'];_0x2803=function(){return _0x12c79e;};return _0x2803();}for(let sticker of result[_0x46d562(0x23c)]){let file_path=await getJson(_0x46d562(0x230)+_0x46d562(0x1f7)+_0x46d562(0x1f4)+_0x46d562(0x22b)+_0x46d562(0x1fa)+_0x46d562(0x236)+_0x46d562(0x222)+_0x46d562(0x21e)+_0x46d562(0x1fc)+sticker[_0x46d562(0x224)]);const buff=_0x46d562(0x230)+_0x46d562(0x1f7)+_0x46d562(0x1f9)+_0x46d562(0x234)+_0x46d562(0x203)+_0x46d562(0x212)+_0x46d562(0x225)+_0x46d562(0x217)+file_path[_0x46d562(0x206)][_0x46d562(0x21a)],stickerPackNameParts=config[_0x46d562(0x1f5)+_0x46d562(0x231)][_0x46d562(0x20f)](';'),packname=stickerPackNameParts[0x764+-0xc65*-0x1+-0x13c9*0x1],author=stickerPackNameParts[0x935*0x2+0xc7f+-0x1ee8];await message[_0x46d562(0x202)](buff,{'packname':packname,'author':author},_0x46d562(0x1ff)),wait(-0x151*-0x5+-0x58d+-0xbb*-0x1c);}function _0x5de8(_0x27a7ce,_0x166b40){const _0x78181e=_0x2803();return _0x5de8=function(_0x5852d8,_0x2bab55){_0x5852d8=_0x5852d8-(0xe5d+0x13d*0x5+-0x129f);let _0x94b17c=_0x78181e[_0x5852d8];return _0x94b17c;},_0x5de8(_0x27a7ce,_0x166b40);}return await message[_0x46d562(0x22f)](_0x46d562(0x1fe));
});

System({
	pattern: "tiktok",
	fromMe: isPrivate,
	desc: "tiktok video downloader",
	type: "download",
}, async (message, match) => {
	await sendTiktok(message, match);
});

System({
  pattern: 'pinterest ?(.*)',
  fromMe: isPrivate,
  desc: "pinterest downloader",
  type: "download",
}, async (message, match, m) => {
match = match || message.reply_message.text;
  try {
    if (!match) {
      return await message.reply('_Please provide a pinterest *url*');
    } else {
      if (!isUrl(match)) {
        return await message.reply("_Please provide a valid pinterest *url*");
      } else {
        await m.sendFromUrl(await Pinterestdl(message, await extractUrlFromMessage(match)));
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

System({
    pattern: 'apk ?(.*)',
    fromMe: isPrivate,
    desc: 'Download apps from Aptoide',
    type: 'download',
}, async (message, match) => { 
    var _0x273276=_0x14ef;(function(_0x569c84,_0x99fd8e){var _0x43e05d=_0x14ef,_0x3617dd=_0x569c84();while(!![]){try{var _0x2acfb5=parseInt(_0x43e05d(0x72))/(0x1*0x1675+0x3*-0x1b1+-0x5cb*0x3)+parseInt(_0x43e05d(0x70))/(-0x1920+0x1c44+-0x322)+-parseInt(_0x43e05d(0x6a))/(0x7*-0x251+0x1a9e+-0x214*0x5)*(-parseInt(_0x43e05d(0x6f))/(0xe*-0x24e+-0x202b+0x4073))+parseInt(_0x43e05d(0x9c))/(0x3*-0xadb+0x209*0xe+0x4*0x106)*(parseInt(_0x43e05d(0x8e))/(0x51f+0x3*-0x79f+0x2f6*0x6))+parseInt(_0x43e05d(0x93))/(0x1c6a+-0x2506+0x8a3)*(-parseInt(_0x43e05d(0x98))/(0xa38+-0x1769+0x5*0x2a5))+parseInt(_0x43e05d(0x90))/(0xe*0x255+0x30+0x1b*-0x137)*(parseInt(_0x43e05d(0x88))/(0x1*0xe64+0x1*0x42d+-0x1287))+parseInt(_0x43e05d(0x92))/(0x5*0x653+-0x25f9+0x665)*(-parseInt(_0x43e05d(0x94))/(-0x5*-0x421+-0x67*-0x46+0x49*-0xab));if(_0x2acfb5===_0x99fd8e)break;else _0x3617dd['push'](_0x3617dd['shift']());}catch(_0x289ba5){_0x3617dd['push'](_0x3617dd['shift']());}}}(_0x8ea1,-0x1654cc+0x1*-0x87253+0x6e*0x686f),match=match||message[_0x273276(0x6b)+_0x273276(0x9b)][_0x273276(0x8b)]);function _0x14ef(_0x31e79f,_0x1dbca9){var _0xadbb04=_0x8ea1();return _0x14ef=function(_0x551b34,_0x2963d2){_0x551b34=_0x551b34-(0x2312+-0x253f+-0x149*-0x2);var _0x390a78=_0xadbb04[_0x551b34];return _0x390a78;},_0x14ef(_0x31e79f,_0x1dbca9);}if(!match)return await message[_0x273276(0x82)](_0x273276(0x9f)+_0x273276(0x79)+_0x273276(0x95)+_0x273276(0x99));var apiUrl=_0x273276(0x87)+_0x273276(0x96)+_0x273276(0x68)+_0x273276(0x6c)+encodeURIComponent(match);function _0x8ea1(){var _0x53614d=['package','4246IkExUV','2065QWmJqj','50628yHgirL','Exᴀᴍᴘʟᴇ:\x20ꜰ','hangayt.me','sendMessag','32416cdzitG','ʀᴇᴇ\x20ꜰɪʀᴇ*','PK.\x20Please','age','5JYHwgx','client','data','*Nᴇᴇᴅ\x20ᴀɴ\x20ᴀ','_*Aᴘᴘ\x20Dᴏᴡɴ','status','dllink','get','lastup','ʟᴏᴀᴅᴇᴅ*_','/download/','\x20check\x20the','20013aZngsm','reply_mess','apk?id=','in\x20later.','name','124ofDzsr','3445820qiiBPl','edit','1251972TMacbd','e-archive','error','laPLp','ᴀᴛᴇ*:\x20','Failed\x20to\x20','\x0a*Sɪᴢᴇ*:\x20','ᴘᴘ\x20ɴᴀᴍᴇ*\x0a*','oid.packag','.apk','size','n/vnd.andr','ᴅɪɴɢ...._','\x0a\x0a_Dᴏᴡɴʟᴏᴀ','or\x20try\x20aga','chat','reply','*Nᴀᴍᴇ*:\x20','\x0a*Lᴀꜱᴛ\x20Uᴘᴅ','\x0a*Pᴀᴄᴋᴀɢᴇ\x20','ECKls','https://vi','1727150uAuiZR','Nᴀᴍᴇ*:\x20','\x20app\x20name\x20','text','download\x20A','send','2359626iPxeqU','applicatio','9LYcgKD'];_0x8ea1=function(){return _0x53614d;};return _0x8ea1();}try{var response=await axios[_0x273276(0x65)](apiUrl);if(response[_0x273276(0x9e)][_0x273276(0xa1)]){var apkData=response[_0x273276(0x9e)][_0x273276(0x9e)],initialMessage=_0x273276(0x83)+apkData[_0x273276(0x6e)]+_0x273276(0x78)+apkData[_0x273276(0x7c)]+(_0x273276(0x84)+_0x273276(0x76))+apkData[_0x273276(0x66)]+(_0x273276(0x85)+_0x273276(0x89))+apkData[_0x273276(0x91)]+(_0x273276(0x7f)+_0x273276(0x7e)),send=await message[_0x273276(0x8d)](initialMessage);setTimeout(async()=>{var _0x367c99=_0x273276,_0x11c854={'ECKls':_0x367c99(0x8f)+_0x367c99(0x7d)+_0x367c99(0x7a)+_0x367c99(0x73),'laPLp':_0x367c99(0xa0)+_0x367c99(0x67)};await message[_0x367c99(0x9d)][_0x367c99(0x97)+'e'](message[_0x367c99(0x81)],{'document':{'url':apkData[_0x367c99(0xa2)]},'mimetype':_0x11c854[_0x367c99(0x86)],'fileName':apkData[_0x367c99(0x6e)]+_0x367c99(0x7b)},{'quoted':message[_0x367c99(0x9e)]}),await send[_0x367c99(0x71)](_0x11c854[_0x367c99(0x75)]);},-0x5b*-0x4f+-0xae3*-0x3+-0x2936);}else await message[_0x273276(0x82)](_0x273276(0x77)+_0x273276(0x8c)+_0x273276(0x9a)+_0x273276(0x69)+_0x273276(0x8a)+_0x273276(0x80)+_0x273276(0x6d));}catch(_0x3a62ce){console[_0x273276(0x74)](_0x3a62ce),await message[_0x273276(0x82)](_0x273276(0x77)+_0x273276(0x8c)+_0x273276(0x9a)+_0x273276(0x69)+_0x273276(0x8a)+_0x273276(0x80)+_0x273276(0x6d));}
});

System({
	pattern: 'fb ?(.*)',
	fromMe: isPrivate,
	desc: 'Download Facebook media',
	type: 'download',
}, async (message, match, m) => {
	const _0xd47d7d=_0x3c07;function _0x3c07(_0x34cd70,_0x33624a){const _0x571e71=_0xa3a9();return _0x3c07=function(_0x557d0c,_0x11e310){_0x557d0c=_0x557d0c-(0x1148+0x10a*0xa+-0x19ee);let _0x166e70=_0x571e71[_0x557d0c];return _0x166e70;},_0x3c07(_0x34cd70,_0x33624a);}(function(_0x35b8d5,_0x1b9c63){const _0x5de209=_0x3c07,_0x5e11e2=_0x35b8d5();while(!![]){try{const _0x108713=-parseInt(_0x5de209(0x1c0))/(-0xdbb*0x1+-0x1*-0x1924+-0xb68)+parseInt(_0x5de209(0x1db))/(0x87*-0x2+-0x1b1d+0x1*0x1c2d)+parseInt(_0x5de209(0x1cb))/(0x6b*-0x47+0x112e+0x641*0x2)+-parseInt(_0x5de209(0x1c6))/(0x249e+-0x1172+-0x1*0x1328)*(-parseInt(_0x5de209(0x1d2))/(0x8*0x1e5+0x2470+-0x1e9*0x1b))+-parseInt(_0x5de209(0x1cd))/(-0x10fc+-0x15bb+0x26bd)*(parseInt(_0x5de209(0x1da))/(0x1963+-0x1f17*0x1+0x9*0xa3))+parseInt(_0x5de209(0x1d1))/(-0x1*0xfb8+-0x4*-0x2ce+-0x1*-0x488)+parseInt(_0x5de209(0x1c8))/(-0x12d2+-0x9*0x153+0x1ec6)*(parseInt(_0x5de209(0x1ca))/(-0x152+-0x39*-0x7b+-0x1a07));if(_0x108713===_0x1b9c63)break;else _0x5e11e2['push'](_0x5e11e2['shift']());}catch(_0x40f42a){_0x5e11e2['push'](_0x5e11e2['shift']());}}}(_0xa3a9,0x35b*-0x137+-0x1077eb+0x1e7286*0x1));if(!match){await message[_0xd47d7d(0x1c7)](_0xd47d7d(0x1be)+_0xd47d7d(0x1d9));return;}function _0xa3a9(){const _0xd1dc2a=['ebook\x20vide','ironman/fb','8527272OKnvHM','317025uHIVyD','_Downloade','Error\x20fetc','downloaded','sendMessag','client','data','ebook\x20URL','413wnMtGQ','1384972QRZlwk','URL','get','Need\x20a\x20Fac','nding\x20the\x20','801062gLtnJt','ending\x20Fac','hing\x20or\x20se','hing\x20and\x20s','url','chat','4kBqGaD','send','36ocoEvo','?url=','2053730OdnRhR','269274QDhqFf','error','130476svtsHj','video.'];_0xa3a9=function(){return _0xd1dc2a;};return _0xa3a9();}const fbVideoUrl=match;try{const ironManUrl=IronMan(_0xd47d7d(0x1d0)+_0xd47d7d(0x1c9)+fbVideoUrl),response=await axios[_0xd47d7d(0x1dd)](ironManUrl),videoData=response[_0xd47d7d(0x1d8)][_0xd47d7d(0x1d5)+_0xd47d7d(0x1dc)][_0xd47d7d(0x1d8)][-0x18f3+-0xbb6+-0x755*-0x5];await message[_0xd47d7d(0x1d7)][_0xd47d7d(0x1d6)+'e'](message[_0xd47d7d(0x1c5)],{'video':{'url':videoData[_0xd47d7d(0x1c4)],'caption':_0xd47d7d(0x1d3)+'d_'}});}catch(_0x5397bd){console[_0xd47d7d(0x1cc)](_0xd47d7d(0x1d4)+_0xd47d7d(0x1c3)+_0xd47d7d(0x1c1)+_0xd47d7d(0x1cf)+'o:',_0x5397bd),await message[_0xd47d7d(0x1c7)](_0xd47d7d(0x1d4)+_0xd47d7d(0x1c2)+_0xd47d7d(0x1bf)+_0xd47d7d(0x1ce));}
});

System({
    pattern: "mediafire",
    fromMe: isPrivate,
    desc: "mediafire downloader",
    type: "download",
},
async (message, match) => {
    const fetchData = async (mediafireUrl) => {
        try {
            const data = await mediafire(mediafireUrl);
            if (data && data.length > 0) {
                const name = data[0].nama;
                const mime = data[0].mime;
                const size = data[0].size.trim();
                const link = data[0].link;
                return { name, mime, size, link };
            } else {
                throw new Error("Invalid MediaFire URL or no data found");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }};
    match = match || message.reply_message.text;
    if (!match) {
        await message.reply("_Give a mediafire *Url*_");
    } else {
        const mediafireUrl = extractUrlFromMessage(match);
        try {
            const documentData = await fetchData(mediafireUrl);
            if (documentData) {
                const downloadMessage = await message.send(`_*Downloading --> ${documentData.name}*_`);
                await message.client.sendMessage(message.chat, {
                    document: {
                        url: documentData.link,
                    },
                    mimetype: documentData.mime,
                    fileName: documentData.name,
                    fileSize: documentData.size,
                }, {
                    quoted: message,
                });
                await downloadMessage.edit("_*Download complete!*_");
            } else {
                await message.send("_It's not a valid MediaFire URL_");
            }
        } catch (error) {
            console.error("Error downloading:", error);
        }
    }
});


System({
    pattern: "story",
    fromMe: isPrivate,
    desc: "To download insta story",
    type: "download"
}, async (message, match) => {
    match = match || message.reply_message.text;
    const data = await extractUrlFromMessage(match);
    if (!match) return message.reply("_*Provide an Instagram story URL*_");
    if (!data) return message.reply("_*Provide a valid Instagram story URL*_");
    if (match.startsWith("dl-url")) {
        await message.sendFromUrl(data);
    } else {
        if (!isInstaUrl(data)) return message.reply("_*Provide a valid Instagram story URL*_");
        const result = await getJson(await IronMan(`ironman/insta?url=${data}`));
        let options = [];
        let n = 1;

        if (!result[0]) return await message.send("Not Found");

        result.forEach(u => {
            options.push({
                displayText: `${n++}/${result.length}`,
                id: `story dl-url  ${u.download_link}`
            });
        });

        if (options.length === 1) return await message.sendFromUrl(result[0].download_link);

        const optionChunks = [];
        while (options.length > 0) {
            optionChunks.push(options.splice(0, 10));
        }

        for (const chunk of optionChunks) {
            await message.sendPollMessage({ 
                name: "\n*Instagram Story Downloader ⬇️*\n", 
                values: chunk, 
		onlyOnce: false,
                id: message.key.id, 
                withPrefix: true, 
                participates: [message.sender] 
            });
        }
    }
});
