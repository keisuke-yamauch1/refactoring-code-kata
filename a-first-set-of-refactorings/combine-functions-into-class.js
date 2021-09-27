function base(aReading) {}
function taxableCharge(aReading) {}
function calculateBaseCharge(aReading) {}

class Reading {
  base() {}
  taxableCharge() {}
  calculateBaseCharge() {}
}

// =====================================================================================================================

reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client 2
const aReading2 = acquireReading();
const base2 = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge2 = Math.max(0, base2 - taxThreshold(aReading2.year));

// client 3
const aReading3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading3);

function calculateBaseCharge2(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// -------------

class Reading2 {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get month() {return this._month;}
  get year() {return this._year;}
}

// client 3
const rawReading = acquireReading();
const aReading4 = new Reading2(rawReading);
const basicChargeAmount2 = calculateBaseCharge(aReading4);

// ----------

class Reading3 {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get month() {return this._month;}
  get year() {return this._year;}

  get calculateBaseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

// client 3
const rawReading2 = acquireReading();
const aReading5 = new Reading3(rawReading2);
const basicChargeAmount3 = aReading5.calculateBaseCharge;

// ---------

class Reading4 {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get month() {return this._month;}
  get year() {return this._year;}

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
}

// client 3
const rawReading3 = acquireReading();
const aReading6 = new Reading4(rawReading3);
const basicChargeAmount4 = aReading6.baseCharge;

// ------------

// client 2
const taxableCharge3 = Math.max(0, aReading6.baseCharge - taxThreshold(aReading6.year));

// ------------

function taxableChargeFn(aReading) {
  return Math.max(0, aReading6.baseCharge - taxThreshold(aReading6));
}

// client 3
const basicCharge = taxableChargeFn(aReading6)

// ----------

class Reading5 {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get month() {return this._month;}
  get year() {return this._year;}

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

// client 3
const aReading7 = new Reading5(rawReading3);
const basicCharge2 = aReading7.taxableCharge;
