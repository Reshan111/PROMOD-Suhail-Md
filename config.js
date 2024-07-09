const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94771604601";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_02_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyLFxuICAgICAgICAyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICA5MixcbiAgICAgICAgNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDQxLFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTkYvNjlMM0lOMFlhbWVndzd4Rk5QcGNoTlZDRG1aMGVvTi9KbmFRTlhkcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3MTYwNDYwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEU5MzM5RkQ3MzUxNjFDM0I5NDE5MUJCMUI0RTdFOTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTA0OTc1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzE2MDQ2MDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUwMTQ1MTc2NEIzMDVBMzYwNTg4MEZCODcxREYwRDdCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDUwNDk3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNR1hsNXRqblJ3aTB0UU5zcExGdzV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0Njc3Zjk5LTM3ZTktNDk2YS1iMmI0LTVlYjhjM2E2MDk3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAyMzIsXG4gICAgICAxNDIsXG4gICAgICAyMSxcbiAgICAgIDMyLFxuICAgICAgMjMwLFxuICAgICAgMTUxLFxuICAgICAgMzEsXG4gICAgICAyNDUsXG4gICAgICAyNDUsXG4gICAgICAxNTksXG4gICAgICAxMjAsXG4gICAgICA2MCxcbiAgICAgIDEwOSxcbiAgICAgIDcwLFxuICAgICAgNjMsXG4gICAgICAxNDYsXG4gICAgICAyMzMsXG4gICAgICA1OCxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDEzNixcbiAgICAgIDEzNSxcbiAgICAgIDE0MCxcbiAgICAgIDEzMyxcbiAgICAgIDkxLFxuICAgICAgMjA5LFxuICAgICAgMjUsXG4gICAgICA1NyxcbiAgICAgIDI0NCxcbiAgICAgIDE1NixcbiAgICAgIDQxLFxuICAgICAgNjgsXG4gICAgICAxNTksXG4gICAgICAyMzMsXG4gICAgICAxNDYsXG4gICAgICAyNCxcbiAgICAgIDE2MSxcbiAgICAgIDE1LFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEVZSDFIWlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcxNjA0NjAxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJyZXNoYW50aGF0aHNhcmE0NThcIixcbiAgICBcImxpZFwiOiBcIjE2OTIxMzQ3Mzg2MTc3MzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmZS9Xc1FpS1d6dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidlprZFY5Y0txNXAxeXdza25sN25DdGxSbE9PY0lzNC9meWhiVXFJV1NRbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMV3lPbE50YVJRa1drckZES29kT2xneTBBcEw0cFFkcTc3aitnMHJNekNHcFNMWUkxdXhFUExYT0hnYTErd2JDMHY1T3RPT0xJREpRVkZzeExjMHFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKRE5wZ2dSOENGd3o5VWZ6Q2FFdjAyT0lQZWNXUUNLbjJQcmNCZHQyQW1zMENvb0dsVmJyeHAzS21BdVNHTVMwOS95QkZmdjh1QmEvQTh0Q0xpQ3NCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MTYwNDYwMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MDQ5NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWE9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJYTy5qc29uIjogIntcImtleURhdGFcIjpcIndUM1k4bmt6S1l1Q0VxVXp4NDVFa3QvRHhvRkRYTXZjKys5MWM1RU1nWTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI2NDU1MzE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1MDQ5NzM2NDRcIn0iCn0=
  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
