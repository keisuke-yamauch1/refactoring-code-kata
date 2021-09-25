function circum(radius) {
  return 2 * Math.PI * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

// =====================================================================================================================

function circum2(radius) {
  return circumference2(radius);
}

function circumference2(radius) {
  return 2 * Math.PI * radius;
}

// ---------------

class Book {
  addReservation(customer) {
    this._resevation.push(customer);
  }
}

// ---------------

class Book2 {
  addReservation(customer) {
    zz_addReservation(customer);
  }

  zz_addReservation(customer) {
    this._resevation.push(customer);
  }
}

// ---------------

class Book3 {
  addReservation(customer) {
    zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    this._resevation.push(customer);
  }
}

// ---------------

class Book4 {
  addReservation(customer) {
    zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._resevation.push(customer);
  }
}

// ----------------

function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

// caller
const newEnglanders = someCostomers.filter(c => inNewEngland(c));

// -----------

function inNewEngland2(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxNewEngland(stateCode);
}

function xxNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

// -------------

function inNewEngland3(aCustomer) {
  return xxNewEngland(aCustomer.address.state);
}

// caller
const newEnglanders = someCustomer.filter(c => xxNewEngland(c.address.state));

// ---------------

// caller
const newEnglanders = someCustomer.filter(c => inNewEngland4(c.address.state));

function inNewEngland4(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
