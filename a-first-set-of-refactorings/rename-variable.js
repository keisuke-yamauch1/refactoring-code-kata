let a = height * width;

let area = height * width;

// =====================================================================================================================

let tpHd = "untitled";

// 参照
result += `<h1>${tpHd}</h1>`;

// 更新
tpHd = obj['articleTitle'];

// ------------

result += `<h1>${title()}</h1>`;

setTitle(obj['articleTitle']);

function title() {return tpHd;}
function setTitle(arg) {tpHd = arg;}

let _title = "untitled";

function title2() {return _title;}
function setTitle2(arg) {_title = arg;}

// -------------
const cpyNm = "Acme Gooseberries";

const companyName = "Acme Gooseberries";
const cpyNm2 = companyName;
