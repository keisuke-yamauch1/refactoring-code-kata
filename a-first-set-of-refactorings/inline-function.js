function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return doriver.numberOfLateDelveries > 5;
}

// =====================================================================================================================

function getRating1(driver) {
  return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}

// ------------

function rating(aDriver) {
  return moreThanFiveLateDeliveries1(aDriver) ? 2 : 1;
}
function moreThanFiveLateDeliveries1(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// ---------------

function rating1(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// ----------------

function rating2(aDriver) {
  return moreThanFiveLateDeliveries1(aDriver) ? 2 : 1;
}

function moreThanLateDeliveries(drv) {
  return drv.numberOfLateDeliveries > 5;
}

// ----------------

function rating3(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// ----------------

function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function  gatherCustomerData(out, aCustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}

// --------------

function reportLines1(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  gatherCustomerData1(lines, aCustomer);
  return lines;
}

function gatherCustomerData1(out, aCustomer) {
  // out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}

// -----------

function reportLines2(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}
