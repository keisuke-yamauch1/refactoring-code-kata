import {createStatementData} from "./createStatementData";

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `Statement for ${data.customer}\n`
    for (let perf of data.performances) {
        result += ` ${perf.play(perf).name}: ${usd(perf.amount)} (${perf.audience} seats)\n`
    }
    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.totalVolumeCregits} credits\n`;
    return result;
}

function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(invoice, plays) {
    return `<h1>Statement for ${data.customer}</h1>\n`;
}

function usd(aNumber) {
    return new Intl.NumberFormat("es-US",
        {
            style: "currency", currency: "USD",
            minimumFractionDigits: 2
        }).format(aNumber / 100);
}