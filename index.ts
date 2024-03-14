import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
//@ts-ignore
import FyersAPI from "fyers-api-v3";
// import axios from "axios";

const app = express();
const server = createServer(app);
const io = new Server(server);

const fyers = new FyersAPI.fyersModel();
const FyersSocket = FyersAPI.fyersDataSocket;

const appId = "ZQ003KAXPG-100";
fyers.setAppId("ZQ003KAXPG-100");
fyers.setRedirectUrl(
  "https://trade.fyers.in/api-login/redirect-uri/index.html"
);

var generateAuthcodeURL = fyers.generateAuthCode();
console.log(generateAuthcodeURL);

// Create a new instance of FyersAPI

fyers.setRedirectUrl(
  "https://trade.fyers.in/api-login/redirect-uri/index.html"
);
// process.exit(15);
// Define the authorization code and secret key required for generating access token
const authcode =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE3MDkyNzIwODUsImV4cCI6MTcwOTMwMjA4NSwibmJmIjoxNzA5MjcxNDg1LCJhdWQiOiJbXCJ4OjBcIiwgXCJ4OjFcIiwgXCJ4OjJcIiwgXCJkOjFcIiwgXCJ4OjFcIiwgXCJ4OjBcIl0iLCJzdWIiOiJhdXRoX2NvZGUiLCJkaXNwbGF5X25hbWUiOiJZUjA2MTg1Iiwib21zIjoiSzEiLCJoc21fa2V5IjoiYzFhYTA1ZDI5M2Y0NWM4MWQyNjY3OWExNmE5YTQ4MWE1ZWQ3NGY3Yjk0Y2YyMzBhMTBhYmE1MmMiLCJub25jZSI6IiIsImFwcF9pZCI6IlpRMDAzS0FYUEciLCJ1dWlkIjoiNDcxZWVhNjA0NzNmNGQwZThlMDM0OTE3NmNjMzcyNDciLCJpcEFkZHIiOiIwLjAuMC4wIiwic2NvcGUiOiIifQ.4GsbJjrroDnQuS9aH2-95T7U0Xp8X6tf7gVxk23rOmA";
const secretKey = "EW5959XZ55";
// fyers
//   .generate_access_token({ secret_key: secretKey, auth_code: authcode })
//   .then((response: any) => {
//     const access_token = resposne.access_token"
//     console.log(response);
//   })
//   .catch((error: any) => {
//     console.log(error);
//   });

const access_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MDkyNzI4OTMsImV4cCI6MTcwOTMzOTQzMywibmJmIjoxNzA5MjcyODkzLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbDRXODlqbGs1Q1Z3Z2pIcXlkdmk2SXZlZVJWTUJJZmstREZXRUJTUWoyRlhvdkZxR2FOOHZXbnRZTjVHLVNoRVEzWXZHX281MjlnYUVvNDh6d1FrQjBQOS1hbExidjVpS3ViRm43dlpGamhoLWM2VT0iLCJkaXNwbGF5X25hbWUiOiJSQUpBVCBQQVJNRU5EUkEgU0lOR0giLCJvbXMiOiJLMSIsImhzbV9rZXkiOiJjMWFhMDVkMjkzZjQ1YzgxZDI2Njc5YTE2YTlhNDgxYTVlZDc0ZjdiOTRjZjIzMGExMGFiYTUyYyIsImZ5X2lkIjoiWVIwNjE4NSIsImFwcFR5cGUiOjEwMCwicG9hX2ZsYWciOiJOIn0.h00EQTlagUczjcSvel0QZ4NKz-bIBSEv0pQurVZH6zs";

function onmsg(message: any) {
  io.emit("newMessage", message);
}

var fyersdata = new FyersSocket(`${appId}:${access_token}`);

