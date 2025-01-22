
function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = tipCalculator(bill, tipPercent)

    document.getElementById('tipValue').innerHTML = formatMoney(tipValue) + ' €'
    document.getElementById('tipPercent').innerHTML = tipPercent + '%'

    let totalBill = billCalculator(bill, tipValue)

    document.getElementById('totalWithTip').innerHTML = formatMoney(totalBill) + ' €'

    let totalSplited = billSpliter(totalBill, split)

    document.getElementById('billEach').innerHTML = formatMoney(totalSplited) + ' €'
    document.getElementById('splitValue').innerHTML = split + ' People'

}

function tipCalculator(bill, tipPercent) {

    tipValue = bill * (tipPercent / 100)

    return tipValue
}

function billCalculator(bill, tipValue) {
    return totalBill = bill + tipValue
}

function billSpliter(totalBill, split) {
    return totalSplit = totalBill/split
}

function formatMoney(value) {
    value = Math.ceil(value * 100)/100
    value = value.toFixed(2)
    return value
}