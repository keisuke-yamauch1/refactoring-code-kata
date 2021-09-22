function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  // 明細の印字（print details）
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

// ----- ↑ before ↑ -----
// ----- ↓ after ↓ -----

function printOwing1(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);
}

function printDetails(outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

// =====================================================================================================================

function printOwing2(invoice) {
  let outstanding = 0;

  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // 未払い料金の計算（calculate outstanding）
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録(record due date)
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // 明細の印字(print details)
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleTimeString()}`);
}

// ----------

function printOwing3(invoice) {
  let outstanding = 0;

  printBanner(); // 関数の抽出

  // 未払い料金の計算（calculate outstanding）
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);

  printDetails2(invoice, outstanding); // 関数の抽出
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function printDetails2(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleTimeString()}`);
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

// =====================================================================================================================

function printOwing4(invoice) {
  let outstanding = 0;

  printBanner();

  // 未払い料金の計算（calculate outstanding）
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails2(invoice, outstanding);
}

// ----------

function printOwing5(invoice) {
  printBanner();

  // 未払い料金の計算（calculate outstanding）
  let outstanding = 0; //　変数を近くに持ってくる
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails2(invoice, outstanding);
}

// ----------

function printOwing6(invoice) {
  printBanner();

  // 未払い料金の計算（calculate outstanding）
  let outstanding = 0; //　変数を近くに持ってくる
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails2(invoice, outstanding);
}

// 抽出しようとするコードをコピーして関数にする
function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding;
}

// ----------

function printOwing7(invoice) {
  printBanner();

  // 未払い料金の計算（calculate outstanding）
  let outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);
  printDetails2(invoice, outstanding);
}

// -----------

function printOwing8(invoice) {
  printBanner();

  // 未払い料金の計算（calculate outstanding）
  const outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);
  printDetails2(invoice, outstanding);
}

function calculateOutstanding2(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
