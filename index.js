const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const tellMeBtn = document.querySelector("#tell-me-btn");
const outputProfit = document.querySelector(".outputProfit");
const outputLoss = document.querySelector(".outputLoss");
const outputEqual = document.querySelector(".outputEqual");

function tellMeBtnHandler(){
    if(initialPrice.value && quantity.value && currentPrice.value) {
        calculateProfitLoss(Number(initialPrice.value),Number(quantity.value), Number(currentPrice.value))
    } 
}

function calculateProfitLoss(initialPrice, quantity, currentPrice){
    if(initialPrice < currentPrice){
        var profit = (currentPrice-initialPrice)*quantity
        var profitPercent = ((100*(currentPrice-initialPrice))/initialPrice).toFixed(2);
        showOutput(profit,profitPercent,"PROFIT")
    } else if(initialPrice > currentPrice){
        var loss = (initialPrice - currentPrice)*quantity
        var lossPercent = ((100*(initialPrice - currentPrice))/initialPrice).toFixed(2);
        showOutput(loss, lossPercent, "LOSS")
    } else {
        showOutput(0,0,"EQUAL")
    }
}

function showOutput(returnMoney, percent, stat){
    if(stat === "PROFIT"){
        var msg = "🤑AMEZING!! You are in PROFIT With "+ percent+"%  Profit Money: ₹"+returnMoney;
        outputProfit.innerText = msg;
    } else if(stat === "LOSS"){
        var msg = "😔OOPS!! You are in LOSS With "+ percent+"%  LOSS Money: ₹"+returnMoney;
        outputLoss.innerText = msg;
    } else {
        var msg = "😑NO GAIN NO PAIN!! NO PAIN NO GAIN!!😑 "
        outputLoss.innerText = msg;
    }
}





tellMeBtn.addEventListener('click', tellMeBtnHandler)