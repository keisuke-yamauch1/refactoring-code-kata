const chai = require("chai");
const expect = require("chai").expect;
const sampleProvinceData = require("../province").sampleProvinceData();
const Province = require("../province").Province;

describe('province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData);
  });
  it('shortfall ', function () {
    chai.expect(asia.shortfall).equal(5)
  });
  it('profit', function () {
    expect(asia.profit).equal(230);
  });
  it('change production', function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });
});

