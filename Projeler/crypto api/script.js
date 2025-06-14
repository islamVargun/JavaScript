const apiUrl = "https://www.okx.com/api/v5/market/tickers?instType=SPOT";

// API'den verileri al
async function fetchCryptoPrices() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const tickers = data.data; // Gelen veri listesini al

    // Belirli coinleri filtrele
    const trump = tickers.find((t) => t.instId === "TRUMP-USDT");
    const btc = tickers.find((t) => t.instId === "BTC-USDT");
    const doge = tickers.find((t) => t.instId === "DOGE-USDT");
    const eth = tickers.find((t) => t.instId === "ETH-USDT");
    const xrp = tickers.find((t) => t.instId === "XRP-USDT");
    const bnb = tickers.find((t) => t.instId === "BNB-USDT");
    const ada = tickers.find((t) => t.instId === "ADA-USDT");
    const sol = tickers.find((t) => t.instId === "SOL-USDT");
    const dot = tickers.find((t) => t.instId === "DOT-USDT");
    const link = tickers.find((t) => t.instId === "LINK-USDT");
    const ltc = tickers.find((t) => t.instId === "LTC-USDT");
    const uni = tickers.find((t) => t.instId === "UNI-USDT");
    const usdt = tickers.find((t) => t.instId === "USDT-USDT");
    const xlm = tickers.find((t) => t.instId === "XLM-USDT");
    const eos = tickers.find((t) => t.instId === "EOS-USDT");
    const fil = tickers.find((t) => t.instId === "FIL-USDT");
    const tron = tickers.find((t) => t.instId === "TRX-USDT");

    if (trump)
      document.querySelector("#trump .price").innerText = `$${trump.last}`;
    if (btc) document.querySelector("#btc .price").innerText = `$${btc.last}`;
    if (doge)
      document.querySelector("#doge .price").innerText = `$${doge.last}`;
    if (eth) document.querySelector("#eth .price").innerText = `$${eth.last}`;
    if (xrp) document.querySelector("#xrp .price").innerText = `$${xrp.last}`;
    if (bnb) document.querySelector("#bnb .price").innerText = `$${bnb.last}`;
    if (ada) document.querySelector("#ada .price").innerText = `$${ada.last}`;
    if (sol) document.querySelector("#sol .price").innerText = `$${sol.last}`;
    if (dot) document.querySelector("#dot .price").innerText = `$${dot.last}`;
    if (link)
      document.querySelector("#link .price").innerText = `$${link.last}`;
    if (ltc) document.querySelector("#ltc .price").innerText = `$${ltc.last}`;
    if (uni) document.querySelector("#uni .price").innerText = `$${uni.last}`;
    if (pepe)
      document.querySelector("#pepe .price").innerText = `$${pepe.last}`;
    if (xlm) document.querySelector("#xlm .price").innerText = `$${xlm.last}`;
    if (eos) document.querySelector("#eos .price").innerText = `$${eos.last}`;
    if (fil) document.querySelector("#fil .price").innerText = `$${fil.last}`;
    if (tron)
      document.querySelector("#tron .price").innerText = `$${tron.last}`;
  } catch (error) {
    console.error("Veri alınamadı", error);
    document
      .querySelectorAll(".price")
      .forEach((el) => (el.innerText = "Hata!"));
  }
}

fetchCryptoPrices();
setInterval(fetchCryptoPrices, 9000);
