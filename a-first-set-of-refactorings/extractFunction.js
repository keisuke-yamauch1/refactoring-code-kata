function beforePrintOwing(invoice) {
  printBenner();
  let outstanding = calculateOutstanding();

  // 明細の印字（print details）
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

// ----- ↑ before ↑ -----
// ----- ↓ after ↓ -----

function afterPrintOwing(invoice) {
  printBenner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);
}

function printDetails(outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}
