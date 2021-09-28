function base(aReading) {}
function taxableCharge(aReading) {}

// =====================================================================================================================

function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);
  return aReading;
}

// ---------

reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client 2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshould(aReading.year));

// client 3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}


// ----------

function enrichReading(original) {
  const result = _.cloneDeep(original);
  return result;
}

// client 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

// --------------

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

// client 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// client 1
const rowReading = acquireReading();
const aReading = enrichReading(rowReading);
const baseCharge = aReading.baseCharge;

// client 2
const rowReading = acquireReading();
const aReading = enrichReading(rowReading);
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshould(aReading.year));

// ----------
// client 2
const rowReading = acquireReading();
const aReading = enrichReading(rowReading);
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshould(aReading.year));

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
}
