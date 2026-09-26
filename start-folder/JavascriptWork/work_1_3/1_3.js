// 小計の数値をそのまま返す
const getTotalPrice = (price, quantity) => {
  return price * quantity; // 数値で返す (例: 2000)
};

const addTax = total => total * 1.1;

const total = getTotalPrice(1000, 2); // → 2000
console.log(`金額は${total}円です`);

const taxedTotal = addTax(total); // → 2200
console.log(`税込金額は${taxedTotal}円です`);