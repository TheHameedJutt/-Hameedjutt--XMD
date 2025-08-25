const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVscWh0RFErOWRmTjJ6WmR5OHdIN2M1WWF4WWZTTEswOWh5MEgraVJWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1N1bjVXM3kyZVQwQ1BKVXJWOUlnd3NFYkZ1dGpEM3E2OWJQbEhWQ3hCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUERibjB1RW5KUnhyMXVvUVhreWJtaEhUbzRBR3pES2h1azc4R0lwaUUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyeU9sU0tDZlRxWkpjRWhvQkRveXd5U1RtaHZVOUw3eEMzdUVXNWJERWtVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdEcGsrdkhRY1kybVRMVm0wWWdrbUZQM2FhZm1qR3c1NlJJdXVVY2R3RTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJKVDcwd2tFYlNTS0ZNc2lmNC9pSGJveUF1WHkwUFBxV1pGRnRYaS9MVGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlwdk5QV3QzeHRiRUZXTy9TMm5KQmpMbVhLbnRDRmtaYmVzeDBFTVZHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczd2a25zQUZJdVFlMUNHTFR6Wk5jWW9FdXZ1T0N1cEJ6SnJWckMwZEZ6UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVhdDZjVGxQYnBhQk5LZnJOdFBFRjVleTh6VkR4UG1WdGJYMUF2Y1c0bENsSnVtWk5JTFdMaVlpUUhFY2lKTnJIMTN6OE91Q3hQMnFsK1lxQ20yNkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6Im14VEpjRTVzVjJqWTdvejBXZzhFSEJGb3hxMUtwSDRGc0pQcTVQMVUwYms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkJYTkQ3R01RIiwibWUiOnsiaWQiOiI5MjMzNjY5MDc3NDg6NzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQzpcXFVTzqNSXFxIzLXMhs2YzLLMoWHMtsylzKJtzLjNnMynZcy1zIrMpsynzJ1lzLbNiWTMtUrMtsyszK7Nh3XMt8y+zJHNgMy8dMy0zIXMo82TdMy0zYgg76O/IiwibGlkIjoiMjIwODg2NDI2NzMwNTMzOjcxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWJUL2FnSEVOVGpzTVVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY2xyZmcwTHE3ZW0zOTRpcGhSZUJEVlNpNWxSZmdGZWtjMW1rb0tnTDhIRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUVJKOFZOMk0yYWRoUEw4VXRBdFB5TXBkeHpwOGxBWFJXMzNOY3lnWis3L1piOEVlQ2lOY2hpK2t0cHh5OGcyeUx0cko4cEl5UHN1U042NFRiUFpsalE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5FVGRBVHRjRDNLN1pnTFNjU0FNM3hKYVJ6a2FFYU1ZRjErOGJua0ptbkw3Z3BVRVNQV1dXTW9hYUlqNDl5cDFIN2VHL1lTOFA4ZEt3bEY5S2JPcUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzY2OTA3NzQ4OjcxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhKYTM0TkM2dTNwdC9lSXFZVVhnUTFVb3VaVVg0QlhwSE5acEtDb0MvQngifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjExNTQxNCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVtLyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ✓Hameedjutt™-XMD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ibb.co/zWw38zrd",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "✓Hameedjutt™-XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "✓Hameedjutt™-XMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923366907748",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*✓Hameedjutt™-XMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ✓Hameedjutt™-XMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/zWw38zrd",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923366907748",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
