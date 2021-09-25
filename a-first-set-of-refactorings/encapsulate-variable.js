let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

let defaultOwnerData = {firstName: "Martin", lastName: "Fowler"};
export  function defaultOwner2() {return defaultOwnerData;}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}

// =====================================================================================================================

let defaultOwner3 = {firstName: "Martin", lastName: "Fowler"};

// caller
spaceship.owner = defaultOwner3;

// setter
defaultOwner3 = {firstName: "Rebecca", lastName: "Parsons"};

// ------------

function getDefaultOwner() {return defaultOwner3;}
function setDefaultOwner2(arg) {defaultOwner3 = arg;}

spaceship.owner = getDefaultOwner();

setDefaultOwner2({firstName: "Rebecca", lastName: "Parsons"});

// --------------

const owner1 = getDefaultOwner();
assert.equal("Fowler", owner1.lastName, "when set");
const owner2 = getDefaultOwner();
owner2.lastName = "Parsons";
assert.equal("Parsons", owner1.lastName, "after change owner2"); // これで良い？

// -----------

let defaultOwnerData2 = {firstName: "Martin", lastName: "Fowler"};
export function defaultOwner4() {return Object.assign({}, defaultOwnerData2);}
export function setDefaultOwner3(arg) {defaultOwnerData2 = arg;}

// --------------

export function defaultOwner5() {return new Person(defaultOwnerData2);}
class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {return this._lastName;}
  get firstName() {return this._firstName; }
}
