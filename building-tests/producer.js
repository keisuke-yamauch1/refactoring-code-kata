class Producer {
    constructor(aProvince, data) {
        this._province = aProvince; // 国
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0; // 生産量
    }

    get name() {return this._name;}
    get cost() {return this._cost;}
    set cost(arg) {this._cost = parseInt(arg);}

    get production() {return this._production;}
    set production(amountStr) {
        const amount = parseInt(amountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
        this._production = newProduction;
    }
}

module.exports = {Producer}
