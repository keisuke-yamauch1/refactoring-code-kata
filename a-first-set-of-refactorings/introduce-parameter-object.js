function amountInvoiced(startData, endDate) {}
function amountReceived(startDate, endDate) {}
function amountOverdue(startDate, endDate) {}

function amountInvoiced2(dateRange) {}
function amountReceived2(dateRange) {}
function amountOverdue2(dateRange) {}

// =====================================================================================================================

const station = { name: "ZB1",
                  readings: [
                    {temp: 47, time: "2016-11-10 09:10"},
                    {temp: 53, time: "2016-11-10 09:20"},
                    {temp: 58, time: "2016-11-10 09:30"},
                    {temp: 53, time: "2016-11-10 09:40"},
                    {temp: 51, time: "2016-11-10 09:50"},
                  ]
                };

function readingsOutsideRange(station, min, max) {
  return station.readings
    .filter(r => r.temp < min || r.temp > max);
}

// caller
alerts = readingsOutsideRange(station, opratingPlan.tempertureFloor, operatingPlan.temperatureCeiling);

// ----------

class NumberRange {
  constructor(min, max) {
    this._data = {min: min, max: max}
  }
  get min() {return this._data.min;}
  get max() {return this._data.max;}
}

function readingsOutsideRange2(station, min, max, range) {
  return station.readings
    .filter(r => r.temp < min || r.temp > max);
}

alerts = readingsOutsideRange(station,
  opratingPlan.tempertureFloor,
  operatingPlan.temperatureCeiling,
  null);

// ----------

const range = new NumberRange(opratingPlan.tempertureFloor, operatingPlan.temperatureCeiling);
alerts = readingsOutsideRange2(station, opratingPlan.tempertureFloor, operatingPlan.temperatureCeiling, range);

// ----------

function readingsOutsideRange3(station, min, range) {
  return station.readings
    .filter(r => r.temp < min || r.temp > range.max);
}

const range = new NumberRange(opratingPlan.tempertureFloor, operatingPlan.temperatureCeiling);
alerts = readingsOutsideRange3(station, opratingPlan.tempertureFloor, range);

// -----------

function readingsOutsideRange4(station, range) {
  return station.readings
    .filter(r => r.temp < range.min || r.temp > range.max);
}

const range = new NumberRange(opratingPlan.tempertureFloor, operatingPlan.temperatureCeiling);
alerts = readingsOutsideRange4(station, range);

// -----------

function readingsOutsideRange5(station, range) {
  return station.readings
    .filter(r => !range.contains(r.temp));
}

class NumberRang2 {
  constructor(min, max) {
    this._data = {min: min, max: max}
  }
  get min() {return this._data.min;}
  get max() {return this._data.max;}

  contains(arg) {return (arg >= this.min && arg <= this.max);}
}