function onconnect() {
  fyersdata.subscribe([
    "NSE:ABB-EQ",
    "NSE:ACC-EQ",
    "NSE:APLAPOLLO-EQ",
    "NSE:AUBANK-EQ",
    "NSE:ADANIENSOL-EQ",
    "NSE:ADANIENT-EQ",
    "NSE:ADANIGREEN-EQ",
    "NSE:ADANIPORTS-EQ",
    "NSE:ADANIPOWER-BE",
    "NSE:ATGL-EQ",
    "NSE:AWL-EQ",
    "NSE:ABCAPITAL-EQ",
    "NSE:ABFRL-EQ",
    "NSE:ALKEM-EQ",
    "NSE:AMBUJACEM-EQ",
    "NSE:APOLLOHOSP-EQ",
    "NSE:APOLLOTYRE-EQ",
    "NSE:ASHOKLEY-EQ",
    "NSE:ASIANPAINT-EQ",
    "NSE:ASTRAL-EQ",
    "NSE:AUROPHARMA-EQ",
    "NSE:DMART-EQ",
    "NSE:AXISBANK-EQ",
    "NSE:BAJAJ-AUTO-EQ",
    "NSE:BAJFINANCE-EQ",
    "NSE:BAJAJFINSV-EQ",
    "NSE:BAJAJHLDNG-EQ",
    "NSE:BALKRISIND-EQ",
    "NSE:BANDHANBNK-EQ",
    "NSE:BANKBARODA-EQ",
    "NSE:BANKINDIA-EQ",
    "NSE:BATAINDIA-EQ",
    "NSE:BERGEPAINT-EQ",
    "NSE:BDL-EQ",
    "NSE:BEL-EQ",
    "NSE:BHARATFORG-EQ",
    "NSE:BHEL-EQ",
    "NSE:BPCL-EQ",
    "NSE:BHARTIARTL-EQ",
    "NSE:BIOCON-EQ",
    "NSE:BOSCHLTD-EQ",
    "NSE:BRITANNIA-EQ",
    "NSE:CGPOWER-EQ",
    "NSE:CANBK-EQ",
    "NSE:CHOLAFIN-EQ",
    "NSE:CIPLA-EQ",
    "NSE:COALINDIA-EQ",
    "NSE:COFORGE-EQ",
    "NSE:COLPAL-EQ",
    "NSE:CONCOR-EQ",
    "NSE:COROMANDEL-EQ",
    "NSE:CROMPTON-EQ",
    "NSE:CUMMINSIND-EQ",
    "NSE:DLF-EQ",
    "NSE:DABUR-EQ",
    "NSE:DALBHARAT-EQ",
    "NSE:DEEPAKNTR-EQ",
    "NSE:DELHIVERY-EQ",
    "NSE:DEVYANI-EQ",
    "NSE:DIVISLAB-EQ",
    "NSE:DIXON-EQ",
    "NSE:LALPATHLAB-EQ",
    "NSE:DRREDDY-EQ",
    "NSE:EICHERMOT-EQ",
    "NSE:ESCORTS-EQ",
    "NSE:NYKAA-EQ",
    "NSE:FEDERALBNK-EQ",
    "NSE:FACT-EQ",
    "NSE:FORTIS-EQ",
    "NSE:GAIL-EQ",
    "NSE:GLAND-EQ",
    "NSE:GODREJCP-EQ",
    "NSE:GODREJPROP-EQ",
    "NSE:GRASIM-EQ",
    "NSE:FLUOROCHEM-EQ",
    "NSE:GUJGASLTD-EQ",
    "NSE:HCLTECH-EQ",
    "NSE:HDFCAMC-EQ",
    "NSE:HDFCBANK-EQ",
    "NSE:HDFCLIFE-EQ",
    "NSE:HAVELLS-EQ",
    "NSE:HEROMOTOCO-EQ",
    "NSE:HINDALCO-EQ",
    "NSE:HAL-EQ",
    "NSE:HINDPETRO-EQ",
    "NSE:HINDUNILVR-EQ",
    "NSE:ICICIBANK-EQ",
    "NSE:ICICIGI-EQ",
    "NSE:ICICIPRULI-EQ",
    "NSE:IDFCFIRSTB-EQ",
    "NSE:ITC-EQ",
    "NSE:INDIANB-EQ",
    "NSE:INDHOTEL-EQ",
    "NSE:IOC-EQ",
    "NSE:IRCTC-EQ",
    "NSE:IRFC-EQ",
    "NSE:IGL-EQ",
    "NSE:INDUSTOWER-EQ",
    "NSE:INDUSINDBK-EQ",
    "NSE:NAUKRI-EQ",
    "NSE:INFY-EQ",
    "NSE:INDIGO-EQ",
    "NSE:IPCALAB-EQ",
    "NSE:JSWENERGY-EQ",
    "NSE:JSWSTEEL-EQ",
    "NSE:JINDALSTEL-EQ",
    "NSE:JUBLFOOD-EQ",
    "NSE:KPITTECH-EQ",
    "NSE:KOTAKBANK-EQ",
    "NSE:L&TFH-EQ",
    "NSE:LTTS-EQ",
    "NSE:LICHSGFIN-EQ",
    "NSE:LTIM-EQ",
    "NSE:LT-EQ",
    "NSE:LAURUSLABS-EQ",
    "NSE:LICI-EQ",
    "NSE:LUPIN-EQ",
    "NSE:MRF-EQ",
    "NSE:LODHA-EQ",
    "NSE:M&MFIN-EQ",
    "NSE:M&M-EQ",
    "NSE:MANKIND-EQ",
    "NSE:MARICO-EQ",
    "NSE:MARUTI-EQ",
    "NSE:MFSL-EQ",
    "NSE:MAXHEALTH-EQ",
    "NSE:MAZDOCK-EQ",
    "NSE:MSUMI-EQ",
    "NSE:MPHASIS-EQ",
    "NSE:MUTHOOTFIN-EQ",
    "NSE:NHPC-EQ",
    "NSE:NMDC-EQ",
    "NSE:NTPC-EQ",
    "NSE:NAVINFLUOR-EQ",
    "NSE:NESTLEIND-EQ",
    "NSE:OBEROIRLTY-EQ",
    "NSE:ONGC-EQ",
    "NSE:OIL-EQ",
    "NSE:PAYTM-EQ",
    "NSE:POLICYBZR-EQ",
    "NSE:PIIND-EQ",
    "NSE:PAGEIND-EQ",
    "NSE:PATANJALI-EQ",
    "NSE:PERSISTENT-EQ",
    "NSE:PETRONET-EQ",
    "NSE:PIDILITIND-EQ",
    "NSE:PEL-EQ",
    "NSE:POLYCAB-EQ",
    "NSE:POONAWALLA-EQ",
    "NSE:PFC-EQ",
    "NSE:POWERGRID-EQ",
    "NSE:PRESTIGE-EQ",
    "NSE:PGHH-EQ",
    "NSE:PNB-EQ",
    "NSE:RECLTD-EQ",
    "NSE:RVNL-EQ",
    "NSE:RELIANCE-EQ",
    "NSE:SBICARD-EQ",
    "NSE:SBILIFE-EQ",
    "NSE:SRF-EQ",
    "NSE:MOTHERSON-EQ",
    "NSE:SHREECEM-EQ",
    "NSE:SHRIRAMFIN-EQ",
    "NSE:SIEMENS-EQ",
    "NSE:SONACOMS-EQ",
    "NSE:SBIN-EQ",
    "NSE:SAIL-EQ",
    "NSE:SUNPHARMA-EQ",
    "NSE:SUNTV-EQ",
    "NSE:SYNGENE-EQ",
    "NSE:TVSMOTOR-EQ",
    "NSE:TATACHEM-EQ",
    "NSE:TATACOMM-EQ",
    "NSE:TCS-EQ",
    "NSE:TATACONSUM-EQ",
    "NSE:TATAELXSI-EQ",
    "NSE:TATAMTRDVR-EQ",
    "NSE:TATAMOTORS-EQ",
    "NSE:TATAPOWER-EQ",
    "NSE:TATASTEEL-EQ",
    "NSE:TECHM-EQ",
    "NSE:RAMCOCEM-EQ",
    "NSE:TITAN-EQ",
    "NSE:TORNTPHARM-EQ",
    "NSE:TORNTPOWER-EQ",
    "NSE:TRENT-EQ",
    "NSE:TIINDIA-EQ",
    "NSE:UPL-EQ",
    "NSE:ULTRACEMCO-EQ",
    "NSE:UNIONBANK-EQ",
    "NSE:UBL-EQ",
    "NSE:MCDOWELL-N-EQ",
    "NSE:VBL-EQ",
    "NSE:VEDL-EQ",
    "NSE:IDEA-EQ",
    "NSE:VOLTAS-EQ",
    "NSE:WIPRO-EQ",
    "NSE:YESBANK-EQ",
    "NSE:ZEEL-EQ",
    "NSE:ZOMATO-EQ",
    // "NSE:ZYDUSLIFE-EQ",
  ]);
  fyersdata.autoreconnect(); //enable auto reconnection mechanism in case of disconnection
}

function onerror(err: unknown) {
  console.log("Error: ");
  console.error(err);
}

function onclose() {
  console.log("socket closed");
}

fyersdata.on("message", onmsg);
fyersdata.on("connect", onconnect);
fyersdata.on("error", onerror);
fyersdata.on("close", onclose);

fyersdata.connect();

app.get("/", (req, res) => {
  return res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);
});

server.listen(3000, () => console.log("server running at port 3000"));
