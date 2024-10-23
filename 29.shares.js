const stocks = {Apple: "AAPL", Microsoft: "MSFT", Google: "GOOG"}

const portfolio = {AAPL: 10, MSFT: 100, GOOG: 300}

function addStocK (portfolio, stock, shares) {
    portfolio[stock] += shares

}

addStocK(portfolio, stocks.Microsoft, 90)
addStocK(portfolio, stocks.Apple, 1000)